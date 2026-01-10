import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Side - Spans 5 columns */}
          <div className="lg:col-span-5 relative group">
            <div className="relative">
              {/* Decorative Frame Accents (Using Accent Muted) */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-accent-muted"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-accent-muted"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] shadow-2xl border border-accent/10">
                <Image
                  src="/images/interior.webp"
                  alt="Authentic interior of Himalayan Cafe in Monroe, LA"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 left-8 bg-primary border border-accent-muted p-5 shadow-xl hidden md:block">
                <p className="font-heading text-accent text-xl italic leading-none text-center">
                  Since
                </p>
                <p className="font-sans text-accent/60 text-[10px] uppercase tracking-[0.3em] mt-2 text-center">
                  Monroe • 2014
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Side - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent">
                <span className="h-px w-12 bg-accent-muted"></span>
                <span className="font-sans tracking-[0.5em] uppercase text-xs">
                  Our Heritage
                </span>
              </div>

              <h2 className="font-heading text-5xl md:text-7xl text-accent leading-[1.1]">
                A Taste of the <br />
                <span className="font-serif italic opacity-90">
                  High Himalayas
                </span>
              </h2>
            </div>

            <div className="font-serif text-lg md:text-xl text-white leading-relaxed space-y-8 max-w-2xl">
              <p className="first-letter:text-7xl first-letter:font-heading first-letter:text-accent first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                Located on{" "}
                <span className="text-accent border-b border-accent-muted">
                  Desiard Street
                </span>
                , Himalayan Cafe is more than a restaurant—it is a cultural
                bridge. We bring the aromatic warmth of Nepal and the bold
                traditions of India to the heart of{" "}
                <strong>Monroe, Louisiana</strong>.
              </p>
              <p className="font-sans text-base tracking-wide opacity-80 italic">
                From our legendary lunch buffet favored by ULM students to our
                hand-folded Chicken Momos, every dish is a tribute to the spices
                that define our story.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-6 font-sans tracking-[0.4em] uppercase text-xs text-accent transition-all"
              >
                <span className="py-2 border-b border-accent/20 group-hover:border-accent group-hover:tracking-[0.5em] transition-all duration-500">
                  Explore Our Story
                </span>
                <span className="text-xl transition-transform group-hover:translate-x-3">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
