'use client';

import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const offices = [
  {
    city: 'Central Austin',
    address: '4615 N Lamar Blvd #303B, Austin, TX 78751',
    phone: '(210) 831-2838',
    image: '/images/stock/luxury-exterior-8.png',
  },
  {
    city: 'South Lamar',
    address: '1200 S Lamar Blvd, Suite 104, Austin, TX 78704',
    phone: '(512) 555-0173',
    image: '/images/stock/luxury-interior-4.png',
  },
  {
    city: 'East Austin',
    address: '979 Springdale Rd, Suite 122, Austin, TX 78702',
    phone: '(512) 555-0191',
    image: '/images/stock/luxury-exterior-5.jpg',
  },
];

export default function Offices() {
  return (
    <section className="py-32 bg-luxury-black">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Example Section Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
          <span>✦</span>
          <span>Example Section — This is a preview of what this section could look like on your site</span>
        </div>

        <div className="text-center mb-20">
          <p className="luxury-subheading mb-4">Our Presence</p>
          <h2 className="luxury-heading">(Example Section) Find Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-luxury-gray border border-white/5 p-10 hover:border-luxury-gold transition-all duration-700"
            >
              <div className="relative aspect-video overflow-hidden mb-8">
                <Image
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-serif mb-6 group-hover:text-luxury-gold transition-colors">
                {office.city}
              </h3>
              <div className="space-y-4 text-white/50 font-light text-sm">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-luxury-gold shrink-0" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-luxury-gold shrink-0" />
                  <p>{office.phone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
