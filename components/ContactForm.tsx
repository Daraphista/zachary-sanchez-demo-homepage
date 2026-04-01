'use client';

import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — Treatment A: Dark Overlay */}
      <Image
        src="/images/stock/community-shot.png"
        alt="Austin community"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="luxury-subheading text-luxury-gold mb-4">Get In Touch</p>
            <h2 className="luxury-heading mb-8">Let&apos;s Talk Austin Real Estate</h2>
            <p className="text-xl font-light text-white/60 mb-12 leading-relaxed">
              Whether you&apos;re ready to move or just starting to explore — reach out and Zach will get back to you personally.
            </p>
          </motion.div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
              <input
                type="text"
                className="bg-transparent border-b border-white/10 py-4 focus:border-luxury-gold outline-none transition-colors text-white placeholder:text-white/20"
                placeholder="Jane Smith"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Phone</label>
              <input
                type="tel"
                className="bg-transparent border-b border-white/10 py-4 focus:border-luxury-gold outline-none transition-colors text-white placeholder:text-white/20"
                placeholder="+1 (512) 000-0000"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email</label>
              <input
                type="email"
                className="bg-transparent border-b border-white/10 py-4 focus:border-luxury-gold outline-none transition-colors text-white placeholder:text-white/20"
                placeholder="jane@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">What are you interested in?</label>
              <input
                type="text"
                className="bg-transparent border-b border-white/10 py-4 focus:border-luxury-gold outline-none transition-colors text-white placeholder:text-white/20"
                placeholder="Buying, Selling, Renting..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Message</label>
              <textarea
                rows={4}
                className="bg-transparent border-b border-white/10 py-4 focus:border-luxury-gold outline-none transition-colors resize-none text-white placeholder:text-white/20"
                placeholder="How can I help you?"
              />
            </div>

            <div className="md:col-span-2 mt-8">
              <button className="luxury-button flex items-center gap-4 group">
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
