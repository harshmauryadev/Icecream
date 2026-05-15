import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop" 
}: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-brand-brown/40 backdrop-brightness-75"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-dancing text-brand-cream drop-shadow-lg mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-brand-cream/90 text-lg md:text-xl font-light tracking-widest uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
