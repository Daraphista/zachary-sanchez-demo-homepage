'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function CustomServices() {
  return (
    /* NEW SECTION */
    <section className="relative py-32 overflow-hidden text-luxury-black">
      {/* Background — Treatment B: Light/Frosted */}
      <Image
        src="/images/stock/luxury-exterior-2.webp"
        alt="Compass Concierge service"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="luxury-subheading text-luxury-gold mb-4">Compass Concierge</p>
            <h2 className="luxury-heading text-luxury-black mb-8">Sell for More. Pay Nothing Upfront.</h2>
            <p className="text-black/60 font-light leading-relaxed text-lg mb-12">
              Through Compass Concierge, Zach&apos;s clients access pre-sale home preparation — staging, painting, flooring, and more — with zero out-of-pocket costs before closing. The work gets done, the home goes to market at its best, and payment is deferred until the sale closes.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="luxury-button border-black/20 text-black hover:border-luxury-gold"
            >
              Learn About Concierge
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-[4/3] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/stock/luxury-interior-4.png"
              alt="Home staging and preparation"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
