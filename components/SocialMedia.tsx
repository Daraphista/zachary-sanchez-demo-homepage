'use client';

import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const socialImages = [
  '/images/stock/luxury-interior-3.png',
  '/images/stock/luxury-exterior-8.png',
  '/images/stock/community-shot.png',
  '/images/stock/luxury-interior-2.png',
  '/images/stock/luxury-exterior-3.jpg',
  '/images/stock/luxury-interior.png',
];

export default function SocialMedia() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background — Treatment A: Dark Overlay */}
      <Image
        src="/images/stock/luxury-exterior-4.webp"
        alt="Austin real estate"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Example Section Badge */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-0 pb-6 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <span>✦</span>
          <span>Example Section — This is a preview of what this section could look like on your site</span>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        <div className="lg:col-span-5">
          <p className="luxury-subheading mb-4">Let&apos;s Get Social</p>
          <h2 className="luxury-heading mb-8">(Example Section) Follow Along</h2>
          <p className="text-white/50 font-light leading-relaxed mb-12">
            Stay connected with Sanchez Property Group for Austin market updates, neighborhood spotlights, and property previews.
          </p>

          <div className="flex gap-6">
            <a href="https://instagram.com/zachsanchezrealtor" className="p-4 border border-white/10 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a href="#" className="p-4 border border-white/10 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
          {socialImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            >
              <Image src={img} alt="Austin real estate" fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
