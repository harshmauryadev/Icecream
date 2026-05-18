const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: "A truly delightful experience! The textures are so creamy, and you can really taste the quality of the ingredients. The Roasted Pistachio is out of this world.",
  },
  {
    name: "Rajesh Gupta",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "The best artisanal ice cream in the city. The balance of flavors is perfect—not too sweet, just incredibly rich and satisfying. A must-visit for every dessert lover.",
  },
  {
    name: "Ananya Desai",
    role: "Local Resident",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "I love bringing my kids here. The atmosphere is so warm and welcoming, and I feel good knowing they're eating real, organic treats. The Mango Sorbet is our favorite!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-tertiary/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-dancing text-brand-brown mt-4">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 border border-brand-brown/5">
              <div className="flex gap-1 text-brand-primary mb-6 text-lg">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="text-brand-brown/80 italic leading-relaxed mb-8 text-lg">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20 shadow-md"
                />
                <div>
                  <h4 className="font-display font-bold text-brand-brown">{t.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
