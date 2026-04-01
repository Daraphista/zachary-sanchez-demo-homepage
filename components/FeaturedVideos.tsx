'use client';

import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedVideos() {
  return (
    /* NEW SECTION */
    <section className="relative py-32 overflow-hidden">
      {/* Background — Treatment C: Gradient top-to-bottom */}
      <Image
        src="/images/stock/luxury-exterior-5.jpg"
        alt="Austin real estate video"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/85" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="luxury-subheading mb-4">Watch &amp; Learn</p>
            <h2 className="luxury-heading mb-8">Learn Before You Buy</h2>
            <p className="text-white/60 font-light leading-relaxed mb-12">
              Navigating Austin&apos;s real estate market takes more than a quick search. This step-by-step video breaks down the home-buying process — what to expect, how to prepare, and how to move fast when the right property hits.
            </p>
            <button className="luxury-button">Watch the Guide</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-video overflow-hidden group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/stock/luxury-interior-3.png"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:border-luxury-gold group-hover:scale-110 transition-all duration-500">
                <Play size={28} className="text-white ml-1 group-hover:text-luxury-gold transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
