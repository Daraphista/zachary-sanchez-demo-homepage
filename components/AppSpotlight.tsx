'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AppSpotlight() {
  return (
    /* NEW SECTION */
    <section className="relative py-32 overflow-hidden">
      {/* Background — Treatment A: Dark Overlay */}
      <Image
        src="/images/stock/luxury-exterior-3.jpg"
        alt="Austin real estate app"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        {/* Example Section Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <span>✦</span>
          <span>Example Section — This is a preview of what this section could look like on your site</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="luxury-subheading mb-4">Mobile App</p>
            <h2 className="luxury-heading mb-8">(Example Section) Search Smarter</h2>
            <p className="text-white/60 font-light leading-relaxed mb-12">
              The Austin Home Search app puts real-time listings, price alerts, and neighborhood data in your pocket. Browse active inventory, save your favorites, and connect directly with Zach — all without opening a laptop. Built for buyers who move fast in a market that doesn&apos;t wait.
            </p>
            <div className="flex gap-4">
              <button className="luxury-button">Download on the App Store</button>
              <button className="luxury-button border-luxury-gold text-luxury-gold">Google Play</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-[9/16] max-w-xs mx-auto overflow-hidden border border-white/10"
          >
            <Image
              src="/images/stock/luxury-interior.png"
              alt="App mockup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/40 text-[10px] uppercase tracking-widest">App Mockup</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
