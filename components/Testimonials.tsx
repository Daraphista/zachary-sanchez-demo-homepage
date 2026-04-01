'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'First-Time Buyer Client',
    role: 'Home Buyer',
    text: 'Zach made the first-time home buying process way easier than we ever thought possible. He kept things on track and helped us understand every step — and made himself super available whenever we needed to tour a property.',
  },
  {
    name: 'Verified Client',
    role: 'Home Buyer and Seller',
    text: 'Zach was great in helping me buy a home and later sell it. The process was very unique and he was there every step of the way.',
  },
  {
    name: 'Relocation Client',
    role: 'New to Austin',
    text: 'I was so lucky to meet Zach. He showed me properties I wouldn\'t have found on my own, gave me a real feel for the city, and made what could have been a stressful process feel completely manageable.',
  },
  {
    name: 'Verified Client',
    role: 'Home Buyer',
    text: 'Zach is five stars. We\'re grateful for his grace under pressure and attentive, mindful stewardship of our purchase from start to finish.',
  },
  {
    name: 'Rental Client',
    role: 'Apartment Hunter',
    text: 'Within an hour of submitting a request, Zach personally called me to talk through exactly what I was looking for. From there he sent an interactive map with options that matched my criteria perfectly.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background — Treatment A: Dark Overlay */}
      <Image
        src="/images/stock/luxury-interior-5.png"
        alt="Luxury interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <p className="luxury-subheading mb-4">Client Experiences</p>
            <h2 className="luxury-heading mb-8">What Clients Say</h2>
            <div className="flex gap-4">
              <button onClick={prev} className="p-4 border border-white/10 hover:border-luxury-gold transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="p-4 border border-white/10 hover:border-luxury-gold transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: 'circOut' }}
                className="flex flex-col gap-8"
              >
                <Quote size={60} className="text-luxury-gold opacity-20" />
                <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
                  &quot;{testimonials[current].text}&quot;
                </p>
                <div>
                  <p className="text-xl font-serif text-luxury-gold">{testimonials[current].name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/40 mt-1">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
