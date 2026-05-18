"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, IceCream, Image, Info, Phone } from "lucide-react";

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Flavors", href: "/flavors", icon: IceCream },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-cream/95 backdrop-blur-md border-t border-brand-brown/10 shadow-[0_-4px_24px_rgba(45,27,17,0.06)] px-2 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        // Check active state
        // For "/" it must match exactly, for others we check if it starts with the href
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-all relative ${
              isActive
                ? "text-brand-primary"
                : "text-brand-brown/60 active:text-brand-brown hover:text-brand-brown"
            }`}
          >
            {/* Icon wrapper with a subtle background bubble when active */}
            <div
              className={`p-1.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-brand-primary/10 text-brand-primary scale-110 shadow-sm"
                  : "bg-transparent text-brand-brown/60"
              }`}
            >
              <Icon size={20} className="stroke-[2.25]" />
            </div>

            {/* Label */}
            <span
              className={`text-[9px] mt-1 font-bold tracking-widest uppercase transition-colors duration-300 ${
                isActive ? "text-brand-primary font-extrabold" : "text-brand-brown/60"
              }`}
            >
              {item.name}
            </span>

            {/* Active Pill Indicator */}
            {isActive && (
              <span className="absolute bottom-0 w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-sm shadow-brand-primary/50" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
