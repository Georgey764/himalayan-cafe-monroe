import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Story | Himalayan Cafe Monroe",
  description:
    "Authentic Indian and Nepali cuisine on Desiard Street. Learn about our journey from Nepal to Monroe, Louisiana.",
};

export default function AboutPage() {
  return (
    <main className="bg-primary min-h-screen">
      {/* Hero Section - Increased height and centered typography */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden border-b border-accent/10">
        <Image
          src="/images/background.avif"
          alt="Himalayan Cafe Atmosphere"
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        {/* Decorative Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-primary"></div>

        <div className="relative z-10 text-center px-4 space-y-4">
          <span className="font-sans text-accent/60 uppercase tracking-[0.6em] text-[10px] block mb-2">
            Since 2014
          </span>
          <h1 className="font-heading text-accent text-6xl md:text-8xl lg:text-9xl leading-none">
            Our Story
          </h1>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="h-px w-12 bg-accent/30"></div>
            <p className="font-serif italic text-accent/80 text-xl">
              Heritage • Flavor • Monroe
            </p>
            <div className="h-px w-12 bg-accent/30"></div>
          </div>
        </div>
      </section>

      {/* The Journey Section - Layered Grid */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text Content - Spans 7 cols */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl md:text-6xl text-accent leading-[1.1]">
                From the Peaks of Nepal <br />
                <span className="font-serif italic text-accent/60 text-3xl md:text-5xl">
                  to the Heart of Louisiana
                </span>
              </h2>
              <div className="h-1 w-20 bg-accent/20"></div>
            </div>

            <div className="font-serif text-xl text-white md:text- text-accent/90 leading-relaxed space-y-8">
              <p className="first-letter:text-7xl first-letter:font-heading first-letter:text-accent first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                Founded in 2014, Himalayan Cafe began with a mission to bring
                the soul-warming flavors of Kathmandu to{" "}
                <strong>Monroe, Louisiana</strong>. Located on{" "}
                <strong>Desiard Street</strong>, just steps away from the
                <strong> University of Louisiana Monroe (ULM)</strong>, our cafe
                has grown into a sanctuary for students, faculty, and families
                seeking authentic <strong>Indian and Nepali cuisine</strong> in
                Ouachita Parish.
              </p>

              <p>
                Our kitchen serves as a bridge between the Himalayas and the
                Bayou. Whether you are visiting for our famous{" "}
                <strong>Indian lunch buffet</strong>
                before a Warhawks game or ordering{" "}
                <strong>authentic Nepali takeout</strong>
                for a late-night study session, we guarantee quality. Every
                traditional <strong>Momo</strong> is hand-folded, and our
                signature
                <strong> Chicken Tikka Masala</strong> is slow-simmered with
                spices we grind in-house daily.
              </p>
            </div>
          </div>

          {/* Image Side - Spans 5 cols - Floating Effect */}
          <div className="lg:col-span-5 pt-12 lg:pt-24 relative">
            {/* Decorative Background Box */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 border border-accent/10 -translate-y-8 translate-x-8"></div>

            <div className="relative aspect-[3/4] shadow-2xl group overflow-hidden border border-accent/20">
              <Image
                src="/images/interior.webp"
                alt="Authentic Himalayan Cooking"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Banner Section - Refined for elegance */}
      <section className="py-32 bg-white relative overflow-hidden border-y border-accent/10">
        {/* Subtle pattern background - lowered opacity for cleaner look */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        {/* Decorative Gold Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/50 to-transparent"></div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10 space-y-10">
          <div className="flex flex-col items-center gap-3">
            <span className="font-sans text-primary/40 uppercase tracking-[0.5em] text-[9px] font-bold">
              Our Philosophy
            </span>
            <div className="h-px w-8 bg-accent/40"></div>
          </div>

          <blockquote className="space-y-8">
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary italic leading-[1.2] max-w-4xl mx-auto">
              &quot;We treat every guest like they&apos;re entering our own home
              in Kathmandu.&quot;
            </h3>
            <cite className="font-serif text-primary/50 text-lg md:text-xl block not-italic">
              — The Himalayan Cafe Family
            </cite>
          </blockquote>

          <div className="pt-6">
            <p className="font-sans text-primary/60 uppercase tracking-[0.2em] text-[10px] leading-loose max-w-md mx-auto">
              A proud culinary landmark on{" "}
              <span className="text-primary font-bold">Desiard Street</span>,
              serving the{" "}
              <span className="text-primary font-bold">ULM community</span> and
              the heart of{" "}
              <span className="text-primary font-bold">Monroe, Louisiana</span>.
            </p>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-accent/50 to-transparent"></div>
      </section>

      {/* Call to Action - Button Redesign */}
      <section className="py-32 text-center max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-accent text-4xl md:text-6xl mb-12">
          Taste the Tradition
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="/#buffet"
            className="group relative w-full sm:w-auto px-12 py-5 border border-accent text-accent font-sans uppercase tracking-[0.2em] text-xs overflow-hidden transition-colors"
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-500">
              Buffet Info
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </Link>

          <Link
            href="/#location"
            className="w-full sm:w-auto px-12 py-5 bg-accent text-primary font-sans uppercase tracking-[0.2em] text-xs hover:bg-transparent hover:text-accent border border-accent transition-all duration-500 shadow-lg"
          >
            Visit Us
          </Link>
        </div>
      </section>
    </main>
  );
}
