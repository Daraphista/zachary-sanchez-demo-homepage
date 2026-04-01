'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image — Treatment C: gradient top-to-bottom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/luxury-exterior-5.jpg"
          alt="Austin luxury real estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-8xl font-serif uppercase tracking-[0.2em] mb-6">
            Austin Real Estate, Done Right
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-lg uppercase tracking-[0.4em] font-light text-white/80 mb-12">
            <span>Buying, selling, or investing — local expertise since 2007.</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="luxury-button"
          >
            View Active Listings
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
