"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Flavors", href: "/flavors" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-dancing font-bold text-brand-brown tracking-tight">
          Day<span className="text-brand-primary">lily</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-brown">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-brand-primary ${pathname === link.href ? "text-brand-primary font-bold" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="bg-brand-brown text-brand-cream px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-lg hover:shadow-brand-primary/20"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
