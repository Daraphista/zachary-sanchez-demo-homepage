'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

const stats = [
  { label: 'Years Licensed', value: '10+' },
  { label: 'In Austin Since', value: '2007' },
  { label: 'Core Austin Neighborhoods', value: '3' },
  { label: 'Homes Sold', value: '1000+' },
  { label: 'Total Sales Volume', value: '500M' },
  { label: '5-Star Reviews', value: '1000+' },
];

export default function Stats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background — Treatment A: Dark Overlay */}
      <Image
        src="/images/stock/luxury-exterior-2.webp"
        alt="Austin real estate"
        fill
        className="object-cover"
      />
      <div className="bg-black/70 absolute inset-0" />

      <motion.div style={{ y }} className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center">
          <p className="luxury-subheading mb-4">Proven Results</p>
          <h2 className="luxury-heading">Rooted in Austin. Ready for Your Next Move.</h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Zach has been working Austin&apos;s real estate market since 2007 — through boom cycles, rate shifts, and neighborhood transformations. His clients close with confidence because he stays ahead of market trends, new construction pipelines, and investment opportunities most agents overlook.
          </p>
        </div>

        <div className="lg:grid-cols-3 gap-y-20 gap-x-12 grid grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="md:text-7xl text-luxury-gold group-hover:scale-110 mb-4 font-serif text-5xl transition-transform duration-500">
                {stat.value}
              </div>
              <div className="w-12 h-[1px] bg-white/20 mb-4 group-hover:w-24 group-hover:bg-luxury-gold transition-all duration-500" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-32">
          <button className="luxury-button">Explore Our Portfolio</button>
          <button className="luxury-button border-luxury-gold text-luxury-gold">Home Valuation</button>
        </div>
      </motion.div>
    </section>
  );
}
