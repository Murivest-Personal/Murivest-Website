import { Cinzel, Jost } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import CEOInstitutionalProfile from '@/components/CEOInstitutionalProfile';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/about';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03';

const TITLE = 'Murivest USA | Institutional Commercial Real Estate Services';
const DESCRIPTION =
  'Murivest USA is the global leader in commercial real estate services for institutional investors, family offices and private principals acquiring and exiting US commercial property, with a focus on multifamily apartments.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'commercial real estate services USA',
    'multifamily housing',
    'real estate',
    'institutional real estate',
    'family office real estate',
    'multifamily apartments',
    '1031 exchange',
    'Murivest USA',
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
  { name: 'About', path: PATH },
];

const KEY_FACTS = [
  { value: '2025', label: 'Firm established' },
  { value: 'Commercial Real Estate Services', label: 'Organization' },
  { value: 'Advisory-Only', label: 'No pooled capital' },
  { value: 'Multifamily', label: 'Core US focus' },
];

const TOC = [
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'services', label: 'Advisory' },
  { id: 'sectors', label: 'Sectors' },
  { id: 'method', label: 'Method' },
  { id: 'principles', label: 'Principles' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'faq', label: 'FAQ' },
];

const PHILOSOPHY = [
  `Institutional-quality advisory is scarce where it matters most: at the point of decision. Large brokerage platforms are structured around transactions and listings, and capital sponsors are structured around their own funds. Principals who simply want an informed, unconflicted view on a single acquisition, exit or exchange are often served by neither.`,
  `Murivest was established in 2025 to fill that gap. We act as the principal's adviser, scoping each mandate in writing, underwriting the opportunity to institutional standards and coordinating the licensed professionals who execute alongside us. We do not manage proprietary funds, pool investor capital or carry inventory, so our interests stay aligned with yours.`,
  `In the United States, we concentrate on multifamily apartments, the asset class where durable demand, deep lender markets and the 1031 exchange converge for sophisticated capital.`,
];

const SERVICES = [
  {
    title: 'Acquisition Advisory',
    desc: 'Defined acquisition briefs, off-market and brokered sourcing, and institutional underwriting before a letter of intent is signed.',
    href: '/usa/multifamily',
  },
  {
    title: 'Disposition & Exit Strategy',
    desc: 'Exit timing, positioning and buyer strategy for owners who want pricing discipline and confidentiality, coordinated with licensed brokers.',
    href: '/usa/contact',
  },
  {
    title: '1031 Exchange Advisory',
    desc: 'Replacement-property sourcing and deadline governance for investors exchanging into US multifamily.',
    href: '/usa/1031-exchange',
  },
  {
    title: 'Capital Markets & Financing',
    desc: 'Debt and equity strategy alongside specialist lenders and advisers, with leverage tested against the underwriting, not the other way round.',
    href: '/usa/contact',
  },
  {
    title: 'Leasing Strategy',
    desc: 'Lease structuring and tenant strategy for commercial assets, delivered alongside licensed leasing professionals.',
    href: '/usa/contact',
  },
  {
    title: 'Cross-Border Principals',
    desc: 'Coordination with US tax and legal advisers for non-US investors and family offices entering or exiting US property.',
    href: '/usa/contact',
  },
];

const SECTORS = [
  {
    title: 'Multifamily',
    desc: 'Our core US focus. Stabilised and value-add apartment communities, 1031 exchange replacements and portfolio sequencing.',
    href: '/usa/multifamily',
    primary: true,
  },
  { title: 'Industrial & Logistics', desc: 'Warehouse, distribution and last-mile assets.', href: '/usa', primary: false },
  { title: 'Office', desc: 'Selective, quality-led exposure and repositioning.', href: '/usa', primary: false },
  { title: 'Retail', desc: 'Necessity-anchored and mixed-use retail.', href: '/usa', primary: false },
  { title: 'Data Centers', desc: 'Digital infrastructure and powered-land opportunities.', href: '/usa', primary: false },
];

const METHOD = [
  {
    title: 'Engagement',
    desc: 'A confidential consultation to establish your objectives, constraints and the specific outcome you seek. Scope, fees and responsibilities are documented before work begins.',
  },
  {
    title: 'Strategy & Underwriting',
    desc: 'Market analysis, asset-level underwriting and positioning strategy, tested against current capital markets conditions rather than historical averages.',
  },
  {
    title: 'Targeted Execution',
    desc: 'Disciplined outreach to pre-qualified counterparties, with confidentiality maintained throughout and licensed US professionals engaged where the law requires.',
  },
  {
    title: 'Closing & Review',
    desc: 'From letter of intent through diligence to closing, we coordinate counsel, intermediaries and brokers, then review the outcome against the original mandate.',
  },
];

const PRINCIPLES = [
  {
    title: 'Independence',
    desc: 'No proprietary funds and no inventory. We are paid to advise, not to place product.',
  },
  {
    title: 'Governance',
    desc: 'Formal scope documentation, KYC/AML verification and transparent fee structures on every mandate.',
  },
  {
    title: 'Confidentiality',
    desc: 'Mandates are discreet by design. Information moves only to parties with a defined need to know.',
  },
  {
    title: 'Candour',
    desc: 'We state plainly what we are, and what we are not: not a tax adviser, a qualified intermediary or a US-licensed broker.',
  },
];

const FAQS = [
  {
    question: 'What is Murivest USA?',
    answer:
      'Murivest USA is the United States advisory practice of Murivest Group Ltd, an independent, mandate-based commercial real estate advisory firm established in 2025. It advises institutional investors, family offices and private principals on acquiring, exiting and financing US commercial property, with a focus on multifamily apartments.',
  },
  {
    question: 'Is Murivest a licensed US real estate broker?',
    answer:
      'No. Murivest provides advisory and sourcing services and works alongside the investor\'s own counsel, tax advisers and appropriately licensed US real estate professionals on every transaction. Where a licence is required to market, negotiate or close a transaction, a licensed professional performs that function.',
  },
  {
    question: 'Who does Murivest advise?',
    answer:
      'Institutional investors, family offices, private capital and ultra-high-net-worth principals, including non-US investors seeking exposure to US commercial real estate. Engagements are mandate-based and confidential.',
  },
  {
    question: 'Which US property types does Murivest cover?',
    answer:
      'Murivest\'s core US focus is multifamily apartments. It also advises on industrial and logistics, office, retail and data center assets on a mandate basis.',
  },
  {
    question: 'Does Murivest manage capital or operate investment funds?',
    answer:
      'No. Murivest does not manage proprietary funds, pool investor capital, carry inventory or offer regulated financial products. All engagements are advisory in nature, which keeps the firm independent of the transactions it advises on.',
  },
  {
    question: 'How are Murivest engagements structured and priced?',
    answer:
      'Every engagement begins with a written mandate that documents scope, responsibilities and fees before work starts. Fee structures are agreed in advance and disclosed on each mandate.',
  },
  {
    question: 'Can non-US investors work with Murivest?',
    answer:
      'Yes. Murivest coordinates with US tax and legal specialists on matters such as FIRPTA, entity structuring and home-country tax treatment. Murivest does not itself provide tax or legal advice.',
  },
  {
    question: 'Where is Murivest based?',
    answer:
      'Murivest Group Ltd was founded in Nairobi, Kenya, and advises principals globally. US transactions are executed alongside licensed US professionals appointed for each mandate.',
  },
];

const RELATED = [
  { label: '1031 Exchange into Multifamily', href: '/usa/1031-exchange' },
  { label: 'US Multifamily Advisory', href: '/usa/multifamily' },
  { label: 'Global Research', href: '/research' },
  { label: 'Governance & Mandate Standards', href: '/governance' },
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
      description: DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
      founder: {
        '@type': 'Person',
        name: 'Mark Muriithi',
        jobTitle: 'Founder and Chief Executive Officer',
      },
      areaServed: { '@type': 'Country', name: 'United States' },
      knowsAbout: [
        'Multifamily apartment investment',
        '1031 like-kind exchanges',
        'Commercial real estate advisory',
        'Cross-border real estate investment',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Advisory Enquiries',
        email: 'capital@murivest.com',
        availableLanguage: ['English'],
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
      '@type': 'AboutPage',
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
      '@type': 'ItemList',
      '@id': `${URL}#services`,
      name: 'Murivest USA advisory services',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.desc,
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: 'United States' },
        },
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
export default function USAAboutPage() {
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
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-24 lg:pt-24 lg:pb-32">
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
            The Concierge of Capital.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Murivest is an independent advisory practice for institutional investors, family
            offices and private principals acquiring and exiting US commercial property, with a
            focus on multifamily apartments. We advise. We do not manage funds, pool capital or
            carry inventory.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>
              Request a Mandate
            </Link>
            <a href="#method" className={BTN_GHOST}>
              How We Work
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KEY FACTS
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Murivest at a glance"
        className="bg-[#F8F7F4] text-[#2C2C2C] border-b border-[#E5E2DC]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {KEY_FACTS.map((f) => (
              <div
                key={f.label}
                className="text-center lg:text-left lg:border-l lg:border-[#E5E2DC] lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <dt className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-2 break-words">
                  {f.value}
                </dt>
                <dd className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                  {f.label}
                </dd>
              </div>
            ))}
          </dl>
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
          PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section id="philosophy" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Our Philosophy</Eyebrow>
              <h2 className={H2}>Built for principals who demand institutional-quality execution.</h2>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>
            <div className="lg:col-span-8 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
              <p className="text-[16px] leading-[1.9] text-[#2C2C2C] font-light mb-6">
                {PHILOSOPHY[0]}
              </p>
              {PHILOSOPHY.slice(1).map((p, i) => (
                <p key={i} className={`${BODY} mb-6`}>
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <TextLink href="/usa/1031-exchange">1031 Exchange into Multifamily</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ADVISORY SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <section id="services" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>Advisory Services</Eyebrow>
              <h2 className={H2}>One adviser across the full life of an investment.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                From the acquisition brief to the exit, we scope each mandate in writing and
                coordinate the licensed professionals who execute alongside us.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className="group bg-[#F8F7F4] p-8 lg:p-10 hover:bg-white transition-colors duration-500"
              >
                <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light mb-6">{s.desc}</p>
                <TextLink href={s.href}>Learn More</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MID-PAGE CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#17251D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <p className="max-w-2xl font-serif text-2xl md:text-3xl leading-[1.3] text-[#F8F7F4]">
            Every mandate begins with a conversation, not a pitch.{' '}
            <span className="text-[#C9A87C]">Begin yours in confidence.</span>
          </p>
          <Link href="/usa/contact" className={`${BTN_DARK} shrink-0`}>
            Request a Confidential Briefing
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTORS
      ═══════════════════════════════════════════════════════════ */}
      <section id="sectors" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Sector Focus</Eyebrow>
              <h2 className={H2}>Multifamily first. Selective everywhere else.</h2>
              <p className={`${BODY} mt-8`}>
                Depth beats breadth. We commit our strongest work to US apartments and take on
                other sectors on a mandate basis.
              </p>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>

            <div className="lg:col-span-8">
              {SECTORS.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8 border-t border-[#E5E2DC] py-8 first:border-t-0 first:pt-0"
                >
                  <div className="sm:max-w-md">
                    <h3
                      className={`font-serif ${
                        s.primary ? 'text-3xl' : 'text-2xl'
                      } text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300`}
                    >
                      {s.title}
                    </h3>
                    {s.primary && (
                      <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                        Core US focus
                      </p>
                    )}
                  </div>
                  <p className="text-[14px] leading-[1.75] text-[#5A5A5A] font-light sm:max-w-sm">
                    {s.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          METHOD
      ═══════════════════════════════════════════════════════════ */}
      <section id="method" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>How We Work</Eyebrow>
              <h2 className={H2}>A disciplined, transparent engagement model.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                Every engagement follows the same four stages, designed to protect your interests
                and make the outcome measurable.
              </p>
            </div>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {METHOD.map((m, i) => (
              <li key={m.title} className="bg-[#F8F7F4] p-8 lg:p-10">
                <p className="font-serif text-4xl text-[#8B7355] mb-6">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3">
                  {m.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRINCIPLES
      ═══════════════════════════════════════════════════════════ */}
      <section id="principles" className="scroll-mt-24 bg-[#17251D] text-white">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow dark>Our Commitment</Eyebrow>
              <h2 className={H2_DARK}>Principles that govern our practice.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className="text-[14px] leading-[1.9] text-white/70 font-light">
                Trust is the product. These four commitments apply to every mandate, in every
                market.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {PRINCIPLES.map((p, i) => (
              <article
                key={p.title}
                className="group bg-[#17251D] p-8 lg:p-10 hover:bg-[#0B3D2E]/60 transition-colors duration-500"
              >
                <p className="text-[11px] tracking-[0.2em] text-[#C9A87C] font-medium mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#F8F7F4] mb-3">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-white/70 font-light">{p.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <TextLink href="/governance" dark>
              Governance & Mandate Standards
            </TextLink>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LEADERSHIP
      ═══════════════════════════════════════════════════════════ */}
      <div id="leadership" className="scroll-mt-24">
        <CEOInstitutionalProfile />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section id="faq" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Institutional Enquiries</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] leading-[1.1] mb-6">
                About Murivest USA: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers on who we are, what we do and what we do not do.
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
                intermediary, securities broker or licensed US real estate broker. It works
                alongside the investor&rsquo;s own advisers and appropriately licensed US
                professionals. This page is general information and not tax, legal or investment
                advice.
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
            Capital deserves an adviser with nothing to sell but judgement.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            Whether you are acquiring, exiting or exchanging, begin with a confidential
            consultation. We will define the mandate before any work begins.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>
              Request a Mandate
            </Link>
            <Link href="/usa/1031-exchange" className={BTN_GHOST}>
              1031 Exchange Advisory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}