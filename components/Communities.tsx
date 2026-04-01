'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const communities = [
  {
    name: 'South Central Austin',
    image: '/images/stock/luxury-interior-5.png',
    description: 'One of Austin\'s most culturally rich corridors — walkable, diverse, and home to some of the city\'s best dining, fitness, and arts scenes. A personal favorite.',
  },
  {
    name: 'East Austin',
    image: '/images/stock/luxury-exterior-7.png',
    description: 'Gritty character and rapid appreciation. East Austin has evolved into one of the most desirable urban neighborhoods in Texas — and Zach has watched every phase of that growth.',
  },
  {
    name: 'South Lamar',
    image: '/images/stock/luxury-exterior-6.png',
    description: 'A vibrant stretch connecting some of Austin\'s best restaurants, boutiques, and live music venues. Strong rental demand and consistent property value.',
  },
  {
    name: 'Central East Austin',
    image: '/images/stock/luxury-interior-3.png',
    description: 'The sweet spot between old Austin and new development. Attractive for first-time buyers and investors alike.',
  },
  {
    name: 'Greater Austin',
    image: '/images/stock/luxury-exterior-4.webp',
    description: 'From the Hill Country suburbs to North Austin\'s tech corridors — wide-area coverage backed by deep local ties.',
  },
];

export default function Communities() {
  return (
    <section className="relative py-32 bg-luxury-cream text-luxury-black">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <p className="luxury-subheading text-luxury-gold mb-4">Areas of Expertise</p>
          <h2 className="luxury-heading text-luxury-black">The Neighborhoods We Know Best</h2>
          <p className="mt-6 text-black/60 max-w-xl font-light">
            Hyper-local expertise across Austin&apos;s most sought-after communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <h3 className="text-4xl font-serif mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {area.name}
                </h3>
                <p className="text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {area.description}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-luxury-gold transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
