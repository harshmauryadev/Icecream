"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const flavors = [
  {
    name: "Signature Sundaes",
    description: "A decadent blend of our premium vanilla bean, topped with warm Belgian chocolate and hand-picked berries.",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2000&auto=format&fit=crop",
    details: "Our Signature Sundaes are crafted with a base of double-churned Tahitian vanilla bean ice cream. We fold in chunks of 70% dark Belgian chocolate and top it with a house-made coulis of wild mountain berries. Every spoonful is a symphony of textures and temperatures.",
    ingredients: ["Tahitian Vanilla Bean", "70% Dark Chocolate", "Wild Berries", "Organic Cream", "Cane Sugar"],
    nutrition: "Calories: 320 | Fat: 18g | Sugar: 24g"
  },
  {
    name: "Classic Scoops",
    description: "Our timeless recipes, from Tahitian Vanilla to intense Belgian Dark Chocolate. Simple, pure, and perfect.",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=2000&auto=format&fit=crop",
    details: "The essence of Daylily. These scoops are made using traditional slow-churn methods to ensure a dense, creamy texture. We use only the finest natural extracts and pure organic milk from local farms. It's the taste of nostalgia, refined for the modern palate.",
    ingredients: ["Local Organic Milk", "Tahitian Vanilla Extract", "Pure Belgian Cocoa", "Egg Yolks", "Sea Salt"],
    nutrition: "Calories: 210 | Fat: 12g | Sugar: 16g"
  },
  {
    name: "Family Packs",
    description: "The perfect shareable joy. Choose any 3 flavors in our signature large tubs for those special home moments.",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop",
    details: "Our Family Packs are designed to bring the Daylily experience to your dinner table. Each tub is carefully packed by hand to maintain the perfect consistency. You can mix and match any of our seasonal and signature flavors for a customizable dessert experience.",
    ingredients: ["Choice of 3 Signature Flavors", "Insulated Eco-friendly Packaging"],
    nutrition: "Varies based on flavor selection"
  },
  {
    name: "Mango Alphonso Delight",
    description: "Experience the 'King of Mangoes' in a creamy, tropical embrace that melts in your mouth.",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1633834704595-63d830818bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFscGhvbnNvJTIwRGVsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    details: "Crafted during the peak of summer, our Mango Alphonso Delight uses real pulp from hand-selected Ratnagiri Alphonso mangoes. We blend it with a hint of cardamom to elevate the natural sweetness. It's sunshine in a scoop.",
    ingredients: ["Fresh Alphonso Mango Pulp", "Organic Milk", "Cardamom", "Natural Cane Sugar"],
    nutrition: "Calories: 240 | Fat: 10g | Sugar: 28g"
  },
  {
    name: "Pistachio Praline",
    description: "Roasted Mediterranean pistachios meets crunchy caramelized praline for a sophisticated treat.",
    price: "₹420",
    image: "https://images.unsplash.com/photo-1765946025181-8b7a16ab93f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGlzdGFjaGlvJTIwUHJhbGluZXxlbnwwfHwwfHx8MA%3D%3D",
    details: "We source our pistachios directly from Bronte, Italy, known for the world's finest nuts. They are lightly roasted and ground into a smooth paste, then combined with house-made almond praline for a satisfying crunch in every bite.",
    ingredients: ["Roasted Pistachios", "Almond Praline", "Sea Salt", "Grass-fed Dairy"],
    nutrition: "Calories: 310 | Fat: 22g | Sugar: 14g"
  },
  {
    name: "Strawberry Cheesecake",
    description: "Velvety cream cheese ice cream swirled with real strawberry compote and buttery graham cracker crust.",
    price: "₹380",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2000&auto=format&fit=crop",
    details: "A dessert within a dessert. Our Strawberry Cheesecake flavor features a rich New York style cheesecake base. We create a tart strawberry swirl using fresh berries and mix in generous chunks of hand-baked graham cracker crust for the ultimate indulgence.",
    ingredients: ["Premium Cream Cheese", "Fresh Strawberries", "Graham Crackers", "Vanilla Bean"],
    nutrition: "Calories: 290 | Fat: 16g | Sugar: 22g"
  },
];

export default function Flavors() {
  const pathname = usePathname();
  const isFlavorsPage = pathname === "/flavors";
  const [selectedFlavor, setSelectedFlavor] = useState<typeof flavors[0] | null>(null);

  return (
    <section id="flavors" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-dancing text-brand-brown mt-4">Curated Flavors for Every Mood</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {flavors.map((flavor, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className="relative h-[450px] overflow-hidden rounded-2xl mb-6 shadow-lg"
                onClick={() => setSelectedFlavor(flavor)}
              >
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 text-brand-cream translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm font-bold uppercase tracking-widest">{flavor.price}</span>
                  <p className="mt-2 text-sm text-brand-cream/80 line-clamp-2">{flavor.description}</p>
                </div>
              </div>
              <h3 className="text-2xl font-display text-brand-brown group-hover:text-brand-primary transition-colors">
                {flavor.name}
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => setSelectedFlavor(flavor)}
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors"
                >
                  View Details
                </button>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-brown pb-1 hover:text-brand-primary transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!isFlavorsPage && (
          <div className="text-center mt-16">
            <Link href="/flavors" className="inline-flex items-center gap-2 text-brand-brown font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors">
              View All Flavors <span className="text-xl">→</span>
            </Link>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedFlavor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
          <div
            className="absolute inset-0 bg-brand-brown/60 backdrop-blur-md"
            onClick={() => setSelectedFlavor(null)}
          ></div>
          <div className="relative bg-brand-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedFlavor(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-brown hover:bg-brand-primary transition-all shadow-md"
            >
              <IoClose size={24} />
            </button>

            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <img
                src={selectedFlavor.image}
                alt={selectedFlavor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Premium Flavor</span>
              <h3 className="text-4xl md:text-5xl font-dancing text-brand-brown mt-4 mb-6">{selectedFlavor.name}</h3>
              <p className="text-brand-brown/70 text-lg leading-relaxed mb-8">
                {selectedFlavor.details}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-brown/40 mb-3">Key Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFlavor.ingredients.map((ing, i) => (
                    <span key={i} className="px-3 py-1 bg-brand-brown/5 rounded-full text-xs font-medium text-brand-brown/70 border border-brand-brown/10">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-brand-brown/10">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-brand-brown/40 mb-1">Price</span>
                  <span className="text-2xl font-bold text-brand-brown">{selectedFlavor.price}</span>
                </div>
                <a
                  href={`https://wa.me/918888888888?text=${encodeURIComponent(`Hello Daylily! I'd like to order the ${selectedFlavor.name} flavor.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                >
                  <FaWhatsapp size={16} />
                  Order on WhatsApp
                </a>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-tighter text-brand-brown/30 font-bold">
                {selectedFlavor.nutrition}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
