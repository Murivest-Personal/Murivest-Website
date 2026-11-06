import { Cinzel, Jost } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Clock, ShieldCheck, Lock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import { SITE } from '../lib/site';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/contact';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03';

const TITLE = 'Contact Murivest USA | Request a US Multifamily Advisory Mandate';
const DESCRIPTION =
  'Contact Murivest USA in confidence to discuss a US multifamily acquisition, a 1031 exchange, a disposition or financing strategy, or to engage us on a mandate.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'contact commercial real estate advisory USA',
    'multifamily investment advisory contact',
    '1031 exchange advisory enquiry',
    'request real estate mandate',
    'Murivest Group Ltd',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Murivest Group Ltd',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
};

/* ─── DATA ────────────────────────────────────────────────────── */
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'United States', path: '/usa' },
  { name: 'Contact', path: PATH },
];

const ASSURANCES = [
  {
    icon: Clock,
    title: 'Response time',
    text: 'A team member responds within one business day.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidentiality',
    text: 'Every enquiry is handled in strict confidence.',
  },
  {
    icon: Lock,
    title: 'Data privacy',
    text: 'Your details are used only to respond to your enquiry. We do not sell them.',
  },
];

const STEPS = [
  {
    title: 'Enquiry review',
    desc: 'We review your enquiry and assess whether and how Murivest can help.',
  },
  {
    title: 'Confidential consultation',
    desc: 'A team member contacts you within one business day to schedule a private conversation.',
  },
  {
    title: 'Scope and mandate',
    desc: 'We discuss objectives, timeline and whether a formal written mandate is appropriate. Scope and fees are documented before any work begins.',
  },
];

const PREPARE = [
  {
    title: 'Acquiring',
    desc: 'Target markets, unit count or deal size range, leverage appetite, hold period and your decision timeline.',
  },
  {
    title: 'Exchanging (1031)',
    desc: 'Expected sale date or closing status of the relinquished property, estimated equity and debt, and whether a qualified intermediary is engaged.',
  },
  {
    title: 'Disposing or financing',
    desc: 'Asset type and location, ownership structure, objectives for price versus certainty, and any lender or capital constraints.',
  },
];

const FAQS = [
  {
    question: 'How do I engage Murivest on a US multifamily mandate?',
    answer:
      'Submit the enquiry form on this page or email the team. We respond within one business day to arrange a confidential consultation, after which a written mandate documents scope, responsibilities and fees before any work begins.',
  },
  {
    question: 'How quickly will Murivest respond?',
    answer:
      'A team member aims to respond within one business day. If your matter is time-sensitive, such as a 1031 exchange with a running 45-day identification period, say so in the enquiry and we will prioritise it.',
  },
  {
    question: 'Is my enquiry confidential?',
    answer:
      'Yes. Enquiries are handled in strict confidence and shared only with people who need to know in order to respond. Murivest uses your details to respond to your enquiry and does not sell them.',
  },
  {
    question: 'What should I include in my first message?',
    answer:
      'The nature of your objective (acquisition, exchange, disposition or financing), the asset or target market, an approximate size range and your timeline. You do not need full documentation at this stage.',
  },
  {
    question: 'Is there a cost for the initial consultation?',
    answer:
      'Murivest does not charge for the initial confidential consultation. Any fee for an engagement is agreed in writing before work begins.',
  },
  {
    question: 'Does Murivest provide tax, legal or brokerage services?',
    answer:
      'No. Murivest is an advisory firm and is not a tax adviser, qualified intermediary, securities broker or licensed US real estate broker. It works alongside your own advisers and appropriately licensed US professionals.',
  },
];

const RELATED = [
  { label: '1031 Exchange into Multifamily', href: '/usa/1031-exchange' },
  { label: 'About Murivest USA', href: '/usa/about' },
  { label: 'Global Research', href: '/research' },
  { label: 'Governance & Mandate Standards', href: '/governance' },
];

/* ─── FONTS ───────────────────────────────────────────────────── */
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'], display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300', '400'], display: 'swap' });

/* ─── SHARED STYLES ───────────────────────────────────────────── */
const H2 = 'font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#2C2C2C] leading-[1.1]';
const BODY = 'text-[14px] leading-[1.9] text-[#5A5A5A] font-light';
const SECTION_PAD = 'max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36';
const FOCUS =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2';
const BTN_DARK = `inline-flex items-center justify-center px-8 py-4 bg-[#F8F7F4] text-[#0B3D2E] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A87C] transition-colors duration-500 ${FOCUS} focus-visible:ring-offset-[#17251D]`;
const BTN_GHOST = `inline-flex items-center justify-center px-8 py-4 border border-white/40 text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#C9A87C] hover:text-[#C9A87C] transition-colors duration-500 ${FOCUS} focus-visible:ring-offset-[#17251D]`;

/* ─── LOCAL PRIMITIVES ────────────────────────────────────────── */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={`w-8 h-[1px] ${dark ? 'bg-[#C9A87C]' : 'bg-[#8B7355]'}`} />
      <p
        className={`text-[10px] tracking-[0.35em] uppercase font-medium ${
          dark ? 'text-[#C9A87C]' : 'text-[#8B7355]'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium text-[#8B7355] hover:text-[#2C2C2C] transition-colors duration-300"
    >
      <span>{children}</span>
      <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
    </Link>
  );
}

/* ─── STRUCTURED DATA ─────────────────────────────────────────── */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'Murivest Group Ltd',
      alternateName: ['Murivest', 'Murivest USA'],
      url: BASE,
      logo: `${BASE}/logo.png`,
      areaServed: { '@type': 'Country', name: 'United States' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Advisory Enquiries',
        email: SITE.email,
        availableLanguage: ['English'],
        url: URL,
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: BASE,
      name: 'Murivest Group Ltd',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ContactPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      dateModified: LAST_REVIEWED,
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORG_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      about: { '@id': ORG_ID },
      mainEntity: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: CRUMBS.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: `${BASE}${c.path === '/' ? '' : c.path}`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

/* ─── MAIN PAGE ───────────────────────────────────────────────── */
export default async function USAContactPage({
  searchParams,
}: {
  searchParams: Promise<{ inquiry?: string }>;
}) {
  const { inquiry } = await searchParams;
  const defaultType = inquiry === 'leasing' ? 'leasing' : 'mandate';

  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C] antialiased selection:bg-[#8B7355]/20">
      {/* SCHEMA.ORG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#17251D] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0B3D2E]/40 via-transparent to-black/30"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <nav aria-label="Breadcrumb" className="mb-16 lg:mb-24">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] tracking-[0.25em] uppercase">
              {CRUMBS.map((c, i) => {
                const last = i === CRUMBS.length - 1;
                return (
                  <li key={c.path} className="flex items-center gap-3">
                    {last ? (
                      <span aria-current="page" className="text-white">
                        {c.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={c.path}
                          className="text-[#C9A87C] hover:text-white transition-colors duration-300"
                        >
                          {c.name}
                        </Link>
                        <span aria-hidden="true" className="text-white/30">/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <p className={`${cinzel.className} text-sm sm:text-base uppercase tracking-[0.3em] text-[#C9A87C]`}>
            Murivest
            <span className={`${jost.className} ml-4 text-[10px] font-light tracking-[0.5em]`}>
              United States
            </span>
          </p>
          <div className="mt-3 h-px w-16 bg-[#C9A87C]/60" />

          <h1 className="mt-10 max-w-4xl font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] text-[#F8F7F4]">
            Begin in confidence.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Contact Murivest USA to discuss a US multifamily acquisition, a 1031 exchange, a
            disposition or a financing strategy. Every enquiry is read by a senior member of the
            team and answered within one business day.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="#inquiry" className={BTN_DARK}>
              Request a Mandate
            </a>
            <a href={`mailto:${SITE.email}`} className={BTN_GHOST}>
              Email the Team
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ENQUIRY FORM + DIRECT CONTACT
      ═══════════════════════════════════════════════════════════ */}
      <section id="inquiry" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 lg:items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Request a Mandate or Enquiry</Eyebrow>
              <h2 className={H2}>Tell us what you intend to achieve.</h2>
              <p className={`${BODY} mt-8 max-w-xl`}>
                Describe your objective, the asset or market, and your timeline. You do not need
                full documentation at this stage. All enquiries are treated in strict confidence.
              </p>
              <div className="mt-12 border border-[#E5E2DC] bg-white p-6 sm:p-8 lg:p-10">
                <InquiryForm defaultType={defaultType} />
              </div>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-px">
              <div className="border border-[#E5E2DC] bg-white p-8 lg:p-10">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
                  Direct Contact
                </p>

                <div className="flex items-start gap-4">
                  <Mail size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#8B7355]" />
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block break-words text-[15px] text-[#2C2C2C] underline decoration-[#8B7355]/50 underline-offset-4 hover:text-[#8B7355] transition-colors duration-300"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <ul className="mt-8 space-y-6 border-t border-[#E5E2DC] pt-8">
                  {ASSURANCES.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex items-start gap-4">
                      <Icon size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#8B7355]" />
                      <div>
                        <p className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                          {title}
                        </p>
                        <p className="mt-1 text-[13px] leading-[1.75] text-[#5A5A5A] font-light">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#E5E2DC] bg-[#17251D] p-8 lg:p-10 text-white">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A87C] font-medium mb-4">
                  Time-Sensitive Exchange?
                </p>
                <p className="text-[14px] leading-[1.8] text-white/75 font-light">
                  If a 1031 exchange clock is already running, state your sale closing date in the
                  enquiry and we will prioritise it.
                </p>
                <div className="mt-6">
                  <Link
                    href="/usa/1031-exchange"
                    className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium text-[#C9A87C] hover:text-white transition-colors duration-300"
                  >
                    <span>1031 Exchange Advisory</span>
                    <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT TO EXPECT
      ═══════════════════════════════════════════════════════════ */}
      <section id="process" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>What to Expect</Eyebrow>
              <h2 className={H2}>Three steps from enquiry to mandate.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                No pitch deck and no obligation. The first conversation is about your objective,
                not our services.
              </p>
            </div>
          </div>

          <ol className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-[#F8F7F4] p-8 lg:p-10">
                <p className="font-serif text-4xl text-[#8B7355] mb-6">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3">
                  {s.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT TO PREPARE
      ═══════════════════════════════════════════════════════════ */}
      <section id="prepare" className="scroll-mt-24 bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Preparing Your Enquiry</Eyebrow>
              <h2 className={H2}>What helps us respond precisely.</h2>
              <p className={`${BODY} mt-8`}>
                A few details let us give a useful first answer. Share what you can; leave the
                rest for the consultation.
              </p>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>

            <div className="lg:col-span-8">
              {PREPARE.map((p, i) => (
                <div
                  key={p.title}
                  className="border-t border-[#E5E2DC] py-10 first:border-t-0 first:pt-0"
                >
                  <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section id="faq" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Institutional Enquiries</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] leading-[1.1] mb-6">
                Contacting Murivest USA: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers on how to engage us, what happens next and what we do not do.
              </p>
            </div>

            <div className="lg:col-span-8">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group border-b border-[#E5E2DC] py-6">
                  <summary
                    className={`list-none flex cursor-pointer items-start justify-between gap-4 [&::-webkit-details-marker]:hidden ${FOCUS}`}
                  >
                    <span className="text-[14px] md:text-[15px] text-[#2C2C2C] font-medium leading-relaxed group-hover:text-[#8B7355] transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[#8B7355] text-lg leading-none mt-0.5 font-light group-open:rotate-45 transition-transform duration-300"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mt-4 max-w-2xl">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RELATED & NOTICE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
                Continue Reading
              </p>
              <ul className="space-y-4">
                {RELATED.map((r) => (
                  <li key={r.href}>
                    <TextLink href={r.href}>{r.label}</TextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
                Important Notice
              </p>
              <p className="text-[12px] leading-[1.8] text-[#5A5A5A] font-light">
                Murivest provides advisory services and is not a tax adviser, qualified
                intermediary, securities broker or licensed US real estate broker. Submitting an
                enquiry does not create an advisory relationship; that arises only under a written
                mandate. This page is general information and not tax, legal or investment advice.
              </p>
              <p className="text-[11px] text-[#5A5A5A]/70 mt-4 italic">
                Last reviewed <time dateTime={LAST_REVIEWED}>3 November 2026</time>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CLOSING CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#17251D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-32 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#C9A87C]" />
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A87C] font-medium">
              Engage Murivest
            </p>
            <span className="w-8 h-[1px] bg-[#C9A87C]" />
          </div>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#F8F7F4] leading-[1.15]">
            The right conversation, early, is the cheapest advice you will ever take.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            Whether you are acquiring, exchanging or exiting, a confidential consultation costs
            nothing and commits you to nothing.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#inquiry" className={BTN_DARK}>
              Request a Mandate
            </a>
            <Link href="/usa/about" className={BTN_GHOST}>
              About Murivest USA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}