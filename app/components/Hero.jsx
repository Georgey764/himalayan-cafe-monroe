import { ArrowRight, Sun, Moon, Circle, MapPin } from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const Hero = () => {
  const liveStatus = useLiveStatus();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#500913] selection:bg-[#d4af37] selection:text-[#500913]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
          alt="Authentic Spices"
          className="w-full h-full object-cover scale-105 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#500913] via-[#500913]/90 to-transparent"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
        {/* Left Column: Branding & Primary Status */}
        <div className="lg:col-span-7">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex items-center justify-center">
              <Circle
                size={8}
                fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
                className={liveStatus.isOpen ? "animate-pulse" : ""}
              />
              {liveStatus.isOpen && (
                <Circle
                  size={18}
                  className="absolute animate-ping opacity-30 text-green-500"
                />
              )}
            </div>
            <span className="font-raleway text-[10px] font-black tracking-[0.5em] uppercase text-[#d4af37]">
              {liveStatus.status}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-marcellus text-white leading-[0.85] mb-8">
            Himalayan <span className="text-[#d4af37] block">Kitchen</span>
          </h1>

          <div className="space-y-6 mb-12">
            <h2 className="text-2xl md:text-4xl font-marcellus text-white/90">
              {liveStatus.service}
            </h2>
            <p className="text-lg md:text-xl font-ebgaramond italic text-[#d4af37] border-l-2 border-[#d4af37]/30 pl-6">
              {liveStatus.nextEvent}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="tel:+13186003439"
              className="bg-[#d4af37] text-[#500913] px-10 py-5 font-raleway text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-300 shadow-xl"
            >
              Order: 318.600.3439
            </a>
            <a
              href="#location"
              className="group flex items-center space-x-4 px-2 text-white font-raleway text-[10px] font-black uppercase tracking-[0.3em] border-b border-white/10 hover:border-[#d4af37] transition-all"
            >
              <MapPin size={14} className="text-[#d4af37]" />
              <span>Monroe, LA</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform text-[#d4af37]"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Complete Schedule Data */}
        <div className="lg:col-span-5">
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-8 md:p-10 mb-8 relative">
            {/* Accent Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#d4af37]/30"></div>

            <h3 className="text-white font-marcellus text-lg mb-10 tracking-[0.2em] uppercase flex items-center">
              <span className="w-8 h-[1px] bg-[#d4af37] mr-4"></span>
              Service Hours
            </h3>

            <div className="space-y-12">
              {/* Lunch Data Block */}
              <div
                className={`relative transition-all duration-700 ${
                  liveStatus.service === "LUNCH BUFFET"
                    ? "scale-105 opacity-100"
                    : "opacity-40 scale-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <Sun size={18} className="text-[#d4af37]" />
                    <h4 className="font-marcellus text-white text-xl uppercase tracking-widest">
                      Lunch
                    </h4>
                  </div>
                  <span className="text-[9px] font-raleway font-black text-[#d4af37] uppercase tracking-widest">
                    {liveStatus.service === "LUNCH BUFFET" ? "Active" : ""}
                  </span>
                </div>
                <div className="flex items-baseline space-x-2 font-ebgaramond italic text-3xl text-white pl-9">
                  <span>11:00</span>
                  <span className="text-xs font-raleway not-italic uppercase opacity-50 tracking-tighter">
                    am
                  </span>
                  <span className="mx-2 text-white/20">—</span>
                  <span>2:00</span>
                  <span className="text-xs font-raleway not-italic uppercase opacity-50 tracking-tighter">
                    pm
                  </span>
                </div>
                <p className="pl-9 mt-2 text-[10px] font-raleway uppercase tracking-[0.2em] text-white/40 font-bold">
                  Authentic Buffet Service
                </p>
              </div>

              {/* Dinner Data Block */}
              <div
                className={`relative transition-all duration-700 ${
                  liveStatus.service === "DINE IN"
                    ? "scale-105 opacity-100"
                    : "opacity-40 scale-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <Moon size={18} className="text-[#d4af37]" />
                    <h4 className="font-marcellus text-white text-xl uppercase tracking-widest">
                      Dine In
                    </h4>
                  </div>
                  <span className="text-[9px] font-raleway font-black text-[#d4af37] uppercase tracking-widest">
                    {liveStatus.service === "DINE IN" ? "Active" : ""}
                  </span>
                </div>
                <div className="flex items-baseline space-x-2 font-ebgaramond italic text-3xl text-white pl-9">
                  <span>5:00</span>
                  <span className="text-xs font-raleway not-italic uppercase opacity-50 tracking-tighter">
                    pm
                  </span>
                  <span className="mx-2 text-white/20">—</span>
                  <span>
                    {new Date().getDay() === 5 || new Date().getDay() === 6
                      ? "10:00"
                      : "9:00"}
                  </span>
                  <span className="text-xs font-raleway not-italic uppercase opacity-50 tracking-tighter">
                    pm
                  </span>
                </div>
                <p className="pl-9 mt-2 text-[10px] font-raleway uppercase tracking-[0.2em] text-white/40 font-bold">
                  Chef&apos;s Special Menu
                </p>
              </div>
            </div>

            {/* Subtle Hook Data Footer */}
            <div className="mt-12 pt-6 border-t border-white/5 flex flex-col items-center">
              <p className="text-[9px] font-raleway uppercase tracking-[0.4em] text-white/30 mb-2">
                Current Protocol
              </p>
              <div className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"></span>
                <span className="text-[10px] font-black text-white tracking-widest uppercase">
                  {liveStatus.status}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
