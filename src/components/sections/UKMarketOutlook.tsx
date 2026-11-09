'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

const OUTLOOK_PAGE = '/united-kingdom/market-outlook';

const contents = [
  { n: '01', title: 'The Macro Reset', note: 'What changed since August' },
  { n: '02', title: 'Capital Is Open', note: 'But it is choosing carefully' },
  { n: '03', title: 'Occupiers', note: 'The good news, and where it is concentrated' },
  { n: '04', title: 'Sector Scorecard', note: 'Where we stand by sector' },
  { n: '05', title: 'The Budget', note: 'Stability over stimulus' },
  { n: '06', title: 'Three Scenarios', note: 'Not one forecast' },
  { n: '07', title: 'The Murivest Playbook', note: 'No-regrets moves · Options · Big bets' },
];

const UKMarketOutlookSection = () => {
  return (
    <section className="bg-[#F8F7F4] text-[#2C2C2C] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#8B7355]" />
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">
                The Murivest View · Q4 2026
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.12] mb-6">
              UK Commercial Real Estate
              <br />
              <span className="italic text-[#5A5A5A] font-light">Market Outlook</span>
            </h2>

            <p className="font-serif italic text-[18px] text-[#2C2C2C] leading-snug mb-6">
              When rates turn: earning returns in UK real estate.
            </p>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#8B7355] pl-6 mb-8">
              Our view on the macro reset, capital flows, occupier demand, sector performance,
              and three scenarios, with the playbook we apply to each.
            </p>

            <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-[#E5E2DC] mb-10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#A9A39A] mb-1">Author</dt>
                <dd className="text-[13px] text-[#2C2C2C]">Mark Muriithi</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#A9A39A] mb-1">Data As Of</dt>
                <dd className="text-[13px] text-[#2C2C2C]">8 November 2026</dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href={OUTLOOK_PAGE}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0B3D2E] text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                <Download className="h-4 w-4" />
                Download the Outlook
              </Link>
              <Link
                href="/united-kingdom"
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
              >
                <span>UK Platform</span>
                <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT: CONTENTS ────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#A9A39A] mb-4">Inside the Outlook</p>

            <div className="space-y-px bg-[#E5E2DC] border border-[#E5E2DC]">
              {contents.map((c) => (
                <Link
                  key={c.n}
                  href={OUTLOOK_PAGE}
                  className="group grid grid-cols-12 gap-4 items-center bg-[#FDFCFA] hover:bg-white transition-colors duration-400 px-5 sm:px-6 py-5"
                >
                  <span className="col-span-2 sm:col-span-1 text-[11px] tracking-[0.2em] text-[#C4B59D] font-mono">
                    {c.n}
                  </span>
                  <div className="col-span-9 sm:col-span-10">
                    <h3 className="text-[15px] font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-400 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-[12px] text-[#5A5A5A] font-light mt-0.5">{c.note}</p>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="w-4 h-4 text-[#C4B59D] opacity-0 group-hover:opacity-100 group-hover:text-[#8B7355] transition-all duration-400" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UKMarketOutlookSection;