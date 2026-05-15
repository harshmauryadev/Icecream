import Flavors from "@/components/Flavors";
import PageHero from "@/components/PageHero";

export default function FlavorsPage() {
  return (
    <main className="flex-1">
      <PageHero 
        title="Our Flavors" 
        subtitle="Handcrafted Perfection"
        backgroundImage="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2070&auto=format&fit=crop"
      />
      <Flavors />
    </main>
  );
}
