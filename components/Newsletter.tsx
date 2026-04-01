'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden text-luxury-black">
      {/* Background — Treatment E: Brand Color (gold) over image */}
      <Image
        src="/images/stock/luxury-exterior-7.png"
        alt="Austin real estate"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-luxury-gold/90" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Stay Ahead of the Austin Market</h2>
          <p className="text-lg font-light opacity-80">
            New listings, neighborhood updates, and market shifts — delivered straight to your inbox before they hit the portals.
          </p>
        </div>

        <div className="w-full lg:w-auto flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-8 py-4 bg-white/20 border border-black/10 placeholder:text-black/40 focus:bg-white focus:outline-none transition-all duration-500 min-w-[220px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-8 py-4 bg-white/20 border border-black/10 placeholder:text-black/40 focus:bg-white focus:outline-none transition-all duration-500 min-w-[280px]"
            />
            <button className="px-12 py-4 bg-luxury-black text-white uppercase tracking-widest text-xs font-bold hover:bg-black/80 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] leading-relaxed text-black/50 max-w-lg">
            I agree to receive market updates and real estate insights from Sanchez Property Group. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
