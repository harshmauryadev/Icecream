"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1702366443869-5c9a3f0c6444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNyYWZ0aW5nJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D"
            alt="Crafting Ice Cream"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 bg-brand-primary text-brand-brown p-6 rounded-xl shadow-xl">
            <p className="text-4xl font-display font-bold">15+</p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">Years of Craft</p>
          </div>
        </div>

        <div>
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-dancing text-brand-brown mt-4 mb-8 leading-tight">
            Crafting Sweet Memories in Every Single Scoop
          </h2>
          <p className="text-brand-brown/70 text-lg leading-relaxed mb-6">
            Situated in the heart of the city, Daylily offers a delightful retreat from the everyday. Our parlor is more than just an ice cream shop; it&apos;s a sanctuary of flavor where tradition meets innovation.
          </p>
          <p className="text-brand-brown/70 text-lg leading-relaxed mb-8">
            Whether you&apos;re here for a nostalgic classic or to discover your new obsession, our dedicated team ensures every visit is seamless, sweet, and deeply memorable.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "100% Organic, Locally Sourced Milk",
              "Small Batch Production for Peak Freshness",
              "Zero Artificial Preservatives or Colors",
              "Hand-picked Seasonal Ingredients"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-brand-brown font-medium">
                <span className="w-6 h-6 bg-brand-tertiary rounded-full flex items-center justify-center text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
          {!isAboutPage && (
            <Link href="/about" className="inline-block bg-brand-brown text-brand-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl">
              Learn More
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
