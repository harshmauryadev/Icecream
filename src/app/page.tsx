import Hero from "@/components/Hero";
import Flavors from "@/components/Flavors";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Flavors />
      <Testimonials />
      <Gallery />
    </main>
  );
}
