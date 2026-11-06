import { Cinzel, Jost } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/1031-exchange';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03'; // update whenever the legal content is re-checked

const TITLE = '1031 Exchange into US Multifamily Apartments | Murivest';
const DESCRIPTION =
  'Institutional 1031 exchange advisory for investors acquiring US multifamily apartments: replacement sourcing, 45/180-day governance, DST and reverse structures.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '1031 exchange multifamily',
    '1031 exchange apartments',
    'like-kind exchange advisory',
    'multifamily investment USA',
    'DST 1031 exchange',
    'reverse 1031 exchange',
    'replacement property sourcing',
    'commercial real estate advisory USA',
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
  { name: '1031 Exchange', path: PATH },
];

const KEY_FACTS = [
  { value: '45 Days', label: 'To identify replacement property' },
  { value: '180 Days', label: 'To close, or return due date if earlier' },
  { value: '§1031', label: 'Real property only since 2017' },
  { value: 'Form 8824', label: 'Filed for the year of exchange' },
];

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'multifamily', label: 'Multifamily Thesis' },
  { id: 'timeline', label: 'The Clock' },
  { id: 'identification', label: 'Identification' },
  { id: 'structures', label: 'Structures' },
  { id: 'mandate', label: 'Our Mandate' },
  { id: 'process', label: 'Process' },
  { id: 'risks', label: 'Risk' },
  { id: 'faq', label: 'FAQ' },
];

const BENEFITS = [
  {
    title: 'Tax deferral, compounded',
    desc: 'A completed exchange defers federal capital gains tax, depreciation recapture (up to 25%) and the 3.8% net investment income tax. Capital that would have left for the Treasury stays invested and keeps compounding.',
  },
  {
    title: 'Portfolio repositioning',
    desc: 'Move from management-intensive or late-cycle assets into better-located, more institutional property without a tax toll on the transition.',
  },
  {
    title: 'Estate efficiency',
    desc: 'Under current law, deferred gain can be eliminated at death through the step-up in basis. For family offices, the exchange is a multi-generational planning instrument, not merely a transaction.',
  },
];

const MULTIFAMILY = [
  {
    title: 'Resilient Demand',
    desc: 'Housing is a non-discretionary expense. Apartment income has historically been steadier than office or retail, which supports lender appetite and exit liquidity.',
  },
  {
    title: 'Structural Undersupply',
    desc: 'Household formation, high ownership costs and constrained supply in many metros sustain renter demand. Submarket selection, not national headlines, determines returns.',
  },
  {
    title: 'Operational Scalability',
    desc: 'Professionally managed communities offer levers beyond appreciation: standardised operations, value-add programmes and rent growth.',
  },
  {
    title: 'Depreciation Shelter',
    desc: 'A new basis in replacement property resets depreciation (27.5 years for residential rental), and cost segregation can accelerate deductions. Model both with your tax adviser.',
  },
  {
    title: 'Lender Depth',
    desc: 'Fannie Mae and Freddie Mac provide competitive, long-dated debt for stabilised apartments, which improves the arithmetic of debt replacement.',
  },
  {
    title: 'Exit Optionality',
    desc: 'Apartments draw the deepest buyer pool in commercial real estate: private capital, REITs, institutions and further 1031 buyers.',
  },
];

const TIMELINE = [
  {
    step: 'Day 0',
    title: 'Sale closes',
    desc: 'Proceeds go directly to the qualified intermediary. If the seller touches the funds, the exchange fails. The intermediary must be engaged before closing.',
  },
  {
    step: 'Day 45',
    title: 'Identification deadline',
    desc: 'Replacement properties must be identified in writing, signed and delivered to the intermediary or another permitted party. There are no extensions.',
  },
  {
    step: 'Day 180',
    title: 'Exchange deadline',
    desc: 'Close by day 180, or the return due date including extensions if earlier. Filing an extension protects the full 180 days.',
  },
];

const ID_RULES = [
  {
    rule: 'Three-Property Rule',
    limit: 'Up to three properties, of any combined value.',
    use: 'The default. Concentrated, with the strongest control over diligence.',
  },
  {
    rule: '200% Rule',
    limit: 'Any number, if combined value is no more than 200% of the property sold.',
    use: 'Building a diversified apartment portfolio, or hedging against a failed closing.',
  },
  {
    rule: '95% Rule',
    limit: 'Any number, provided you acquire 95% of the value identified.',
    use: 'A fallback, rarely relied upon. In effect, a commitment to close on everything.',
  },
];

const STRUCTURES = [
  {
    tag: 'Selling first, buying second',
    title: 'Forward (Delayed) Exchange',
    desc: 'The standard structure. A qualified intermediary holds proceeds while you identify and acquire replacement property inside the statutory window.',
    consider: 'Diligence is compressed under a hard deadline.',
  },
  {
    tag: 'Buying before you have sold',
    title: 'Reverse Exchange',
    desc: 'An exchange accommodation titleholder holds either the replacement or the relinquished property under the safe harbor of Rev. Proc. 2008-16, within a 180-day parking period.',
    consider: 'Capital or financing is required for both properties at once.',
  },
  {
    tag: 'Value-add and renovation',
    title: 'Improvement Exchange',
    desc: 'Exchange proceeds fund improvements to the replacement property while a titleholder holds it, so the improved value counts toward the exchange.',
    consider: 'Improvements must be completed within 180 days to count.',
  },
  {
    tag: 'Passive, institutional ownership',
    title: 'Delaware Statutory Trust (DST)',
    desc: 'Fractional beneficial interests in a trust owning institutional multifamily, treated as like-kind real property under Rev. Rul. 2004-86. A useful backstop identification for investors leaving active management.',
    consider: 'Illiquid, no control over hold period, sold only through licensed securities professionals.',
  },
];

const MANDATE = [
  {
    title: 'Replacement Property Sourcing',
    desc: 'Off-market and brokered multifamily opportunities screened against your criteria: value, debt replacement, submarket fundamentals and sponsor quality.',
  },
  {
    title: 'Deadline Governance',
    desc: 'A day-by-day exchange calendar from the day we are engaged, with decision gates ahead of both deadlines so diligence never runs out the clock.',
  },
  {
    title: 'Intermediary & Counsel Coordination',
    desc: 'We work alongside your qualified intermediary, tax counsel and licensed US brokers to align escrow instructions, assignments and closing mechanics.',
  },
  {
    title: 'Structuring Advisory',
    desc: 'Forward, reverse, improvement and DST pathways weighed against your timing, leverage and control objectives, with trade-offs made explicit.',
  },
  {
    title: 'Cross-Border Principals',
    desc: 'For non-US investors and family offices, we coordinate with specialist advisers on FIRPTA, entity structuring and home-country tax treatment.',
  },
  {
    title: 'Portfolio Sequencing',
    desc: 'Multi-asset dispositions and acquisitions sequenced to preserve deferral, manage boot and serve your long-term allocation to US multifamily.',
  },
];

const PROCESS = [
  {
    title: 'Confidential Briefing',
    desc: 'We establish the relinquished asset, expected gain, debt position and your objectives for the replacement portfolio, ideally before the sale is under contract.',
  },
  {
    title: 'Criteria & Mandate',
    desc: 'Formal scope documentation, KYC/AML verification and a defined acquisition brief: markets, unit counts, vintage, leverage and hold period.',
  },
  {
    title: 'Sourcing & Screening',
    desc: 'Opportunities are screened against the brief and presented with underwriting summaries, so your 45-day identification is a decision, not a scramble.',
  },
  {
    title: 'Execution Coordination',
    desc: 'We align your qualified intermediary, counsel and licensed brokers through to closing, and track every deadline until the exchange is complete.',
  },
];

const RISKS = [
  {
    title: 'Boot',
    desc: 'Cash received, or debt reduction not replaced with new debt or added equity, is taxable. Match or exceed both value and debt on the replacement side.',
  },
  {
    title: 'Constructive Receipt',
    desc: 'Any access to sale proceeds, even briefly, disqualifies the exchange. Funds must remain with the qualified intermediary.',
  },
  {
    title: 'Related Parties',
    desc: 'Exchanges with related parties carry a two-year holding requirement under §1031(f). Early dispositions can trigger the deferred gain.',
  },
  {
    title: 'Holding Intent',
    desc: 'Both properties must be held for investment or business use. Property held primarily for resale, such as a flip, does not qualify.',
  },
  {
    title: 'Foreign vs US Property',
    desc: 'Real property inside and outside the United States is not like-kind under §1031(h). Capital relocating into US multifamily should be planned accordingly.',
  },
  {
    title: 'State-Level Rules',
    desc: 'Some states impose withholding or tracking obligations, and a few can claw back deferred gain if replacement property is bought out of state.',
  },
];

const FAQS = [
  {
    question: 'What is a 1031 exchange?',
    answer:
      'A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows an investor who sells real property held for investment or business use to defer capital gains tax by reinvesting the proceeds in like-kind real property. Since the Tax Cuts and Jobs Act of 2017, the provision applies only to real property.',
  },
  {
    question: 'Can I use a 1031 exchange to buy multifamily apartments?',
    answer:
      'Yes. Under the like-kind standard for real property, an investor may exchange into multifamily apartment buildings from almost any other investment real estate in the United States, including land, retail, office, industrial or other residential rental property, provided both properties are held for investment or business use.',
  },
  {
    question: 'What are the 45-day and 180-day deadlines?',
    answer:
      'The investor has 45 calendar days from the closing of the sale to identify replacement property in writing, and must complete the purchase within 180 days of the sale or by the due date, including extensions, of the tax return for that year, whichever comes first. Neither deadline can be extended except in limited federally declared disaster circumstances.',
  },
  {
    question: 'What is a qualified intermediary and do I need one?',
    answer:
      'A qualified intermediary, or QI, is an independent third party that holds the sale proceeds and facilitates the exchange documentation. A QI is effectively required for a delayed exchange because the investor cannot take possession of the funds. The QI must be engaged before the relinquished property closes.',
  },
  {
    question: 'How many properties can I identify?',
    answer:
      'Under the three-property rule you may identify up to three properties of any value. Under the 200% rule you may identify any number whose combined fair market value does not exceed 200% of the relinquished property. Under the 95% rule you may identify more, but you must acquire at least 95% of the value identified.',
  },
  {
    question: 'What is boot in a 1031 exchange?',
    answer:
      'Boot is any value received in the exchange that is not like-kind real property, typically cash or net debt relief. Boot is taxable to the extent of the gain realised. To defer all gain, the replacement property should be of equal or greater value, and equity and debt should be fully reinvested.',
  },
  {
    question: 'Can a 1031 exchange be used for a Delaware Statutory Trust?',
    answer:
      'Yes. Under IRS Revenue Ruling 2004-86, a properly structured Delaware Statutory Trust interest is treated as an interest in real property for 1031 purposes. DSTs are securities offered through licensed professionals, are illiquid, and give investors no control over the hold period.',
  },
  {
    question: 'Can non-US investors use a 1031 exchange?',
    answer:
      'Non-US persons may use a 1031 exchange when selling US real property and buying US replacement property, but FIRPTA withholding, entity structure and home-country tax treatment require specialist advice. Foreign real property and US real property are not like-kind to each other.',
  },
  {
    question: 'What happens if I miss a deadline or the exchange fails?',
    answer:
      'If the identification or closing deadline is missed, the exchange fails and the transaction is treated as a taxable sale. The gain, including depreciation recapture, becomes taxable in the year of sale. This is why replacement-property sourcing should begin before the relinquished property is under contract.',
  },
  {
    question: 'Is Murivest a tax adviser or a licensed US broker?',
    answer:
      'No. Murivest provides mandate-based commercial real estate advisory and sourcing, working alongside the investor\'s tax counsel, qualified intermediary and licensed US brokers on every transaction. Nothing on this page is tax, legal or investment advice.',
  },
];

const RELATED = [
  { label: 'United States Advisory', href: '/usa' },
  { label: 'Global Research', href: '/research' },
  { label: 'Governance & Mandate Standards', href: '/governance' },
  { label: 'About Murivest', href: '/about' },
];

const SOURCES = [
  {
    label: 'IRS: Like-Kind Exchanges Under IRC Section 1031',
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-under-irc-section-1031',
  },
  {
    label: 'IRS: About Form 8824, Like-Kind Exchanges',
    href: 'https://www.irs.gov/forms-pubs/about-form-8824',
  },
  {
    label: '26 U.S.C. §1031: Exchange of real property held for productive use or investment',
    href: 'https://www.law.cornell.edu/uscode/text/26/1031',
  },
  {
    label: 'Treasury Regulation §1.1031(k)-1: Treatment of deferred exchanges',
    href: 'https://www.ecfr.gov/current/title-26/section-1.1031(k)-1',
  },
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
const BTN_LIGHT = `inline-flex items-center justify-center px-8 py-4 bg-[#0B3D2E] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 ${FOCUS}`;
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
      alternateName: 'Murivest',
      url: BASE,
      logo: `${BASE}/logo.png`,
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
      name: '1031 Exchange Advisory for US Multifamily Investors',
      serviceType: 'Commercial real estate advisory',
      description: DESCRIPTION,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'United States' },
      audience: {
        '@type': 'Audience',
        audienceType: 'Institutional investors, family offices and ultra-high-net-worth individuals',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '1031 exchange advisory services',
        itemListElement: MANDATE.map((m) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: m.title, description: m.desc },
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
export default function USA1031ExchangePage() {
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
          {/* Breadcrumbs */}
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
                        <span aria-hidden="true" className="text-white/30">
                          /
                        </span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <p
            className={`${cinzel.className} text-sm sm:text-base uppercase tracking-[0.3em] text-[#C9A87C]`}
          >
            Murivest
            <span className={`${jost.className} ml-4 text-[10px] font-light tracking-[0.5em]`}>
              United States
            </span>
          </p>
          <div className="mt-3 h-px w-16 bg-[#C9A87C]/60" />

          <h1 className="mt-10 max-w-4xl font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] text-[#F8F7F4]">
            The tax you defer is the capital you keep working.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Murivest advises institutional investors, family offices and private principals on
            1031 exchanges into US multifamily apartments. We source the replacement asset, govern
            both deadlines and coordinate your intermediary, counsel and brokers, so that a
            tax-deferred exit becomes a disciplined entry.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>
              Request a Mandate
            </Link>
            <a href="#timeline" className={BTN_GHOST}>
              Understand the 45/180 Clock
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KEY FACTS
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="1031 exchange key facts"
        className="bg-[#F8F7F4] text-[#2C2C2C] border-b border-[#E5E2DC]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {KEY_FACTS.map((f) => (
              <div
                key={f.value}
                className="text-center lg:text-left lg:border-l lg:border-[#E5E2DC] lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <dt className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-2">{f.value}</dt>
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
          OVERVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section id="overview" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>What It Is</Eyebrow>
              <h2 className={H2}>The most powerful provision in US real estate taxation.</h2>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>
            <div className="lg:col-span-8 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
              <p className="text-[16px] leading-[1.9] text-[#2C2C2C] font-light mb-6">
                A 1031 exchange allows a US real estate investor to defer federal capital gains
                tax by selling investment property and reinvesting the proceeds in like-kind real
                property, identifying replacements within 45 days and closing within 180. Since
                2017, it applies to real property only.
              </p>
              <p className={`${BODY} mb-6`}>
                Section 1031 of the Internal Revenue Code converts what would be a taxable event
                into a continuation of the same investment. For an investor sitting on a heavily
                appreciated asset, the difference is not marginal. It is the difference between
                reinvesting the whole of your equity and reinvesting what remains after the tax
                bill.
              </p>
              <p className={BODY}>
                Murivest advises on the half of the exchange that most investors underestimate:
                finding, underwriting and securing the right replacement asset inside a
                non-negotiable clock. We focus that discipline on one asset class, US multifamily
                apartments.
              </p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {BENEFITS.map((b) => (
              <article
                key={b.title}
                className="group bg-white p-8 lg:p-10 hover:bg-[#F8F7F4] transition-colors duration-500"
              >
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-4 group-hover:text-[#8B7355] transition-colors duration-300">
                  {b.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MULTIFAMILY THESIS
      ═══════════════════════════════════════════════════════════ */}
      <section id="multifamily" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>The Multifamily Thesis</Eyebrow>
              <h2 className={H2}>Why sophisticated capital exchanges into apartments.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                Multifamily is where tax deferral, durable demand and scalable operations converge.
                For investors consolidating or leaving other property types, it is the natural
                destination.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {MULTIFAMILY.map((m, i) => (
              <article
                key={m.title}
                className="group bg-[#F8F7F4] p-8 lg:p-10 hover:bg-white transition-colors duration-500"
              >
                <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {m.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{m.desc}</p>
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
            The best exchanges are designed before the sale is signed.{' '}
            <span className="text-[#C9A87C]">Begin sourcing now.</span>
          </p>
          <Link href="/usa/contact" className={`${BTN_DARK} shrink-0`}>
            Request a Confidential Briefing
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE CLOCK
      ═══════════════════════════════════════════════════════════ */}
      <section id="timeline" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>The Exchange Clock</Eyebrow>
              <h2 className={H2}>Two deadlines. No extensions. No exceptions.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                The statutory timeline is the single greatest source of failed exchanges. We build
                the calendar on the day we are engaged, not the day you sell.
              </p>
            </div>
          </div>

          <ol className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {TIMELINE.map((t) => (
              <li key={t.step} className="bg-white p-8 lg:p-10">
                <p className="font-serif text-4xl text-[#8B7355] mb-6">{t.step}</p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3">
                  {t.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IDENTIFICATION RULES
      ═══════════════════════════════════════════════════════════ */}
      <section id="identification" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>Identification Rules</Eyebrow>
              <h2 className={H2}>Three ways to name your replacement property.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                The rule you elect determines how many properties you may identify, and how much
                risk you carry if one fails to close.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {ID_RULES.map((r) => (
              <article key={r.rule} className="bg-[#F8F7F4] p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-[#2C2C2C] mb-6">{r.rule}</h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium mb-2">
                  Limit
                </p>
                <p className="text-[14px] leading-[1.75] text-[#2C2C2C] font-light mb-6">
                  {r.limit}
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium mb-2">
                  Best Used For
                </p>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{r.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STRUCTURES
      ═══════════════════════════════════════════════════════════ */}
      <section id="structures" className="scroll-mt-24 bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Exchange Structures</Eyebrow>
              <h2 className={H2}>Four pathways, each with a different risk profile.</h2>
              <p className={`${BODY} mt-8`}>
                The right structure depends on whether you are selling first or buying first,
                whether the asset needs capital improvement, and how much control you wish to
                retain.
              </p>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-0">
              {STRUCTURES.map((s, i) => (
                <article key={s.title} className="group border-t border-[#E5E2DC] py-10">
                  <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                    {String(i + 1).padStart(2, '0')} · {s.tag}
                  </p>
                  <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-[#5A5A5A] font-light mb-4">
                    {s.desc}
                  </p>
                  <p className="text-[13px] leading-[1.7] text-[#2C2C2C] font-light">
                    <span className="font-medium">Consider: </span>
                    {s.consider}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE MURIVEST MANDATE
      ═══════════════════════════════════════════════════════════ */}
      <section id="mandate" className="scroll-mt-24 bg-[#17251D] text-white">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow dark>The Murivest Mandate</Eyebrow>
              <h2 className={H2_DARK}>One mandate. Every moving part of the exchange, governed.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className="text-[14px] leading-[1.9] text-white/70 font-light">
                We do not replace your tax counsel, your qualified intermediary or your licensed
                broker. We orchestrate them, and we bring the replacement asset.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {MANDATE.map((m, i) => (
              <article
                key={m.title}
                className="group bg-[#17251D] p-8 lg:p-10 hover:bg-[#0B3D2E]/60 transition-colors duration-500"
              >
                <p className="text-[11px] tracking-[0.2em] text-[#C9A87C] font-medium mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[15px] font-semibold tracking-wide text-[#F8F7F4] mb-3">
                  {m.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-white/70 font-light">{m.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <TextLink href="/usa/contact" dark>
              Request a Mandate
            </TextLink>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section id="process" className="scroll-mt-24 bg-white">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>How We Engage</Eyebrow>
              <h2 className={H2}>From confidential briefing to completed exchange.</h2>
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
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl">
                    {p.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RISK DISCIPLINE
      ═══════════════════════════════════════════════════════════ */}
      <section id="risks" className="scroll-mt-24 bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-7">
              <Eyebrow>Risk Discipline</Eyebrow>
              <h2 className={H2}>Where exchanges fail, and how we prevent it.</h2>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <p className={BODY}>
                Most failed exchanges are not lost to complexity. They are lost to avoidable errors
                in timing, structure and documentation.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
            {RISKS.map((r) => (
              <article
                key={r.title}
                className="group bg-white p-8 lg:p-10 hover:bg-[#F8F7F4] transition-colors duration-500"
              >
                <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{r.desc}</p>
              </article>
            ))}
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
                1031 Exchange into Multifamily: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers to the questions principals and their advisers ask first.
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
          RELATED, SOURCES & NOTICE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
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
                Primary Sources
              </p>
              <ul className="space-y-4">
                {SOURCES.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] leading-[1.6] text-[#2C2C2C] font-light underline decoration-[#8B7355]/50 underline-offset-4 hover:text-[#8B7355] transition-colors duration-300"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium mb-6">
                Important Notice
              </p>
              <p className="text-[12px] leading-[1.8] text-[#5A5A5A] font-light">
                This page is general information and is not tax, legal or investment advice.
                Murivest is not a tax adviser, qualified intermediary or licensed US real estate
                broker, and works alongside the investor&rsquo;s own advisers and licensed US
                professionals. DST interests are securities offered only by appropriately licensed
                firms. Tax law is subject to change; consult qualified counsel before acting.
              </p>
              <p className="text-[11px] text-[#5A5A5A]/70 mt-4 italic">
                Last reviewed{' '}
                <time dateTime={LAST_REVIEWED}>3 November 2026</time>.
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
            Your exit is a date. Your replacement should be a decision.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            Whether you are exiting an asset or sourcing a multifamily replacement, begin with a
            confidential consultation. We will map the timeline and the opportunity set before your
            sale closes.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>
              Request a Mandate
            </Link>
            <Link href="/usa" className={BTN_GHOST}>
              Explore US Advisory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}