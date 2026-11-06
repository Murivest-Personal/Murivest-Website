import { Cinzel, Jost } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';

/* ─── SEO ─────────────────────────────────────────────────────── */
const BASE = 'https://murivest.com';
const PATH = '/usa/capital';
const URL = `${BASE}${PATH}`;
const ORG_ID = `${BASE}/#organization`;
const WEBSITE_ID = `${BASE}/#website`;
const LAST_REVIEWED = '2026-11-03';

const TITLE = 'US Commercial Real Estate Capital Advisory: Equity, Debt, Recapitalization | Murivest';
const DESCRIPTION =
  'Independent capital structure advisory for US commercial real estate and multifamily: equity, debt, capital introduction and recapitalization, coordinated with licensed lenders and placement professionals.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'commercial real estate capital advisory',
    'multifamily financing advisory',
    'capital stack real estate',
    'joint venture equity real estate',
    'real estate recapitalization',
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
  { name: 'Capital', path: PATH },
];

const SERVICES: Item[] = [
  {
    title: 'Capital Advisory',
    desc: 'Independent advice on the right capital stack, weighing equity, debt and hybrid structures against the business plan and your objectives.',
    href: '/usa/capital/capital-advisory',
  },
  {
    title: 'Capital Introduction',
    desc: 'Introductions to a curated set of equity and debt providers matched to the mandate, made through appropriately licensed professionals where the law requires.',
    href: '/usa/capital/capital-introduction',
  },
  {
    title: 'Equity Financing',
    desc: 'Joint-venture and preferred-equity strategy for acquisitions, development and recapitalizations across the risk spectrum.',
    href: '/usa/capital/equity',
  },
  {
    title: 'Debt Financing',
    desc: 'Agency, bank, bridge and structured debt strategy, matched to the asset, the business plan and the return profile. Placement is coordinated with licensed lenders and mortgage professionals.',
    href: '/usa/capital/debt',
  },
  {
    title: 'Recapitalization',
    desc: 'Restructuring ownership and the capital stack to unlock value, manage a maturity or reposition an asset for its next phase.',
    href: '/usa/capital/recapitalization',
  },
];

const STACK: Item[] = [
  {
    title: 'Senior Debt',
    desc: 'First-lien financing secured by the property. It carries the lowest cost of capital and the strictest covenants. For stabilised apartments, agency lenders are often the deepest source.',
  },
  {
    title: 'Mezzanine & Preferred Equity',
    desc: 'Capital that sits behind senior debt and ahead of common equity. It raises leverage at a higher cost and brings its own intercreditor and control terms.',
  },
  {
    title: 'Joint-Venture Equity',
    desc: 'A partner funds most of the equity and shares returns with the sponsor, typically with a promote above a preferred return. Alignment and control rights decide the outcome.',
  },
  {
    title: 'Sponsor Equity',
    desc: 'The first-loss capital of the operator or owner. Lenders and partners read its size and structure as the clearest signal of conviction.',
  },
];

const PRINCIPLES: Item[] = [
  {
    title: 'Independent Structure Advice',
    desc: 'We have no balance sheet to deploy and no product menu. The recommendation follows the asset and your objectives.',
  },
  {
    title: 'Mandate-Matched Introductions',
    desc: 'Providers are selected for fit with the mandate, not drawn from a generic distribution list.',
  },
  {
    title: 'Diligence Readiness',
    desc: 'Model, materials and narrative are prepared to the standard institutional capital expects, shortening the path from introduction to close.',
  },
  {
    title: 'Aligned and Conflict-Free',
    desc: 'We do not lend, invest or carry proprietary positions. Our role is to represent your interests in the capital conversation.',
  },
];

const AUDIENCE: Item[] = [
  {
    title: 'Operating Partners & Sponsors',
    desc: 'Operators and developers seeking joint-venture equity, preferred equity or debt for acquisitions, development and recapitalizations.',
  },
  {
    title: 'Institutional Investors',
    desc: 'Allocators weighing co-investment, joint-venture or direct positions who want independent structuring support.',
  },
  {
    title: 'Owners & Family Offices',
    desc: 'Direct owners exploring recapitalization or structured capital to unlock value without a full sale.',
  },
];

const LIFECYCLE = [
  {
    title: 'Acquisition Advisory',
    desc: 'Fund the entry with the right structure.',
    href: '/usa/acquire',
  },
  {
    title: 'Sell & Disposition',
    desc: 'Exit on terms the capital structure supports.',
    href: '/usa/sell',
  },
];

const FAQS = [
  {
    question: 'What is a capital stack in real estate?',
    answer:
      'The capital stack is the combination of financing used to fund a property, ordered by priority of repayment: senior debt first, then mezzanine debt or preferred equity, then joint-venture and sponsor common equity. Lower layers cost less but carry stricter covenants. Higher layers cost more and absorb losses first.',
  },
  {
    question: 'Does Murivest lend or invest its own capital?',
    answer:
      'No. Murivest does not lend, invest, pool capital or carry proprietary positions. It advises on structure and coordinates with qualified capital providers, which keeps its advice independent of any product.',
  },
  {
    question: 'Is Murivest a placement agent, mortgage broker or broker-dealer?',
    answer:
      'No. Where a debt placement or a securities offering is involved, appropriately licensed lenders, mortgage professionals or broker-dealers perform the regulated function alongside Murivest.',
  },
  {
    question: 'What financing is available for US multifamily acquisitions?',
    answer:
      'Stabilised apartment communities can often be financed through agency lenders such as Fannie Mae and Freddie Mac, banks and life companies. Transitional or value-add assets typically use bridge or other structured debt. The right structure depends on the business plan, leverage target and hold period.',
  },
  {
    question: 'When does recapitalization make sense?',
    answer:
      'Typically when a loan is approaching maturity, when an owner wants to release equity without selling, when a business plan needs fresh capital, or when partners need to be realigned. Each case is assessed against the asset’s underwriting.',
  },
];

const RELATED = [
  { label: 'Acquisition Advisory', href: '/usa/acquire' },
  { label: '1031 Exchange into Multifamily', href: '/usa/1031-exchange' },
  { label: 'Commercial Real Estate Sectors', href: '/usa/commercial-real-estate' },
  { label: 'About Murivest USA', href: '/usa/about' },
];

const TOC = [
  { id: 'services', label: 'Services' },
  { id: 'stack', label: 'Capital Stack' },
  { id: 'principles', label: 'Principles' },
  { id: 'audience', label: 'Who We Advise' },
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
}: {
  items: Item[];
  cols: keyof typeof GRID_COLS;
  surface?: 'white' | 'cream';
}) {
  const cell = surface === 'cream' ? 'bg-[#F8F7F4] hover:bg-white' : 'bg-white hover:bg-[#F8F7F4]';
  return (
    <div className={`grid gap-px bg-[#E5E2DC] border border-[#E5E2DC] ${GRID_COLS[cols]}`}>
      {items.map((it, i) => (
        <article key={it.title} className={`group p-8 lg:p-10 transition-colors duration-500 ${cell}`}>
          <p className="text-[11px] tracking-[0.2em] text-[#8B7355] font-medium mb-4">
            {String(i + 1).padStart(2, '0')}
          </p>
          <h3 className="text-[15px] font-semibold tracking-wide text-[#2C2C2C] mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
            {it.title}
          </h3>
          <p className="text-[13px] leading-[1.75] text-[#5A5A5A] font-light">{it.desc}</p>
          {it.href && (
            <div className="mt-6">
              <TextLink href={it.href}>Learn More</TextLink>
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
      name: 'US Commercial Real Estate Capital Advisory',
      serviceType: 'Capital markets advisory',
      description: DESCRIPTION,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'United States' },
      audience: {
        '@type': 'Audience',
        audienceType: 'Sponsors, institutional investors, family offices and ultra-high-net-worth individuals',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Capital advisory services',
        itemListElement: SERVICES.map((s) => ({
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
export default function USACapitalPage() {
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
            The right capital, on the right terms, in the right order.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] sm:text-[16px] leading-[1.9] text-white/80 font-light">
            Murivest advises sponsors, owners and investors on the capital behind US commercial
            real estate and multifamily: structuring the stack, coordinating equity and debt
            providers, and recapitalizing assets for their next phase. Independent advice.
            Licensed execution.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>Discuss a Capital Mandate</Link>
            <Link href="/usa/acquire" className={BTN_GHOST}>Pair with Acquisition</Link>
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
          SERVICES
      ═══════════════════════════════════════════════════════════ */}
      <section id="services" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Capital Services"
            title="One conversation across the full capital stack."
            intro="Capital is not a single product. We organize each mandate around the structure that fits the asset and the sponsor, from pure advice to introduction, equity, debt and recapitalization."
          />
          <Cards items={SERVICES} cols="3" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE CAPITAL STACK
      ═══════════════════════════════════════════════════════════ */}
      <section id="stack" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
            <div className="lg:col-span-4">
              <Eyebrow>The Capital Stack</Eyebrow>
              <h2 className={H2}>Four layers. Four different risks.</h2>
              <div className="w-16 h-[1px] bg-[#E5E2DC] mt-8 hidden lg:block" />
            </div>
            <div className="lg:col-span-8 lg:border-l lg:border-[#E5E2DC] lg:pl-16">
              <p className="text-[16px] leading-[1.9] text-[#2C2C2C] font-light mb-6">
                Every real estate transaction is financed by a stack of capital ordered by
                repayment priority. Choosing the wrong layer, or the wrong proportion, can turn a
                sound asset into a poor investment.
              </p>
              <p className={BODY}>
                We test the stack against the underwriting. Leverage is sized to the asset&rsquo;s
                cash flow and the downside case, not to the maximum a lender will offer.
              </p>
            </div>
          </div>
          <Cards items={STACK} cols="4" surface="cream" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MID-PAGE CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#17251D] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <p className="max-w-2xl font-serif text-2xl md:text-3xl leading-[1.3] text-[#F8F7F4]">
            Structure decided late is structure decided by the lender.{' '}
            <span className="text-[#C9A87C]">Decide it first.</span>
          </p>
          <Link href="/usa/contact" className={`${BTN_DARK} shrink-0`}>
            Discuss a Capital Mandate
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRINCIPLES
      ═══════════════════════════════════════════════════════════ */}
      <section id="principles" className="scroll-mt-24 bg-[#F8F7F4]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Our Principles"
            title="Capital advice without a balance sheet to push."
            intro="Because we do not lend or invest our own capital, our only incentive is the quality of the structure and the fit of the source."
          />
          <Cards items={PRINCIPLES} cols="4" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHO WE ADVISE
      ═══════════════════════════════════════════════════════════ */}
      <section id="audience" className="scroll-mt-24 bg-white border-t border-[#E5E2DC]">
        <div className={SECTION_PAD}>
          <SectionHead
            eyebrow="Who We Advise"
            title="Sponsors and investors across the capital spectrum."
            intro="We advise both those seeking capital and those deploying it, so that the structure serves the underlying real estate strategy."
          />
          <Cards items={AUDIENCE} cols="3" surface="cream" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONNECTED ADVISORY
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#17251D] text-white">
        <div className={SECTION_PAD}>
          <SectionHead
            dark
            eyebrow="Connected Advisory"
            title="Capital is the bridge between acquisition and disposition."
            intro="Every capital decision shapes the return on both sides of a transaction. We keep acquisition and exit advice aligned so the structure is built with the full lifecycle in view."
          />
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {LIFECYCLE.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between gap-6 bg-[#17251D] p-8 lg:p-10 hover:bg-[#0B3D2E]/60 transition-colors duration-500"
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#F8F7F4]">{l.title}</h3>
                  <p className="mt-2 text-[13px] text-white/70 font-light">{l.desc}</p>
                </div>
                <span className="w-6 h-[1px] shrink-0 bg-[#C9A87C] group-hover:w-10 transition-all duration-300" />
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
                Capital Advisory: Frequently Asked Questions
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Direct answers on structure, financing and what we do not do.
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
                broker-dealer, placement agent, mortgage broker, lender or licensed US real estate
                broker. It does not lend, invest or pool capital. Regulated activities are
                performed by appropriately licensed professionals. This page is general
                information and not tax, legal, financial or investment advice, and nothing here is
                an offer or solicitation of any security or loan.
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
            Good assets are lost to bad structures. Start with the structure.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/70 font-light">
            Tell us the asset, the business plan and the outcome you need. We will advise on the
            structure and define the scope in writing before any work begins.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/usa/contact" className={BTN_DARK}>Discuss a Capital Mandate</Link>
            <Link href="/usa/capital/equity" className={BTN_GHOST}>Explore Equity Financing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}