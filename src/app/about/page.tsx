import About from "@/components/About";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero 
        title="Our Story" 
        subtitle="Crafting Sweet Memories"
        backgroundImage="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2070&auto=format&fit=crop"
      />
      <About />
      <Testimonials />
    </main>
  );
}
