import { NextRequest, NextResponse } from 'next/server';
import { after } from 'next/server';          // Next.js 15 — see note below if on 14
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// ---------------------------------------------------------------------------
// Supabase server client (Project A). Uses the SERVICE key on purpose:
// this is server-side code only — never import this client into a component.
// ---------------------------------------------------------------------------
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

// ---------------------------------------------------------------------------
// 1. Validation schema — required fields, email format, hard length caps.
//    `country` is validated against the countries table in the RPC (step 3),
//    never trusted from the client. `website` is the honeypot.
// ---------------------------------------------------------------------------
const contactSchema = z.object({
  country:          z.string().min(2).max(2),
  name:             z.string().min(1).max(120),
  email:            z.string().email().max(254),
  phone:            z.string().max(40).optional().or(z.literal('')),
  company:          z.string().max(160).optional().or(z.literal('')),
  message:          z.string().max(5000).optional().or(z.literal('')),
  investment_range: z.string().max(80).optional().or(z.literal('')),
  property_type:    z.string().max(80).optional().or(z.literal('')),
  budget:           z.string().max(80).optional().or(z.literal('')),
  objectives:       z.string().max(1000).optional().or(z.literal('')),
  page_url:         z.string().max(500).optional().or(z.literal('')),
  referrer:         z.string().max(500).optional().or(z.literal('')),
  source:           z.string().max(80).optional().or(z.literal('')),
  medium:           z.string().max(80).optional().or(z.literal('')),
  campaign:         z.string().max(120).optional().or(z.literal('')),
  marketing_consent: z.boolean().optional().default(false),
  website:          z.string().optional().or(z.literal('')), // honeypot — must stay empty
});

// ---------------------------------------------------------------------------
// 2. Rate limit — in-memory per IP. Fine for a single instance; move to
//    Upstash Redis when you deploy to multiple instances.
// ---------------------------------------------------------------------------
const hits = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

// ---------------------------------------------------------------------------
// HTML escaping — every piece of user input is escaped BEFORE it touches
// an email template. Never interpolate raw user input into HTML.
// ---------------------------------------------------------------------------
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ---------------------------------------------------------------------------
// Country-specific confirmation copy + config.
// Fix applied: no investment-return claims anywhere; absolute image URLs;
// per-country office, currency and messaging.
// ---------------------------------------------------------------------------
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.murivest.com';

const COUNTRY_CONFIG: Record<string, {
  name: string; currency: string; office: string;
  phone: string; regionNote: string;
}> = {
  KE: {
    name: 'Kenya', currency: 'KES',
    office: '14th Floor, The Lofts, Riverside Drive, Westlands, Nairobi',
    phone: '+254 115 277 610',
    regionNote: 'our curated portfolio of prime Kenyan residential and commercial opportunities',
  },
  GB: {
    name: 'United Kingdom', currency: 'GBP',
    office: '12 Berkeley Square, Mayfair, London W1J 6BS',
    phone: '+44 7864 855742',
    regionNote: 'our international portfolio and UK investor advisory services',
  },
  US: {
    name: 'United States', currency: 'USD',
    office: 'Nairobi office — serving US investors remotely',
    phone: '+254 115 277 610',
    regionNote: 'our international portfolio dedicated to US-based investors',
  },
  AE: {
    name: 'United Arab Emirates', currency: 'AED',
    office: 'Nairobi office — serving GCC investors remotely',
    phone: '+254 115 277 610',
    regionNote: 'our portfolio of income-generating opportunities for GCC-based investors',
  },
  NG: {
    name: 'Nigeria', currency: 'NGN',
    office: 'Nairobi office — serving West African investors remotely',
    phone: '+254 115 277 610',
    regionNote: 'our portfolio and diaspora investor programmes',
  },
};

function emailShell(title: string, inner: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${title}</title></head>
<body style="margin:0;padding:0;background:#f8f7f4;font-family:Georgia,serif;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;">
    <div style="background:#0B3D2E;padding:32px;text-align:center;">
      <img src="${SITE_URL}/logo.webp" alt="Murivest Group Ltd" style="max-height:56px;" />
    </div>
    ${inner}
    <div style="padding:24px 32px;background:#f8f7f4;font-size:12px;color:#5A5A5A;text-align:center;">
      Murivest Group Ltd · All communications are handled in strict confidence.
    </div>
  </div>
</body></html>`;
}

async function sendEmails(payload: {
  reference: string; name: string; email: string; phone: string;
  country: string; message: string; investment_range: string; property_type: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: parseInt(process.env.SMTP_PORT || '465', 10) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const cfg = COUNTRY_CONFIG[payload.country] ?? COUNTRY_CONFIG.KE;

  const safe = {
    reference: escapeHtml(payload.reference),
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone || '—'),
    message: escapeHtml(payload.message || '—').replace(/\n/g, '<br>'),
    investment_range: escapeHtml(payload.investment_range || '—'),
    property_type: escapeHtml(payload.property_type || '—'),
  };

  // --- internal team notification (summary + reference, no bulk data) ---
  const teamHtml = emailShell(
    `New ${cfg.name} enquiry ${payload.reference}`,
    `<div style="padding:32px;">
      <h1 style="font-size:22px;color:#2C2C2C;margin:0 0 20px;">New Enquiry — ${escapeHtml(cfg.name)}</h1>
      <table style="width:100%;font-size:14px;color:#2C2C2C;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#8B7355;">Reference</td><td><strong>${safe.reference}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#8B7355;">Name</td><td>${safe.name}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7355;">Email</td><td>${safe.email}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7355;">Phone</td><td>${safe.phone}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7355;">Range</td><td>${safe.investment_range}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7355;">Type</td><td>${safe.property_type}</td></tr>
        <tr><td style="padding:6px 0;color:#8B7355;">Message</td><td>${safe.message}</td></tr>
      </table>
      <p style="margin-top:24px;font-size:13px;color:#5A5A5A;">
        View the full record in Operations once routed (reference ${safe.reference}).
      </p>
    </div>`
  );

  await transporter.sendMail({
    from: `"Murivest Group Ltd" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_ADMIN_EMAIL || 'capital@murivest.co.ke',
    subject: `New ${cfg.name} enquiry — ${payload.reference}`,
    text: `New enquiry ${payload.reference}\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nRange: ${payload.investment_range}\nMessage: ${payload.message}`,
    html: teamHtml,
  });

  // --- investor confirmation — country-specific copy, no return claims ---
  const confirmHtml = emailShell(
    `Thank you for contacting Murivest Group Ltd — ${payload.reference}`,
    `<div style="padding:32px;">
      <h1 style="font-size:24px;color:#2C2C2C;margin:0 0 8px;">Thank You, ${safe.name}</h1>
      <p style="color:#5A5A5A;font-size:14px;">Your enquiry reference is <strong style="color:#0B3D2E;">${safe.reference}</strong>.</p>
      <p style="color:#5A5A5A;font-size:14px;line-height:1.8;">
        A senior advisor for our ${escapeHtml(cfg.name)} desk will contact you within 48 hours to discuss
        ${escapeHtml(cfg.regionNote)}. All communications are held in strict confidence.
      </p>
      <p style="color:#5A5A5A;font-size:14px;line-height:1.8;">
        <strong>${escapeHtml(cfg.office)}</strong><br/>
        Tel: ${escapeHtml(cfg.phone)}
      </p>
    </div>`
  );

  await transporter.sendMail({
    from: `"Murivest Group Ltd" <${process.env.SMTP_USER}>`,
    to: payload.email,
    subject: `Murivest Group Ltd — enquiry received (${payload.reference})`,
    text: `Dear ${payload.name},\n\nThank you for contacting Murivest Group Ltd. Your reference is ${payload.reference}.\nA senior advisor for our ${cfg.name} desk will contact you within 48 hours.\n\nMurivest Group Ltd`,
    html: confirmHtml,
  });
}

// ---------------------------------------------------------------------------
// 3. POST handler — the exact order: validate → insert (one transaction via
//    RPC) → outbox trigger fires automatically → return reference.
//    Emails run in after() and NEVER block or fail the response.
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the highlighted fields and try again.' }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot: bots fill the invisible "website" field — silently accept, do nothing.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  // Server-authoritative page_url: ignore any page_url the client sends and
  // use the real Referer header instead (fallback: header-provided page_url).
  const referrerHeader = request.headers.get('referer') || '';

const { data: result, error } = await supabase.rpc('submit_inquiry', {
  p_country_code:     data.country.toUpperCase(),
  p_name:             data.name,
  p_email:            data.email,
  p_phone:            data.phone || null,
  p_message:          data.message || null,
  p_investment_range: data.investment_range || null,
  p_property_type:    data.property_type || null,
  p_budget:           data.budget || null,
  p_objectives:       data.objectives || null,
  p_page_url:         referrerHeader || data.page_url || null,
  p_referrer:         data.referrer || referrerHeader || null,
  p_source:           data.source || null,
  p_medium:           data.medium || null,
  p_campaign:         data.campaign || null,
  p_company:          data.company || null,
  p_marketing_consent:data.marketing_consent ?? false,
});

if (error || !result) {
  console.error('submit_inquiry failed:', error);
  return NextResponse.json(
    { error: 'Failed to submit your inquiry. Please try again.' },
    { status: 500 }
  );
}

  const { reference } = result as { id: string; reference: string };

  // Fire-and-forget AFTER the response is sent. An SMTP failure is logged,
  // never thrown, and never rolls back the saved inquiry.
  after(async () => {
    try {
      await sendEmails({
        reference,
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        country: data.country.toUpperCase(),
        message: data.message || '',
        investment_range: data.investment_range || '',
        property_type: data.property_type || '',
      });
    } catch (err) {
      console.error('Post-submission email failed (inquiry saved):', err);
    }
  });

  return NextResponse.json({ ok: true, reference }, { status: 200 });
}