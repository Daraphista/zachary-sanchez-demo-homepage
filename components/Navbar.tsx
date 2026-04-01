'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Globe, Search } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Properties',
    href: '/properties',
    dropdown: [
      { name: 'Active Listings', href: '/properties/active' },
      { name: 'New Construction', href: '/properties/new-construction' },
      { name: 'Sold Portfolio', href: '/properties/sold' },
      { name: 'Home Valuation', href: '/properties/valuation' },
    ],
  },
  { name: 'Communities', href: '/communities' },
  { name: 'About Zach', href: '/about' },
  { name: 'Guides', href: '/guides' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'py-4 frosted-nav' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="group-hover:border-luxury-gold flex items-center justify-center w-8 h-12 font-serif text-xl transition-colors border-2 border-white">
            ZS
          </div>
          <div className="lg:block hidden">
            <p className="text-[10px] uppercase tracking-[0.4em] leading-tight font-bold">Sanchez</p>
            <p className="text-[10px] uppercase tracking-[0.4em] leading-tight font-bold">Property Group</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="xl:flex items-center hidden gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="group relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={12} />}
              </Link>

              {link.dropdown && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="top-full bg-luxury-gray border-white/10 absolute left-0 flex flex-col w-48 gap-3 p-4 mt-4 border"
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[10px] uppercase tracking-widest hover:text-luxury-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <a href="tel:+12108312838" className="hover:text-luxury-gold transition-colors">
            <Phone size={18} strokeWidth={1.5} />
          </a>
          <button className="hover:text-luxury-gold md:block hidden transition-colors">
            <Globe size={18} strokeWidth={1.5} />
          </button>
          <button className="hover:text-luxury-gold transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden hover:text-luxury-gold transition-colors"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-[60] flex flex-col"
          >
            <div className="border-white/10 flex items-center justify-between p-8 border-b">
              <div className="flex items-center justify-center w-8 h-12 font-serif text-xl border-2 border-white">
                ZS
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="md:grid-cols-2 grid flex-1 grid-cols-1 gap-12 p-8 overflow-y-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-luxury-gold font-serif text-4xl transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="flex flex-col gap-2 mt-4 ml-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white/50 hover:text-luxury-gold text-sm tracking-widest uppercase transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-white/10 md:flex flex flex-col justify-between pl-12 border-l">
                <div className="space-y-8">
                  <div>
                    <p className="luxury-subheading mb-4">Contact Info</p>
                    <p className="font-serif text-2xl">(210) 831-2838</p>
                    <p className="text-white/60">sanchezpropertygrouptx@gmail.com</p>
                  </div>
                  <div>
                    <p className="luxury-subheading mb-4">Office Location</p>
                    <p className="text-white/60">4615 N Lamar Blvd #303B, Austin, TX 78751</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
