'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const listings = [
  {
    id: 1,
    image: '/images/stock/luxury-interior-4.png',
    price: '$1,250,000',
    address: '2214 Barton Hills Dr, Austin, TX 78704',
    specs: '4 Beds / 3.5 Baths',
    size: 'large',
  },
  {
    id: 2,
    image: '/images/stock/luxury-exterior-8.png',
    price: '$875,000',
    address: '1812 E 9th St, Austin, TX 78702',
    specs: '3 Beds / 2 Baths',
    size: 'small',
  },
  {
    id: 3,
    image: '/images/stock/community-shot.png',
    price: '$640,000',
    address: '4407 S Congress Ave, Austin, TX 78745',
    specs: '2 Beds / 2 Baths',
    size: 'small',
  },
  {
    id: 4,
    image: '/images/stock/luxury-interior-2.png',
    price: '$2,100,000',
    address: '3302 Oakmont Blvd, Austin, TX 78703',
    specs: '5 Beds / 4 Baths',
    size: 'large',
  },
];

export default function Listings() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="luxury-subheading mb-4">Active properties across Austin and Central Texas.</p>
          <h2 className="luxury-heading">Current Listings</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex gap-8"
        >
          <Link href="/properties/active" className="text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors">Active Listings</Link>
          <Link href="/properties/new-construction" className="text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors">New Construction</Link>
          <Link href="/properties/sold" className="text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors">Sold Portfolio</Link>
          <Link href="/properties" className="text-xs uppercase tracking-widest font-bold border-b border-luxury-gold pb-1">View All Properties</Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {listings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`${
              listing.size === 'large' ? 'md:col-span-7' : 'md:col-span-5'
            } group cursor-pointer`}
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-6">
              <Image
                src={listing.image}
                alt={listing.address}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-500" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-3xl font-serif text-luxury-gold">{listing.price}</p>
              <h3 className="text-xl font-serif tracking-wide">{listing.address}</h3>
              <p className="text-xs uppercase tracking-widest text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {listing.specs}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
