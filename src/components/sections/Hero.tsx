'use client';

import Image from 'next/image';
import { Cinzel, Jost } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'], display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300', '400'], display: 'swap' });

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#17251D]">
      {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-label="Murivest luxury architectural background video"
        >
          <source src="/images/heroke.mp4" type="video/mp4" />
          
        </video>

      {/* Very light overlay, just enough for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

      {/* Content, sits slightly below centre like the reference */}
      <div className="relative z-10 flex w-full flex-col items-center px-6 pt-[10svh] text-center text-white">
        {/* Wordmark */}
        <div className="hero-reveal inline-flex flex-col items-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
          <h1
            className={`${cinzel.className} pl-[0.1em] text-[1.9rem] font-normal uppercase leading-none tracking-[0.1em] sm:text-4xl md:text-5xl lg:text-[3.5rem]`}
          >
            Murivest
          </h1>

          {/* Underline matches wordmark width */}
          <div className="mt-2 h-px w-full bg-white/90" />

          <p
            className={`${jost.className} mt-2 pl-[0.5em] text-[9px] font-light uppercase tracking-[0.5em] sm:text-[10px] md:text-xs`}
          >
            Group
          </p>
        </div>

        {/* Presents / Country */}
        <div className="hero-reveal-delayed mt-20 sm:mt-24 md:mt-28 drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)]">
          <p
            className={`${jost.className} pl-[0.9em] text-sm font-light uppercase tracking-[0.9em] text-white/90 sm:text-base md:text-lg`}
          >
            Presents
          </p>
          <p
            className={`${jost.className} mt-4 pl-[0.5em] text-xs font-normal uppercase tracking-[0.5em] sm:text-sm md:text-base`}
          >
            Kenya
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 left-0 right-0 z-10 text-center">
        <p
          className={`${jost.className} pl-[0.35em] text-[10px] font-light uppercase tracking-[0.35em] text-white/70`}
        >
          The Concierge of Capital
        </p>
      </div>

      <style jsx global>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal { animation: heroReveal 1.5s ease-out both; }
        .hero-reveal-delayed { animation: heroReveal 1.8s ease-out 0.35s both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal, .hero-reveal-delayed { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;