'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const accolades = [
  'Licensed Realtor, 10+ Years',
  'Compass Certified Agent',
  'Austin Market Specialist',
  'New Construction Expert',
  'Texas State University Alumni',
];

export default function About() {
  return (
    <section className="relative py-32 overflow-hidden text-luxury-black">
      {/* Background — Treatment B: Light/Frosted */}
      <Image
        src="/images/stock/luxury-interior.png"
        alt="Luxury interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-black/[0.03] pointer-events-none select-none whitespace-nowrap z-10">
        SANCHEZ
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-[4/5] w-full max-w-2xl mx-auto lg:mx-0 overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/stock/luxury-exterior-3.jpg"
            alt="Zach Sanchez"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col gap-8"
        >
          <div>
            <p className="luxury-subheading text-luxury-gold mb-4">Founder Spotlight</p>
            <h2 className="luxury-heading text-luxury-black mb-2">Zach Sanchez</h2>
            <p className="text-xl font-serif italic text-luxury-gold">Over a Decade of Austin Real Estate Experience</p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-black/70 font-light">
            <p>
              Zach Sanchez has been a licensed real estate agent for over a decade — and has called Austin home since 2007. He watched this city grow from a college town into a national tech hub, and that firsthand market knowledge is what he brings to every transaction.
            </p>
            <p>
              Whether you're building an investment portfolio, relocating to Central Texas, or searching for the right neighborhood to raise a family, Zach's approach starts with listening. He's built a reputation on relationships, responsiveness, and a deep understanding of Austin's neighborhoods — particularly South Central and East Austin.
            </p>
            <p>
              A graduate of Texas State University with a background in Public Relations and Business Administration, he combines market fluency with a creative, technology-forward mindset.
            </p>
          </div>

          <div className="flex gap-6 mt-4">
            <button className="luxury-button border-black/20 text-black hover:border-luxury-gold">
              Read Full Bio
            </button>
          </div>
        </motion.div>
      </div>

      {/* Accolades Banner */}
      <div className="mt-32 border-t border-black/5 pt-12 overflow-hidden relative z-10">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-20 whitespace-nowrap"
        >
          {[...accolades, ...accolades, ...accolades].map((item, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-[0.35em] font-bold text-black/30 hover:text-luxury-gold transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
