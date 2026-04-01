'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Philanthropy() {
  return (
    /* NEW SECTION */
    <section className="relative py-32 overflow-hidden">
      {/* Background — Treatment C: Gradient top-to-bottom */}
      <Image
        src="/images/stock/luxury-interior-3.png"
        alt="Community impact"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/85" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        {/* Example Section Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <span>✦</span>
          <span>Example Section — This is a preview of what this section could look like on your site</span>
        </div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="luxury-subheading mb-4">Community Impact</p>
            <h2 className="luxury-heading mb-8">(Example Section) Invested in Austin</h2>
            <p className="text-white/70 font-light leading-relaxed text-lg mb-12">
              Real estate is more than transactions — it&apos;s community. Each year, a portion of every closed deal supports the Austin Housing Access Fund, providing down-payment assistance to first-generation homebuyers in Central Texas. Since 2020, the program has helped over 30 families secure homeownership for the first time.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="luxury-button"
            >
              Learn About Our Impact
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
