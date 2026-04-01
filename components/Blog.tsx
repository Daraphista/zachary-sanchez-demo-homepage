'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const posts = [
  {
    title: 'Austin Market Report: Spring 2026',
    author: 'Zach Sanchez',
    excerpt: 'An in-depth look at shifting inventory, rate trends, and where buyer demand is concentrating across Austin\'s key neighborhoods.',
    image: '/images/stock/luxury-exterior-7.png',
  },
  {
    title: 'Why East Austin Keeps Outperforming the Market',
    author: 'Zach Sanchez',
    excerpt: 'East Austin\'s evolution from an overlooked corridor to one of Texas\'s most sought-after urban neighborhoods — and what\'s driving continued appreciation.',
    image: '/images/stock/luxury-exterior-6.png',
  },
  {
    title: 'New Construction in Central Texas: What Buyers Need to Know',
    author: 'Zach Sanchez',
    excerpt: 'Builder contracts, incentives, and red flags — everything you need before signing on a new construction home in the Austin metro.',
    image: '/images/stock/luxury-exterior.webp',
  },
];

export default function Blog() {
  return (
    <section className="py-32 bg-luxury-cream text-luxury-black">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="luxury-subheading text-luxury-gold mb-4">News &amp; Insights</p>
            <h2 className="luxury-heading text-luxury-black">Austin Market Insights</h2>
            <p className="mt-4 text-black/60 font-light max-w-xl">
              Trends, neighborhood deep-dives, and practical advice from someone who&apos;s been here since 2007.
            </p>
          </div>
          <button className="luxury-button border-black/20 text-black hover:border-luxury-gold">
            Visit the Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold mb-4">
                By {post.author}
              </p>
              <h3 className="text-3xl font-serif mb-4 group-hover:text-luxury-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-black/60 font-light leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="w-12 h-[1px] bg-black/10 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
