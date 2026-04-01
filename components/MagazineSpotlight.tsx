'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function MagazineSpotlight() {
  return (
    /* NEW SECTION */
    <section className="relative overflow-hidden bg-luxury-cream text-luxury-black">
      {/* Treatment D: Side Gradient */}
      <Image
        src="/images/stock/luxury-interior.png"
        alt="Austin Property Report magazine"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-32 relative z-10">
        {/* Example Section Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <span>✦</span>
          <span>Example Section — This is a preview of what this section could look like on your site</span>
        </div>

        <div className="max-w-xl">
          <p className="luxury-subheading text-luxury-gold mb-4">Publication</p>
          <h2 className="luxury-heading text-luxury-black mb-8">(Example Section) The Austin Property Report</h2>
          <p className="text-black/60 font-light leading-relaxed text-lg mb-12">
            A quarterly look at Austin&apos;s market trends, emerging neighborhoods, and the properties defining the city&apos;s next chapter. Each issue features investment insights, lifestyle editorial, and exclusive property previews from the Sanchez Property Group portfolio.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="luxury-button border-black/20 text-black hover:border-luxury-gold"
          >
            Read the Latest Issue
          </motion.button>
        </div>
      </div>
    </section>
  );
}
