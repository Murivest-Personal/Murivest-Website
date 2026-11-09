import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, Mail, Phone } from 'lucide-react';

const REPORT_PATH = '/reports/Murivest-UK-Market-Outlook-Q4-2026.pdf';
const PAGE_URL = 'https://murivest.com/united-kingdom/market-outlook';

export const metadata: Metadata = {
  title: 'UK Commercial Real Estate Market Outlook Q4 2026 | Murivest',
  description:
    'The Murivest View, Q4 2026: when rates turn, earning returns in UK real estate. Download the outlook covering the macro reset, capital flows, occupiers, sectors, scenarios, and our playbook.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'UK Commercial Real Estate Market Outlook Q4 2026',
    description: 'When rates turn: earning returns in UK real estate. The Murivest View, Q4 2026.',
    url: PAGE_URL,
    type: 'article',
  },
};

const sections = [
  { n: '01', title: 'The macro reset', note: 'What changed since August' },
  { n: '02', title: 'Capital is open, but it is choosing carefully', note: '' },
  { n: '03', title: 'Occupiers', note: 'The good news, and where it is concentrated' },
  { n: '04', title: 'Sector scorecard', note: '' },
  { n: '05', title: 'The Budget', note: 'Stability over stimulus' },
  { n: '06', title: 'Three scenarios, not one forecast', note: '' },
  { n: '07', title: 'The Murivest playbook', note: 'No-regrets moves · Options · Big bets' },
];

const exhibits = [
  'The macro picture: forecast versus latest',
  'UK CPI inflation: where it has been and where the Bank expects it to go',
  'Q3 2026 UK commercial property investment by sector',
  'All-property total return forecast',
  'Central London office take-up, 2026',
];

const alsoInside = [
  'A note on investor communication',
  'What we are watching in Q4 and early 2027',
  'Conclusion',
  'Sources and notes',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Report',
  name: 'UK Commercial Real Estate Market Outlook Q4 2026',
  alternateName: 'When rates turn: earning returns in UK real estate',
  datePublished: '2026-11',
  author: { '@type': 'Person', name: 'Mark Muriithi' },
  publisher: { '@type': 'Organization', name: 'Murivest Group Ltd', url: 'https://murivest.com' },
  url: PAGE_URL,
};

export default function UKMarketOutlookPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ───────────────────────────── */}
      <section className="border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-28 lg:pt-36 pb-20 lg:pb-28">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#A9A39A] mb-12">
            <Link href="/united-kingdom" className="hover:text-[#8B7355] transition-colors">United Kingdom</Link>
            <span>/</span>
            <span className="text-[#8B7355]">Market Outlook</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Cover */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] max-w-[340px] bg-[#0B3D2E] text-[#F8F7F4] border border-[#0B3D2E] p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[9px] tracking-[0.35em] uppercase text-[#C4B59D] mb-6">The Murivest View</p>
                  <h2 className="font-serif text-[26px] leading-[1.15]">
                    UK Commercial
                    <br />
                    Real Estate
                    <br />
                    <span className="italic font-light text-[#C4B59D]">Market Outlook</span>
                  </h2>
                </div>
                <div>
                  <div className="w-8 h-px bg-[#C4B59D] mb-4" />
                  <p className="font-serif italic text-[13px] text-[#F8F7F4]/80 leading-snug mb-5">
                    When rates turn: earning returns in UK real estate
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#C4B59D]">Q4 2026</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#8B7355]" />
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">
                  The Murivest View · Q4 2026
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.12] mb-4">
                UK Commercial Real Estate
                <br />
                <span className="italic text-[#5A5A5A] font-light">Market Outlook</span>
              </h1>

              <p className="font-serif italic text-[20px] text-[#2C2C2C] leading-snug mb-8">
                When rates turn: earning returns in UK real estate.
              </p>

              <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#8B7355] pl-6 max-w-[620px] mb-10">
                Our Q4 2026 view on the UK commercial property market: the macro reset, where capital
                is flowing, occupier demand, a sector scorecard, three scenarios, and the Murivest playbook.
              </p>

              <dl className="grid sm:grid-cols-3 gap-6 border-t border-b border-[#E5E2DC] py-6 mb-10 max-w-[620px]">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-[#8B7355] mb-1.5">Author</dt>
                  <dd className="text-[13px]">Mark Muriithi</dd>
                  <dd className="text-[12px] text-[#5A5A5A] font-light">Managing Director, Murivest UK</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-[#8B7355] mb-1.5">Published</dt>
                  <dd className="text-[13px]">November 2026</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-[#8B7355] mb-1.5">Data As Of</dt>
                  <dd className="text-[13px]">8 November 2026</dd>
                </div>
              </dl>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href={REPORT_PATH}
                  download
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B3D2E] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
                >
                  <Download className="h-4 w-4" />
                  Download Report (PDF)
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
                >
                  <span>Speak to Murivest UK</span>
                  <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENTS ───────────────────────── */}
      <section className="bg-[#FDFCFA] border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-[#8B7355]" />
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">Contents</p>
              </div>

              <div className="space-y-px bg-[#E5E2DC] border border-[#E5E2DC]">
                {sections.map((s) => (
                  <div key={s.n} className="grid grid-cols-12 gap-4 items-center bg-[#FDFCFA] px-5 sm:px-6 py-5">
                    <span className="col-span-2 sm:col-span-1 text-[11px] tracking-[0.2em] text-[#C4B59D] font-mono">
                      {s.n}
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h2 className="text-[15px] font-serif leading-snug">{s.title}</h2>
                      {s.note && <p className="text-[12px] text-[#5A5A5A] font-light mt-0.5">{s.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <FileText className="h-3.5 w-3.5 text-[#8B7355]" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355]">Exhibits</p>
                </div>
                <ul className="space-y-3">
                  {exhibits.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-[13px] text-[#5A5A5A] font-light leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-[#8B7355] mt-2.5 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] mb-5">Also Inside</p>
                <ul className="space-y-3">
                  {alsoInside.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-[13px] text-[#5A5A5A] font-light leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-[#8B7355] mt-2.5 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT + DISCLAIMER ───────────── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between gap-10">

            <div className="max-w-xl">
              <h2 className="font-serif text-2xl mb-3">Discuss the Outlook</h2>
              <p className="text-[14px] text-[#5A5A5A] font-light leading-relaxed">
                Murivest advises institutional investors, family offices, and private capital on UK
                commercial real estate under formal mandate.
              </p>
            </div>

            <div className="space-y-3 text-[13px]">
              <a href="mailto:office@murivest.com" className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#8B7355] transition-colors">
                <Mail className="h-4 w-4 text-[#8B7355]" />
                office@murivest.com
              </a>
              <a href="tel:+254115277610" className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#8B7355] transition-colors">
                <Phone className="h-4 w-4 text-[#8B7355]" />
                +254 115 277 610
              </a>
            </div>
          </div>

          <p className="mt-12 pt-8 border-t border-[#E5E2DC] text-[11px] leading-[1.8] text-[#5A5A5A] font-light italic max-w-3xl">
            Published by Murivest Group Ltd for information purposes only. Not investment advice or an
            offer of any financial product. Data as of 8 November 2026.
          </p>
        </div>
      </section>
    </main>
  );
}