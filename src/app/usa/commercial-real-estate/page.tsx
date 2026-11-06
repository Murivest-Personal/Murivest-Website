import { Fragment } from 'react';
import { Cinzel, Jost } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PROPERTY_TYPES } from '../lib/site';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/commercial-real-estate';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03';

const TITLE = 'US Commercial Real Estate Advisory: Multifamily, Industrial, Office | Murivest';
const DESCRIPTION =
  'Murivest advises institutional investors and family offices on US commercial real estate, led by multifamily apartments, with selective industrial, logistics, office, retail and data center mandates.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'US commercial real estate advisory',
    'multifamily investment advisory',
    'industrial real estate investment USA',
    'institutional real estate advisory',
    'US property types',
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
  { name: 'Commercial Real Estate', path: PATH },
];

const SECTOR_DETAILS: Record<string, { context: string; drivers: string[] }> = {
  multifamily: {
    context:
      'Apartments are our core US focus. Housing is a non-discretionary expense, lender markets are among the deepest in commercial real estate, and the buyer pool at exit is broad. Returns are decided at submarket level, by supply pipeline, operating costs such as insurance and taxes, and the debt in place, rather than by national headlines. It is also the most common destination for capital leaving other assets through a 1031 exchange.',
    drivers: [
      'Household formation set against ownership affordability',
      'New-supply pipeline and absorption by submarket',
      'Depth of agency and bank debt for stabilised assets',
      '1031 exchange demand for replacement property',
    ],
  },
  office: {
    context:
      'Office is no longer one asset class. Well-located, well-amenitised buildings and older, underused stock are priced as different markets. We advise selectively on quality-led exposure, repositioning potential and the economics of conversion.',
    drivers: [
      'Tenant flight to quality',
      'Medical office as a distinct sub-sector',
      'Feasibility and cost of adaptive reuse',
    ],
  },
  industrial: {
    context:
      'Industrial demand follows the geography of supply chains. Modern-specification buildings near population centres, ports, rail and highways are underwritten very differently from older stock in secondary locations.',
    drivers: [
      'Supply-chain reconfiguration and nearshoring',
      'Building specification and location quality',
      'Flex-industrial and small-bay demand',
    ],
  },
  logistics: {
    context:
      'Logistics spans last-mile delivery, big-box distribution and temperature-controlled storage. Each sub-type has its own tenant credit, rent-growth and obsolescence profile and must be underwritten separately.',
    drivers: [
      'E-commerce fulfilment requirements',
      'Cold-storage and food-logistics demand',
      'Inland hub connectivity and labour access',
    ],
  },
  retail: {
    context:
      'Retail has split between well-located, necessity-anchored properties and commodity centres facing structural pressure. We focus on durable income profiles and lease terms that can be underwritten with confidence.',
    drivers: [
      'Grocery-anchored centre resilience',
      'Depth of the single-tenant net-lease market',
      'Street retail in dense urban corridors',
    ],
  },
  'data-centers': {
    context:
      'For data centers, feasibility is set by power, not by land. Grid interconnection, entitlement timelines and tenant concentration shape both the opportunity and the risk, and leases are typically long-dated.',
    drivers: [
      'Power availability and interconnection timelines',
      'Hyperscale tenant concentration',
      'Powered-land and development-stage risk',
    ],
  },
};

const FAQS = [
  {
    question: 'Which US commercial real estate sectors does Murivest advise on?',
    answer:
      'Multifamily apartments are Murivest’s core US focus. The firm also advises on industrial, logistics, office, retail and data center assets on a mandate basis, working alongside licensed US professionals.',
  },
  {
    question: 'Why does Murivest lead with US multifamily?',
    answer:
      'Multifamily combines non-discretionary demand, deep lender markets and a broad buyer pool at exit. It is also the most common replacement asset for investors completing a 1031 exchange, which suits Murivest’s advisory model.',
  },
  {
    question: 'Does Murivest list or market properties for sale or lease?',
    answer:
      'Murivest is an advisory firm. Where marketing, negotiation or leasing of a property requires a licence, a licensed US real estate professional performs that function alongside Murivest.',
  },
  {
    question: 'Can non-US investors acquire US commercial real estate through Murivest?',
    answer:
      'Yes. Murivest advises non-US principals and family offices and coordinates with US tax and legal specialists on matters such as FIRPTA and entity structuring. Murivest does not itself provide tax or legal advice.',
  },
];

const RELATED = [
  { label: 'Acquisition Advisory', href: '/usa/acquire' },
  { label: '1031 Exchange into Multifamily', href: '/usa/1031-exchange' },
  { label: 'Capital Advisory', href: '/usa/capital' },
  { label: 'About Murivest USA', href: '/usa/about' },
];

/* Multifamily first, everywhere sectors are listed */
const TYPES = [...PROPERTY_TYPES].sort(
  (a, b) => Number(b.slug === 'multifamily') - Number(a.slug === 'multifamily'),
);

const TOC = [
  ...TYPES.map((t) => ({ id: t.slug, label: t.label })),
  { id: 'faq', label: 'FAQ' },
];

/* ─── FONTS ───────────────────────────────────────────────────── */
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'], display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300', '400'], display: 'swap' });

/* ─── SHARED STYLES ───────────────────────────────────────────── */
const H2 = 'font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[#2C2C2C] leading-[1.1]';
const BODY = 'text-[14px] leading-[1.9] text-[#5A5A5A] font-light';
const SECTION_PAD = 'max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24';
const FOCUS =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2';
const BTN_DARK = `inline-flex items-center justify-center px-8 py-4 bg-[#F8F7F4] text-[#0B3D2E] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A87C] transition-colors duration-500 ${FOCUS} focus-visible:ring-offset-[#17251D]`;
const BTN_GHOST = `inline-flex items-center justify-center px-8 py-4 border border-white/40 text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#C9A87C] hover:text-[#C9A87C] transition-colors duration-500 ${FOCUS} focus-visible:ring-offset-[#17251D]`;
const INLINE_LINK =
  'underline decoration-[#8B7355]/50 underline-offset-4 hover:text-[#8B7355] transition-colors duration-300';

/* ─── LOCAL PRIMITIVES ────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-8 h-[1px] bg-[#8B7355]" />
      <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">{children}</p>
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
      '@type': 'CollectionPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      dateModified: LAST_REVIEWED,
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORG_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      mainEntity: { '@id': `${URL}#sectors` },
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
      '@id': `${URL}#sectors`,
      name: 'US commercial real estate sectors advised by Murivest',
      itemListElement: TYPES.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.label,
        url: `${URL}/${t.slug}`,
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
export default function CommercialRealEstateHubPage() {
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
            US commercial real estate, led by multifamily.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Each property type has its own demand drivers, underwriting framework and
            counterparties. Murivest advises institutional investors, family offices and private
            principals across six US sectors, with its deepest focus on apartments.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>Request a Mandate</Link>
            <a href="#multifamily" className={BTN_GHOST}>Explore Multifamily</a>
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
          SECTORS
      ═══════════════════════════════════════════════════════════ */}
      {TYPES.map((type, i) => {
        const d = SECTOR_DETAILS[type.slug];
        const bg = i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F4]';
        const sale = type.transactionTypes.includes('sale');
        const lease = type.transactionTypes.includes('lease');

        return (
          <Fragment key={type.slug}>
            <section id={type.slug} className={`scroll-mt-24 border-t border-[#E5E2DC] ${bg}`}>
              <div className={SECTION_PAD}>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                  <div className="lg:col-span-5">
                    <Eyebrow>{i === 0 ? 'Core US Focus' : 'Sector'}</Eyebrow>
                    <h2 className={H2}>{type.label}</h2>
                    <p className={`${BODY} mt-8`}>{type.description}</p>
                    <div className="mt-8 flex flex-col items-start gap-4">
                      <TextLink href={`${PATH}/${type.slug}`}>Explore {type.label}</TextLink>
                      {sale && <TextLink href={`${PATH}/${type.slug}/for-sale`}>For Sale</TextLink>}
                      {lease && <TextLink href={`${PATH}/${type.slug}/for-lease`}>For Lease</TextLink>}
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
                    {d && (
                      <>
                        <p className="text-[15px] leading-[1.9] text-[#2C2C2C] font-light mb-8">
                          {d.context}
                        </p>
                        <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium mb-4">
                          Key drivers
                        </p>
                        <ul className="mb-10 space-y-3">
                          {d.drivers.map((x) => (
                            <li
                              key={x}
                              className="flex items-start gap-3 text-[14px] leading-[1.7] text-[#5A5A5A] font-light"
                            >
                              <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-[#8B7355]" />
                              {x}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] font-medium mb-4">
                      What we advise on
                    </p>
                    <ul className="space-y-3 text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                      {sale && <li>Acquisition and disposition strategy</li>}
                      {lease && <li>Leasing strategy</li>}
                      <li>
                        Capital structure, through our{' '}
                        <Link href="/usa/capital" className={INLINE_LINK}>capital advisory</Link>
                      </li>
                      {type.slug === 'multifamily' && (
                        <li>
                          Replacement property for a{' '}
                          <Link href="/usa/1031-exchange" className={INLINE_LINK}>1031 exchange</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* MID-PAGE CTA, after the core sector */}
            {i === 0 && (
              <section className="bg-[#17251D] text-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <p className="max-w-2xl font-serif text-2xl md:text-3xl leading-[1.3] text-[#F8F7F4]">
                    Multifamily rewards the investor who underwrites the submarket, not the headline.{' '}
                    <span className="text-[#C9A87C]">Start with a briefing.</span>
                  </p>
                  <Link href="/usa/contact" className={`${BTN_DARK} shrink-0`}>
                    Request a Confidential Briefing
                  </Link>
                </div>
              </section>
            )}
          </Fragment>
        );
      })}

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section id="faq" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Institutional Enquiries</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] leading-[1.1] mb-6">
                US Commercial Real Estate: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers on sectors, scope and how we work.
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
        <div className={SECTION_PAD}>
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
                Murivest provides advisory services and is not a tax adviser, qualified
                intermediary, securities broker, mortgage broker, appraiser or licensed US real
                estate broker. It works alongside the investor&rsquo;s own advisers and
                appropriately licensed US professionals. This page is general information and not
                tax, legal or investment advice.
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
            Every sector has a price. Few investors have a plan.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            Tell us the sector, the geography and the outcome you are mandated to deliver. We will
            define the scope in writing before any work begins.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>Request a Mandate</Link>
            <Link href="/usa/acquire" className={BTN_GHOST}>Acquisition Advisory</Link>
          </div>
        </div>
      </section>
    </main>
  );
}