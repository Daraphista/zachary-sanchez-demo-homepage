'use client';

import Image from 'next/image';

const guides = [
  { name: "Buyer's Guide: Step-by-Step Home Purchase Process", href: '/guides/buyers' },
  { name: "Seller's Guide: When to Sell in Austin", href: '/guides/sellers' },
  { name: 'Pre-Listing Inspection Guide: Avoid Deal Breakers', href: '/guides/pre-listing' },
  { name: 'Relocation Guide: Moving to Austin', href: '/guides/relocation' },
  { name: 'Neighborhood Guide: South Central Austin', href: '/guides/south-central' },
  { name: 'Neighborhood Guide: East Austin', href: '/guides/east-austin' },
  { name: 'Neighborhood Guide: South Lamar', href: '/guides/south-lamar' },
];

export default function Guides() {
  return (
    /* NEW SECTION */
    <section className="relative overflow-hidden">
      <div className="py-12 px-6 md:px-12 max-w-[1800px] mx-auto">
        <h2 className="luxury-heading text-center mb-2">Know the Market Before You Move</h2>
        <p className="text-center luxury-subheading mb-12">Free guides for buyers, sellers, and newcomers to Austin</p>
      </div>

      {/* Pattern A: Full-Width Vertical Columns */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/stock/luxury-exterior-8.png"
          alt="Austin real estate guides"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="relative z-10 grid h-full"
          style={{ gridTemplateColumns: `repeat(${guides.length}, 1fr)` }}
        >
          {guides.map((guide, i) => (
            <a
              key={i}
              href={guide.href}
              className="flex items-center justify-center border-r border-white/20 last:border-r-0 text-white uppercase tracking-[0.15em] text-xs font-light hover:bg-black/30 transition-colors px-4 text-center"
            >
              {guide.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
