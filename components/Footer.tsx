'use client';

import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background — Treatment A: 90% Dark Overlay */}
      <Image
        src="/images/stock/luxury-interior-2.png"
        alt="Luxury interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/92" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-12 border-2 border-white flex items-center justify-center font-serif text-xl">
                ZS
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] leading-tight font-bold">Sanchez</p>
                <p className="text-[10px] uppercase tracking-[0.4em] leading-tight font-bold">Property Group</p>
              </div>
            </Link>
            <p className="text-white/40 font-light leading-relaxed text-sm">
              Sanchez Property Group is a team of real estate agents affiliated with Compass, specializing in Austin and Central Texas real estate.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/zachsanchezrealtor" className="text-white/40 hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <p className="luxury-subheading mb-8">Properties</p>
            <ul className="flex flex-col gap-4 text-sm text-white/60 font-light">
              <li><Link href="/properties/active" className="hover:text-luxury-gold transition-colors">Active Listings</Link></li>
              <li><Link href="/properties/new-construction" className="hover:text-luxury-gold transition-colors">New Construction</Link></li>
              <li><Link href="/properties/sold" className="hover:text-luxury-gold transition-colors">Sold Portfolio</Link></li>
              <li><Link href="/properties/valuation" className="hover:text-luxury-gold transition-colors">Home Valuation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="luxury-subheading mb-8">Services</p>
            <ul className="flex flex-col gap-4 text-sm text-white/60 font-light">
              <li><Link href="/buy" className="hover:text-luxury-gold transition-colors">Buy</Link></li>
              <li><Link href="/sell" className="hover:text-luxury-gold transition-colors">Sell</Link></li>
              <li><Link href="/rentals" className="hover:text-luxury-gold transition-colors">Rent</Link></li>
              <li><Link href="/concierge" className="hover:text-luxury-gold transition-colors">Compass Concierge</Link></li>
              <li><Link href="/relocation" className="hover:text-luxury-gold transition-colors">Relocation</Link></li>
            </ul>
          </div>

          {/* Contact + scroll */}
          <div className="flex flex-col items-start lg:items-end justify-between">
            <div>
              <p className="luxury-subheading mb-8">Contact</p>
              <ul className="flex flex-col gap-4 text-sm text-white/60 font-light">
                <li>(210) 831-2838</li>
                <li>sanchezpropertygrouptx@gmail.com</li>
                <li>4615 N Lamar Blvd #303B</li>
                <li>Austin, TX 78751</li>
              </ul>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-12 p-6 border border-white/10 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500 group"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2026 Sanchez Property Group. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">DMCA Notice</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-4 items-center text-[9px] uppercase tracking-widest text-white/20">
            <span>Equal Housing Opportunity</span>
            <span>·</span>
            <span>TREC</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-[9px] leading-relaxed text-white/10 text-center max-w-4xl mx-auto">
          Sanchez Property Group is a team of real estate agents affiliated with Compass. Compass RE Texas, LLC | (512) 575-3644. Compass is a licensed real estate broker and abides by all applicable equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. TREC Consumer Protection Notice | TREC Information About Brokerage Services.
        </div>
      </div>
    </footer>
  );
}
