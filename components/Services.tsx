'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  { name: 'Buy a Home', href: '/buy' },
  { name: 'Sell Your Home', href: '/sell' },
  { name: 'Search Rentals', href: '/rentals' },
  { name: 'New Construction', href: '/new-construction' },
  { name: 'Home Valuation', href: '/valuation' },
  { name: 'Relocation Services', href: '/relocation' },
  { name: 'Compass Concierge', href: '/concierge' },
  { name: 'Neighborhood Guides', href: '/guides' },
  { name: 'Investment Consultation', href: '/invest' },
  { name: 'Contact Zach', href: '/contact' },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background — Treatment D: Side Gradient */}
      <Image
        src="/images/stock/luxury-exterior.webp"
        alt="Austin real estate"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-4">
          <p className="luxury-subheading mb-4">Offers &amp; Services</p>
          <h2 className="luxury-heading mb-8">How We Can Help</h2>
          <p className="text-white/50 font-light leading-relaxed mb-12">
            From first-time buyers to seasoned investors — here&apos;s where to start.
          </p>
          <div className="relative aspect-square w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/stock/luxury-interior-4.png"
              alt="Austin property"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.a
              key={service.name}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-8 border border-white/10 hover:border-luxury-gold transition-all duration-500 flex items-center justify-between"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium group-hover:text-luxury-gold transition-colors">
                {service.name}
              </span>
              <ArrowRight size={16} className="text-white/20 group-hover:text-luxury-gold group-hover:translate-x-2 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
