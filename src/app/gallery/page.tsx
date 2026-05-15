import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <PageHero 
        title="Sweet Gallery" 
        subtitle="Captured Moments"
        backgroundImage="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=2070&auto=format&fit=crop"
      />
      <Gallery />
    </main>
  );
}
