export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with a subtle gradient/texture feel */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-brand-brown/30 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="block text-brand-secondary font-bold uppercase tracking-[0.3em] mb-4 text-sm animate-fade-in-down">
          {/* Est. 2026 • Artisanal & Pure */}
        </span>
        <h1 className="text-5xl md:text-8xl font-dancing text-brand-cream leading-tight mb-8 drop-shadow-2xl">
          Experience the sweetest moments like never before.
        </h1>
        <p className="text-brand-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Indulge in our handcrafted, small-batch ice creams made with the finest organic ingredients and a dash of magic.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-brand-primary text-brand-brown px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-cream transition-all shadow-xl">
            Explore Flavors
          </button>
          <button className="w-full sm:w-auto border-2 border-brand-cream text-brand-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-brown transition-all">
            Our Story
          </button>
        </div>
      </div>

      {/* Floating element decorative */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-cream/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-cream rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
