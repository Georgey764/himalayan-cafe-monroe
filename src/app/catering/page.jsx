import MenuSection from "./(helpers)/MenuSection";
import ServingGuide from "./(helpers)/ServingGuide";
import { CATERING_MENU } from "@/data/cateringMenuData";

export default function CateringPage() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-border-gold">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 animate-slow-zoom" />
        <div className="relative text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tighter">
            Catering <span className="text-white/90">Menu</span>
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-[0.2em] opacity-80">
            Authentic Flavors • Handcrafted Excellence
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {CATERING_MENU.sections.map((section, idx) => (
            <MenuSection key={idx} section={section} />
          ))}
        </div>
      </div>

      <ServingGuide
        guide={CATERING_MENU.serving_guide}
        disclaimer={CATERING_MENU.disclaimer}
      />

      <footer className="py-12 border-t border-border-gold text-center opacity-60 text-sm">
        <p>© 2026 Your Restaurant Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
