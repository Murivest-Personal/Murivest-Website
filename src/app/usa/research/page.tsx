import { Cinzel, Jost } from 'next/font/google';
import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Research from '@/components/Research';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/research';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03';

const TITLE = 'US Real Estate Research: Multifamily, Market Outlook & Investment Theses | Murivest';
const DESCRIPTION =
  'Murivest Research publishes independent analysis of US multifamily and commercial real estate: market reports, investment theses, sector research and outlooks, built on cited public and institutional data.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'US multifamily market research',
    'US commercial real estate outlook',
    'real estate investment thesis',
    'institutional real estate research',
    '1031 exchange market analysis',
    'Murivest Research',
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

/* ─── FEATURED RESEARCH POST ──────────────────────────────────── */
interface ResearchPost {
  title: string;
  description: string;
  author: string;
  datePublished: string; // ISO 8601
  dateModified?: string; // ISO 8601, update when the article is revised
  slug: string;
  image?: string;
}

// Example: this could come from a CMS or static props
const researchPost: ResearchPost = {
  title: 'Property Insights: Global Real Estate Market Trends 2026',
  description:
    "Get expert analysis of Global's real estate market, including REITs, residential and commercial property investment insights.",
  author: 'Murivest Group Ltd',
  datePublished: '2026-05-11T08:00:00Z',
  dateModified: '2026-05-11T08:00:00Z',
  slug: 'nairobi-real-estate-trends-2026',
  image: '/default-research-image.webp',
};

/* Typed wrapper: compiles whether or not Research declares a `post` prop,
   and avoids a build-breaking unused @ts-expect-error. */
const ResearchSection = Research as unknown as ComponentType<{ post: ResearchPost }>;

const absolute = (p: string) => (p.startsWith('http') ? p : `${BASE}${p}`);
const POST_URL = `${URL}/${researchPost.slug}`;

/* ─── DATA ────────────────────────────────────────────────────── */
type Item = { title: string; desc: string; href?: string; cta?: string };

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'United States', path: '/usa' },
  { name: 'Research', path: PATH },
];

const STREAMS: Item[] = [
  {
    title: 'Market Reports',
    desc: 'Structured reviews of US markets and submarkets: supply, demand, rents, pricing and transaction activity, with every figure sourced and dated.',
    href: '/usa/research/market-reports',
    cta: 'View Reports',
  },
  {
    title: 'Investment Theses',
    desc: 'Argued positions on asset classes, strategies and markets, with the assumptions, the evidence and the conditions under which the thesis fails.',
    href: '/usa/research/investment-theses',
    cta: 'View Theses',
  },
  {
    title: 'Sector Research',
    desc: 'Sector analysis across multifamily, industrial, logistics, office, retail and data centers, with multifamily as our primary focus.',
    href: '/usa/research/sector-research',
    cta: 'View Research',
  },
  {
    title: 'Market Outlook',
    desc: 'Forward-looking views on rates, credit conditions and property markets, framed as scenarios and ranges rather than single-point predictions.',
    href: '/usa/research/market-outlook',
    cta: 'View Outlooks',
  },
  {
    title: 'Market Intelligence',
    desc: 'Commentary on market developments, capital-flow shifts and investor-demand signals, read through an underwriting lens.',
    href: '/usa/research/intelligence',
    cta: 'View Intelligence',
  },
];

const AGENDA: Item[] = [
  {
    title: 'Where is the supply pipeline, submarket by submarket?',
    desc: 'New apartment supply is a local story. We study permits, starts and completions against absorption to show where rent pressure is easing and where it is not.',
  },
  {
    title: 'What is happening to operating costs?',
    desc: 'Insurance, property taxes and payroll can erode net operating income faster than rent growth restores it. We test underwriting against expense reality, not only against revenue.',
  },
  {
    title: 'How are debt markets pricing multifamily?',
    desc: 'Agency, bank and bridge lending conditions set achievable leverage and exit values. We track the spread between cap rates and debt costs.',
  },
  {
    title: 'What does a 1031 exchange change for multifamily demand?',
    desc: 'Tax-deferral capital shapes who is buying apartments and on what timetable. We analyse how exchange demand interacts with pricing and deal flow.',
  },
];

const STANDARDS: Item[] = [
  {
    title: 'Sourced',
    desc: 'Every figure is attributed to a named primary or institutional source and linked, so a reader can check it for themselves.',
  },
  {
    title: 'Dated',
    desc: 'Each publication carries its publication date and the date of the data behind it. Stale analysis is revised or withdrawn.',
  },
  {
    title: 'Assumption-Transparent',
    desc: 'We state the assumptions behind any view and the evidence that would change our mind. Forecasts are expressed as scenarios.',
  },
  {
    title: 'Independent',
    desc: 'Murivest holds no proprietary fund or inventory. Research is not written to support a product, and conflicts are disclosed.',
  },
];

const SOURCES = [
  { label: 'US Census Bureau', note: 'Housing, population and building permits', href: 'https://www.census.gov' },
  { label: 'Bureau of Labor Statistics', note: 'Employment, wages and inflation', href: 'https://www.bls.gov' },
  { label: 'FRED, Federal Reserve Bank of St. Louis', note: 'Rates, credit and macro series', href: 'https://fred.stlouisfed.org' },
  { label: 'HUD User', note: 'Housing market and policy data', href: 'https://www.huduser.gov' },
  { label: 'Fannie Mae', note: 'Multifamily market research', href: 'https://www.fanniemae.com' },
  { label: 'Freddie Mac Multifamily', note: 'Multifamily market research', href: 'https://mf.freddiemac.com' },
];

const FAQS = [
  {
    question: 'What is Murivest Research?',
    answer:
      'Murivest Research is the research arm of Murivest Group Ltd. It publishes independent analysis of US multifamily and commercial real estate in five streams: market reports, investment theses, sector research, market outlooks and market intelligence.',
  },
  {
    question: 'Where does Murivest Research get its data?',
    answer:
      'From published public and institutional sources, such as the US Census Bureau, the Bureau of Labor Statistics, the Federal Reserve’s FRED database, HUD and agency multifamily research from Fannie Mae and Freddie Mac. Each publication names and links its sources and states the date of the data.',
  },
  {
    question: 'Is Murivest Research investment advice?',
    answer:
      'No. Research is general information for institutional and professional readers. It is not tax, legal or investment advice and does not take account of any individual’s circumstances. Forecasts and outlooks are opinions and are not guaranteed.',
  },
  {
    question: 'Which US sectors does the research cover?',
    answer:
      'Multifamily apartments are the primary focus. Research also covers industrial, logistics, office, retail and data center assets, plus the capital markets and tax topics, such as 1031 exchanges, that shape US real estate demand.',
  },
  {
    question: 'How can I receive new research?',
    answer:
      'Subscribe with an institutional email address using the form on this page. Research communications can be unsubscribed from at any time.',
  },
];

const RELATED = [
  { label: 'Global Research', href: '/research' },
  { label: 'US Commercial Real Estate Sectors', href: '/usa/commercial-real-estate' },
  { label: '1031 Exchange into Multifamily', href: '/usa/1031-exchange' },
  { label: 'Acquisition Advisory', href: '/usa/acquire' },
];

const TOC = [
  { id: 'streams', label: 'Research Streams' },
  { id: 'featured', label: 'Featured' },
  { id: 'agenda', label: 'Multifamily Agenda' },
  { id: 'standards', label: 'Standards' },
  { id: 'sources', label: 'Sources' },
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
              <TextLink href={it.href} dark={dark}>{it.cta ?? 'Learn More'}</TextLink>
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
      about: { '@type': 'Thing', name: 'US multifamily and commercial real estate research' },
      mainEntity: { '@id': `${URL}#streams` },
      hasPart: { '@id': `${POST_URL}#article` },
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
      '@id': `${URL}#streams`,
      name: 'Murivest Research streams',
      itemListElement: STREAMS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `${BASE}${s.href}`,
      })),
    },
    {
      '@type': 'Article',
      '@id': `${POST_URL}#article`,
      headline: researchPost.title,
      description: researchPost.description,
      url: POST_URL,
      mainEntityOfPage: { '@type': 'WebPage', '@id': POST_URL },
      inLanguage: 'en-US',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      datePublished: researchPost.datePublished,
      dateModified: researchPost.dateModified ?? researchPost.datePublished,
      image: absolute(researchPost.image ?? '/default-research-image.webp'),
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
export default function USAResearchPage() {
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
              Research
            </span>
          </p>
          <div className="mt-3 h-px w-16 bg-[#C9A87C]/60" />

          <h1 className="mt-10 max-w-4xl font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] text-[#F8F7F4]">
            Research for principals who decide on evidence.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Independent analysis of US multifamily and commercial real estate, built on cited
            public and institutional data and read through an underwriting lens. Every figure is
            sourced, every view states its assumptions.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="#subscribe" className={BTN_DARK}>Receive New Research</a>
            <Link href="/usa/contact" className={BTN_GHOST}>Request a Mandate</Link>
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
          RESEARCH STREAMS
      ═══════════════════════════════════════════════════════════ */}
      <section id="streams" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Research Streams"
            title="Five ways we turn data into decisions."
            intro="From market reports to argued theses, each stream answers a different question a principal asks before committing capital."
          />
          <Cards items={STREAMS} cols="3" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED RESEARCH (before the subscription section)
      ═══════════════════════════════════════════════════════════ */}
      <div id="featured" className="scroll-mt-24">
        <ResearchSection post={researchPost} />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SUBSCRIBE
      ═══════════════════════════════════════════════════════════ */}
      <section id="subscribe" className="scroll-mt-24 bg-[#17251D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <Eyebrow dark>Murivest Perspectives</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F8F7F4] leading-[1.15]">
                Read it before the market prices it.
              </h2>
              <p className="mt-6 text-[14px] leading-[1.8] text-white/70 font-light">
                New US research, delivered to an institutional inbox. No noise, no promotions.
              </p>
            </div>
            <div className="lg:col-span-7">
              <form
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-end"
                action="/api/subscribe"
                method="POST"
              >
                <label htmlFor="research-email" className="sr-only">
                  Institutional email address
                </label>
                <input
                  id="research-email"
                  type="email"
                  name="email"
                  placeholder="Institutional email address"
                  required
                  autoComplete="email"
                  className="flex-1 px-1 py-4 bg-transparent border-b border-white/30 text-[#F8F7F4] text-[14px] font-light placeholder:text-white/40 focus:outline-none focus:border-[#C9A87C] transition-colors duration-300"
                />
                <button type="submit" className={`${BTN_DARK} shrink-0`}>
                  Subscribe
                </button>
              </form>
              <p className="text-[11px] text-white/50 mt-4 italic">
                By subscribing, you agree to receive institutional research communications. You
                may unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MULTIFAMILY AGENDA
      ═══════════════════════════════════════════════════════════ */}
      <section id="agenda" className="scroll-mt-24 bg-white">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <Eyebrow>Research Agenda</Eyebrow>
              <h2 className={H2}>The four questions we ask of US multifamily.</h2>
              <p className={`${BODY} mt-8`}>
                Multifamily is our primary US focus. This is the agenda that frames our work on
                the sector.
              </p>
              <div className="mt-8">
                <TextLink href="/usa/commercial-real-estate#multifamily">US Multifamily Sector</TextLink>
              </div>
            </div>
            <ol className="lg:col-span-8 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
              {AGENDA.map((a, i) => (
                <li key={a.title} className="group border-t border-[#E5E2DC] py-10 first:border-t-0 first:pt-0">
                  <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-serif text-2xl text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                    {a.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl">{a.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STANDARDS
      ═══════════════════════════════════════════════════════════ */}
      <section id="standards" className="scroll-mt-24 bg-[#17251D] text-white">
        <div className={SECTION_PAD}>
          <SectionHead
            dark
            eyebrow="Research Standards"
            title="Four rules every publication must pass."
            intro="Research is only useful if a reader can check it. These standards apply to every report, thesis and outlook we publish."
          />
          <Cards items={STANDARDS} cols="4" dark />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SOURCES
      ═══════════════════════════════════════════════════════════ */}
      <section id="sources" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Primary Sources"
            title="Built on data you can verify."
            intro="Our research draws on published public and institutional sources. Each publication names and links the specific datasets it uses."
          />
          <ul className="grid gap-px bg-[#E5E2DC] border border-[#E5E2DC] sm:grid-cols-2 lg:grid-cols-3">
            {SOURCES.map((s) => (
              <li key={s.href} className="bg-white">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-6 p-8 hover:bg-[#F8F7F4] transition-colors duration-500"
                >
                  <span>
                    <span className="block font-serif text-xl text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
                      {s.label}
                    </span>
                    <span className="mt-2 block text-[13px] leading-[1.7] text-[#5A5A5A] font-light">
                      {s.note}
                    </span>
                  </span>
                  <span aria-hidden="true" className="w-6 h-[1px] bg-[#8B7355] group-hover:w-10 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
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
                Murivest Research: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers on what we publish, where the data comes from and how to use it.
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
                Murivest Research is general information for institutional and professional
                readers. It is not tax, legal, financial or investment advice, takes no account of
                any individual&rsquo;s circumstances, and is not an offer or solicitation of any
                security or service. Forecasts and outlooks are opinions, are not guaranteed, and
                may change without notice. Data is drawn from third-party sources believed to be
                reliable but not independently verified in every case. Murivest is not a tax
                adviser, securities broker, appraiser or licensed US real estate broker.
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
            Research informs the decision. A mandate carries it out.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            When the analysis points to action, begin with a confidential consultation. We will
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