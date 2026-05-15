"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const images = [
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlY3JlYW0lMjBjdXB8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D",
];

export default function Gallery() {
  const pathname = usePathname();
  const isGalleryPage = pathname === "/gallery";

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Our World</span>
            <h2 className="text-4xl md:text-5xl font-dancing text-brand-brown mt-4">Glimpses of Sweetness</h2>
          </div>
          {!isGalleryPage && (
            <Link href="/gallery" className="bg-brand-brown text-brand-cream px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all">
              Explore Full Gallery
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl cursor-pointer group ${i === 1 ? 'md:row-span-2 md:h-[616px]' : 'h-72'}`}>
              <img
                src={img}
                alt="Ice Cream Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-12 h-12 border-2 border-brand-cream rounded-full flex items-center justify-center text-brand-cream text-2xl font-light">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
