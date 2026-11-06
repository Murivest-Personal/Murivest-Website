import { Cinzel, Jost } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PROPERTY_TYPES } from '../lib/site';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/acquire';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03';

const TITLE = 'US Multifamily & Commercial Real Estate Acquisition Services | Murivest';
const DESCRIPTION =
  'Buy-side acquisition advisory for institutional investors, family offices and private principals acquiring US multifamily and commercial real estate: defined briefs, sourcing, underwriting and licensed execution.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'multifamily acquisition advisory',
    'buy-side real estate advisory USA',
    'commercial real estate acquisition advisory',
    'off-market multifamily acquisitions',
    'value-add multifamily investment',
    'family office real estate acquisitions',
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
type Item = { title: string; desc: string; href?: string };

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'United States', path: '/usa' },
  { name: 'Acquire', path: PATH },
];

const STRATEGIES: Item[] = [
  {
    title: 'Off-Market Acquisitions',
    desc: 'Discreet sourcing of assets before, or without, a broad marketing process, where entry terms are negotiated rather than auctioned.',
    href: '/usa/acquire/off-market',
  },
  {
    title: 'Stabilized Assets',
    desc: 'Income-producing assets for core and core-plus mandates, where the durability of cash flow is the governing constraint.',
    href: '/usa/acquire/stabilized',
  },
  {
    title: 'Value-Add',
    desc: 'Assets with a defined operational or physical improvement thesis: lease-up, repositioning or capital-expenditure-led basis recovery.',
    href: '/usa/acquire/value-add',
  },
  {
    title: 'Opportunistic',
    desc: 'Complex, time-sensitive or structurally mispriced situations that demand conviction, structuring skill and speed of execution.',
    href: '/usa/acquire/opportunistic',
  },
  {
    title: 'Distressed',
    desc: 'Challenged assets, workouts and recapitalizations, approached with heightened diligence on title, debt and the path to resolution.',
    href: '/usa/acquire/distressed',
  },
];

const MULTIFAMILY_BRIEF: Item[] = [
  {
    title: 'Market & Submarket',
    desc: 'Metro and submarket selected on supply pipeline, employment base and absorption, not on national headlines.',
  },
  {
    title: 'Class & Vintage',
    desc: 'Garden-style, mid-rise or high-rise; the age of the asset and the capital it will need over the hold period.',
  },
  {
    title: 'Scale',
    desc: 'Unit count and deal size matched to your equity, your debt appetite and your appetite for management intensity.',
  },
  {
    title: 'Business Plan',
    desc: 'Stabilised income, light value-add or heavy repositioning, each with its own risk, timeline and capital plan.',
  },
  {
    title: 'Leverage & Debt',
    desc: 'Agency, bank, bridge or assumed debt, sized to the asset’s cash flow and tested against the downside case.',
  },
  {
    title: 'Hold & Exit',
    desc: 'The intended hold period and the exit route, including a future 1031 exchange if tax deferral is part of the plan.',
  },
];

const METHOD: Item[] = [
  {
    title: 'Mandate-Led Sourcing',
    desc: 'We source against a written brief, through owners, operators, lenders and licensed brokers, so you see opportunities that fit rather than a general deal feed.',
  },
  {
    title: 'Underwriting Discipline',
    desc: 'Every target is tested in an assumption-transparent model. We underwrite the downside first, then the basis, then the upside.',
  },
  {
    title: 'Buyer-Side Alignment',
    desc: 'We advise the buyer. We hold no proprietary inventory and run no sell-side book, so there is no conflict with your objectives.',
  },
  {
    title: 'Outcome-First Structuring',
    desc: 'From entity structure to closing mechanics, coordinated with your counsel and tax advisers, the transaction is built around the return you are mandated to deliver.',
  },
];

const PROCESS: Item[] = [
  {
    title: 'Define the Brief',
    desc: 'A confidential consultation to set return targets, markets, asset profile, leverage and timeline. Scope and fees are documented before work begins.',
  },
  {
    title: 'Source & Screen',
    desc: 'Opportunities are screened against the brief and presented with a concise underwriting summary, not a marketing package.',
  },
  {
    title: 'Underwrite & Decide',
    desc: 'Full underwriting, downside cases and structure options on the shortlisted assets, so the decision to proceed is made on evidence.',
  },
  {
    title: 'Negotiate & Close',
    desc: 'Licensed US professionals negotiate and paper the transaction. We coordinate counsel, lenders, intermediaries and brokers through diligence to closing.',
  },
];

const AUDIENCE: Item[] = [
  {
    title: 'Institutional Investors',
    desc: 'Allocators seeking exposure from core to opportunistic, with institutional-grade process and independent underwriting.',
  },
  {
    title: 'Family Offices & UHNW Principals',
    desc: 'Direct investors pursuing concentrated, conviction-led positions with the support of an independent adviser, including non-US principals.',
  },
  {
    title: 'Sponsors & Operating Partners',
    desc: 'Operators who want a sourcing and underwriting extension of their own team across several live mandates.',
  },
];

const LIFECYCLE = [
  { title: 'Capital Advisory', desc: 'Equity and debt to fund the acquisition you are underwriting.', href: '/usa/capital' },
  { title: 'Sell & Disposition', desc: 'The exit discipline that frames how we underwrite the entry.', href: '/usa/sell' },
  { title: '1031 Exchange', desc: 'Replacement-property sourcing for investors exchanging into multifamily.', href: '/usa/1031-exchange' },
];

const FAQS = [
  {
    question: 'What is buy-side acquisition advisory?',
    answer:
      'Buy-side acquisition advisory is independent support for a buyer of real estate: defining the acquisition brief, sourcing and screening opportunities, underwriting them, structuring the transaction and coordinating the professionals who negotiate and close. The adviser works for the buyer and holds no inventory.',
  },
  {
    question: 'What should an investor define before acquiring US multifamily?',
    answer:
      'The target market and submarket, asset class and vintage, unit count and deal size, the business plan (stabilised, light value-add or heavy repositioning), the leverage and debt type, and the hold period and exit route. A written brief on these six points makes sourcing and underwriting far more efficient.',
  },
  {
    question: 'Does Murivest source off-market deals?',
    answer:
      'Murivest sources against a written mandate through owners, operators, lenders and licensed brokers, which includes opportunities that are not broadly marketed. Availability depends on the market and the brief, and no specific pipeline is guaranteed.',
  },
  {
    question: 'Is Murivest a licensed US real estate broker?',
    answer:
      'No. Murivest provides advisory services. Where a licence is required to negotiate or close a purchase, a licensed US real estate professional performs that function alongside Murivest and the investor’s own counsel.',
  },
  {
    question: 'Can non-US investors work with Murivest to acquire US property?',
    answer:
      'Yes. Murivest advises non-US principals and family offices and coordinates with US tax and legal specialists on matters such as FIRPTA, entity structure and home-country tax treatment. Murivest does not itself provide tax or legal advice.',
  },
  {
    question: 'How does Murivest charge for acquisition advisory?',
    answer:
      'Every engagement begins with a written mandate that documents scope, responsibilities and fees before any work starts.',
  },
];

const RELATED = [
  { label: 'Capital Advisory', href: '/usa/capital' },
  { label: '1031 Exchange into Multifamily', href: '/usa/1031-exchange' },
  { label: 'Commercial Real Estate Sectors', href: '/usa/commercial-real-estate' },
  { label: 'About Murivest USA', href: '/usa/about' },
];

/* Multifamily first, everywhere sectors are listed */
const TYPES = [...PROPERTY_TYPES].sort(
  (a, b) => Number(b.slug === 'multifamily') - Number(a.slug === 'multifamily'),
);

const TOC = [
  { id: 'strategies', label: 'Strategies' },
  { id: 'multifamily', label: 'Multifamily Brief' },
  { id: 'method', label: 'Method' },
  { id: 'process', label: 'Process' },
  { id: 'sectors', label: 'Sectors' },
  { id: 'faq', label: 'FAQ' },
];

/* ─── FONTS ───────────────────────────────────────────────────── */
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'], display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300', '400'], display: 'swap' });

/* ─── SHARED STYLES ───────────────────────────────────────────── */
const H2 = 'font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#2C2C2C] leading-[1.1]';
const H2_DARK = 'font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#F8F7F4] leading-[1.1]';
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

function TextLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
        dark ? 'text-[#C9A87C] hover:text-white' : 'text-[#8B7355] hover:text-[#2C2C2C]'
      }`}
    >
      <span>{children}</span>
      <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
    </Link>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  dark?: boolean;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
      <div className="lg:col-span-7">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <h2 className={dark ? H2_DARK : H2}>{title}</h2>
      </div>
      <div className="lg:col-span-5 lg:self-end">
        <p className={dark ? 'text-[14px] leading-[1.9] text-white/70 font-light' : BODY}>{intro}</p>
      </div>
    </div>
  );
}

const GRID_COLS = {
  '2': 'sm:grid-cols-2',
  '3': 'sm:grid-cols-2 lg:grid-cols-3',
  '4': 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

function Cards({
  items,
  cols,
  surface = 'white',
  dark = false,
}: {
  items: Item[];
  cols: keyof typeof GRID_COLS;
  surface?: 'white' | 'cream';
  dark?: boolean;
}) {
  const wrap = dark ? 'bg-white/10 border-white/10' : 'bg-[#E5E2DC] border-[#E5E2DC]';
  const cell = dark
    ? 'bg-[#17251D] hover:bg-[#0B3D2E]/60'
    : surface === 'cream'
      ? 'bg-[#F8F7F4] hover:bg-white'
      : 'bg-white hover:bg-[#F8F7F4]';
  return (
    <div className={`grid gap-px border ${wrap} ${GRID_COLS[cols]}`}>
      {items.map((it, i) => (
        <article key={it.title} className={`group p-8 lg:p-10 transition-colors duration-500 ${cell}`}>
          <p className={`text-[11px] tracking-[0.2em] font-medium mb-4 ${dark ? 'text-[#C9A87C]' : 'text-[#8B7355]'}`}>
            {String(i + 1).padStart(2, '0')}
          </p>
          <h3
            className={`text-[15px] font-semibold tracking-wide mb-3 transition-colors duration-300 ${
              dark ? 'text-[#F8F7F4]' : 'text-[#2C2C2C] group-hover:text-[#8B7355]'
            }`}
          >
            {it.title}
          </h3>
          <p className={`text-[13px] leading-[1.75] font-light ${dark ? 'text-white/70' : 'text-[#5A5A5A]'}`}>
            {it.desc}
          </p>
          {it.href && (
            <div className="mt-6">
              <TextLink href={it.href} dark={dark}>Learn More</TextLink>
            </div>
          )}
        </article>
      ))}
    </div>
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
      foundingDate: '2025',
      address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
      founder: { '@type': 'Person', name: 'Mark Muriithi', jobTitle: 'Founder and Chief Executive Officer' },
      areaServed: { '@type': 'Country', name: 'United States' },
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
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      dateModified: LAST_REVIEWED,
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORG_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      about: { '@id': `${URL}#service` },
      mainEntity: { '@id': `${URL}#service` },
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
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'US Multifamily and Commercial Real Estate Acquisition Advisory',
      serviceType: 'Buy-side acquisition advisory',
      description: DESCRIPTION,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'United States' },
      audience: {
        '@type': 'Audience',
        audienceType: 'Institutional investors, family offices and ultra-high-net-worth individuals',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Acquisition strategies',
        itemListElement: STRATEGIES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
        })),
      },
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
export default function USAAcquirePage() {
  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C] antialiased selection:bg-[#8B7355]/20">
      {/* SCHEMA.ORG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#17251D] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0B3D2E]/40 via-transparent to-black/30"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <nav aria-label="Breadcrumb" className="mb-16 lg:mb-24">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] tracking-[0.25em] uppercase">
              {CRUMBS.map((c, i) => {
                const last = i === CRUMBS.length - 1;
                return (
                  <li key={c.path} className="flex items-center gap-3">
                    {last ? (
                      <span aria-current="page" className="text-white">{c.name}</span>
                    ) : (
                      <>
                        <Link href={c.path} className="text-[#C9A87C] hover:text-white transition-colors duration-300">
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
            Buy the asset you underwrote, not the one you were shown.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Murivest is the independent buy-side adviser for institutional investors, family
            offices and private principals acquiring US multifamily and commercial real estate. We
            define the brief, source against it, underwrite with discipline and coordinate the
            licensed professionals who close.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>Outline an Acquisition Mandate</Link>
            <Link href="/usa/capital" className={BTN_GHOST}>Pair with Capital Advisory</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ON THIS PAGE
      ═══════════════════════════════════════════════════════════ */}
      <nav aria-label="On this page" className="bg-white border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto overflow-x-auto px-6 md:px-12 lg:px-16">
          <ul className="flex gap-8 py-5 whitespace-nowrap">
            {TOC.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] hover:text-[#8B7355] transition-colors duration-300"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          STRATEGIES
      ═══════════════════════════════════════════════════════════ */}
      <section id="strategies" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Acquisition Strategies"
            title="One mandate, mapped to the right risk posture."
            intro="Capital seeking US real estate deploys across a spectrum of risk and return. We organize each mandate around the strategy that fits your objectives and apply the same sourcing and underwriting standard to all of them."
          />
          <Cards items={STRATEGIES} cols="3" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MID-PAGE CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#17251D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <p className="max-w-2xl font-serif text-2xl md:text-3xl leading-[1.3] text-[#F8F7F4]">
            The price you pay is set at the table. The return you earn is set before it.{' '}
            <span className="text-[#C9A87C]">Define the brief first.</span>
          </p>
          <Link href="/usa/contact" className={`${BTN_DARK} shrink-0`}>
            Outline an Acquisition Mandate
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MULTIFAMILY BRIEF
      ═══════════════════════════════════════════════════════════ */}
      <section id="multifamily" className="scroll-mt-24 bg-white">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
            <div className="lg:col-span-4">
              <Eyebrow>Core US Focus</Eyebrow>
              <h2 className={H2}>The multifamily acquisition brief.</h2>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>
            <div className="lg:col-span-8 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
              <p className="text-[16px] leading-[1.9] text-[#2C2C2C] font-light mb-6">
                Apartments are where Murivest concentrates its US work. A well-built acquisition
                brief answers six questions before a single property is reviewed.
              </p>
              <p className={`${BODY} mb-8`}>
                Investors who define these points in writing source faster, underwrite more
                honestly and walk away from poor fits sooner, which is where most acquisition
                value is protected.
              </p>
              <TextLink href="/usa/commercial-real-estate#multifamily">US Multifamily Sector</TextLink>
            </div>
          </div>
          <Cards items={MULTIFAMILY_BRIEF} cols="3" surface="cream" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          METHOD
      ═══════════════════════════════════════════════════════════ */}
      <section id="method" className="scroll-mt-24 bg-[#17251D] text-white">
        <div className={SECTION_PAD}>
          <SectionHead
            dark
            eyebrow="The Murivest Method"
            title="Sourced against a mandate. Underwritten with discipline."
            intro="The best acquisitions are rarely the ones everyone can see. Our approach is built to protect capital before it pursues return."
          />
          <Cards items={METHOD} cols="4" dark />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section id="process" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>How We Engage</Eyebrow>
              <h2 className={H2}>From brief to closing, in four stages.</h2>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>
            <ol className="lg:col-span-8 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
              {PROCESS.map((p, i) => (
                <li key={p.title} className="group border-t border-[#E5E2DC] py-10 first:border-t-0 first:pt-0">
                  <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTORS
      ═══════════════════════════════════════════════════════════ */}
      <section id="sectors" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Sector Coverage"
            title="Multifamily first. Selective across the rest of US real estate."
            intro="Each sector carries distinct supply dynamics, tenant credit and capital requirements, and is underwritten on its own merits."
          />
          <div className="grid gap-px bg-[#E5E2DC] border border-[#E5E2DC] sm:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((type, i) => (
              <Link
                key={type.slug}
                href={`/usa/commercial-real-estate/${type.slug}`}
                className={`group flex items-center justify-between gap-4 p-8 transition-colors duration-500 ${
                  i === 0 ? 'bg-[#F8F7F4] hover:bg-white' : 'bg-white hover:bg-[#F8F7F4]'
                }`}
              >
                <span>
                  <span className="block font-serif text-2xl text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
                    {type.label}
                  </span>
                  {i === 0 && (
                    <span className="mt-2 block text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                      Core US focus
                    </span>
                  )}
                </span>
                <span aria-hidden="true" className="w-6 h-[1px] shrink-0 bg-[#8B7355] group-hover:w-10 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AUDIENCE
      ═══════════════════════════════════════════════════════════ */}
      <section id="audience" className="scroll-mt-24 bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Who We Advise"
            title="Built for buyers who cannot compromise on basis or process."
            intro="Our mandates suit principals who value discretion, speed and analytical conviction over a generic deal feed."
          />
          <Cards items={AUDIENCE} cols="3" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RELATED MANDATES
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#17251D] text-white">
        <div className={SECTION_PAD}>
          <SectionHead
            dark
            eyebrow="Related Mandates"
            title="Acquisition does not exist in isolation."
            intro="Most acquisitions connect to capital structure and, eventually, to an exit. We keep the advice aligned across the full lifecycle."
          />
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {LIFECYCLE.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col justify-between gap-8 bg-[#17251D] p-8 lg:p-10 hover:bg-[#0B3D2E]/60 transition-colors duration-500"
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#F8F7F4]">{l.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-white/70 font-light">{l.desc}</p>
                </div>
                <span aria-hidden="true" className="w-6 h-[1px] bg-[#C9A87C] group-hover:w-10 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section id="faq" className="scroll-mt-24 bg-white">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Institutional Enquiries</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] leading-[1.1] mb-6">
                Acquisition Advisory: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers on how a buy-side mandate works and what we do not do.
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
                  <li key={r.href}><TextLink href={r.href}>{r.label}</TextLink></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
                Important Notice
              </p>
              <p className="text-[12px] leading-[1.8] text-[#5A5A5A] font-light">
                Murivest provides advisory services and is not a tax adviser, securities broker,
                mortgage broker, appraiser or licensed US real estate broker. It works alongside the
                investor&rsquo;s own advisers and appropriately licensed US professionals, who
                perform any function that requires a licence. This page is general information and
                not tax, legal or investment advice. Past or described strategies do not guarantee
                any outcome or the availability of any opportunity.
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
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A87C] font-medium">Engage Murivest</p>
            <span className="w-8 h-[1px] bg-[#C9A87C]" />
          </div>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#F8F7F4] leading-[1.15]">
            The deals you decline define the portfolio you build.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            Tell us the return profile, sector and geography you intend to deploy into. We will
            help you define the brief and set the scope in writing before any work begins.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>Outline an Acquisition Mandate</Link>
            <Link href="/usa/acquire/off-market" className={BTN_GHOST}>Explore Off-Market Strategy</Link>
          </div>
        </div>
      </section>
    </main>
  );
}