'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const pressItems = [
  {
    publication: 'Austin Home & Living',
    title: 'The Agents Reshaping Austin\'s Real Estate Scene',
    link: '#',
  },
  {
    publication: 'Central Texas Business Review',
    title: 'Top Producers: Who\'s Closing Deals in a Shifting Market',
    link: '#',
  },
  {
    publication: 'The Texas Real Estate Podcast',
    title: 'Episode 112: Austin\'s East Side and What\'s Coming Next',
    link: '#',
  },
];

export default function Press() {
  return (
    <section className="relative py-32 overflow-hidden text-luxury-black">
      {/* Background — Treatment B: Light/Frosted */}
      <Image
        src="/images/stock/luxury-interior-2.png"
        alt="Luxury interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        {/* Example Section Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <span>✦</span>
          <span>Example Section — This is a preview of what this section could look like on your site</span>
        </div>

        <div className="text-center mb-20">
          <p className="luxury-subheading text-luxury-gold mb-4">In The News</p>
          <h2 className="luxury-heading text-luxury-black">(Example Section) As Seen In</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pressItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group block p-10 bg-white border border-black/5 hover:shadow-2xl transition-all duration-700"
            >
              <div className="h-12 mb-8 flex items-center">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">{item.publication}</p>
              </div>
              <h3 className="text-2xl font-serif mb-6 group-hover:text-luxury-gold transition-colors">
                &quot;{item.title}&quot;
              </h3>
              <span className="text-[10px] uppercase tracking-widest font-bold border-b border-black/20 pb-1 group-hover:border-luxury-gold">
                Read Article
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
