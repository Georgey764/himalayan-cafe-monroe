import React from "react";
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  ExternalLink,
  Circle,
} from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const LocationSection = () => {
  const liveStatus = useLiveStatus();

  return (
    <section
      id="location"
      className="py-24 px-6 bg-white text-[#500913] relative overflow-hidden"
    >
      {/* Subtle Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Contact & Status (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-[#d4af37]"></div>
                <span className="uppercase tracking-[0.3em] text-[10px] font-black text-[#d4af37]">
                  Sanctuary
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-marcellus leading-tight">
                Plan Your <br />
                <span className="text-[#d4af37] italic font-ebgaramond text-6xl md:text-7xl">
                  Visit
                </span>
              </h2>
            </div>

            <div className="space-y-8 pt-4">
              {/* Address Section */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Himalayan+Kitchen+Monroe+LA&query_place_id=ChIJA6EA26lHLoYRePeUecxUD1s"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <h4 className="font-black uppercase tracking-widest text-[9px] text-[#d4af37] mb-3">
                  Address
                </h4>
                <div className="flex items-center justify-between border-b border-[#500913]/10 pb-4">
                  <p className="text-xl md:text-2xl font-marcellus group-hover:text-[#d4af37] transition-colors leading-snug">
                    3600 Desiard St. <br />
                    Monroe, LA 71203
                  </p>
                  <ExternalLink
                    size={18}
                    className="text-[#d4af37] opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                  />
                </div>
              </a>

              {/* Action Grid: Phone & Live Status Pill */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="font-black uppercase tracking-widest text-[9px] text-[#d4af37]">
                    Direct Line
                  </h4>
                  <a
                    href="tel:+13186003439"
                    className="text-2xl font-ebgaramond italic hover:text-[#d4af37] transition-colors"
                  >
                    318.600.3439
                  </a>
                </div>

                <div className="space-y-2">
                  <h4 className="font-black uppercase tracking-widest text-[9px] text-[#d4af37]">
                    Current Protocol
                  </h4>
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#500913]/5 border border-[#500913]/10 rounded-sm">
                    <Circle
                      size={6}
                      fill={liveStatus.isOpen ? "#22c55e" : "#ef4444"}
                      className={liveStatus.isOpen ? "animate-pulse" : ""}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#500913]">
                      {liveStatus.isOpen
                        ? "Accepting Guests"
                        : "Kitchen Closed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Map Container (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video lg:aspect-[16/10] bg-[#500913] shadow-[0_20px_50px_rgba(80,9,19,0.2)] overflow-hidden rounded-sm group">
              {/* Texture Layer */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10"></div>

              {/* Actual Map Embed */}
              <iframe
                title="Himalayan Kitchen Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.0!2d-92.077!3d32.523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862f47a9db01a103%3A0x5b0f54cc7994f778!2sHimalayan%20Kitchen!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.1] opacity-60 group-hover:opacity-100 transition-all duration-700 z-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map CTA Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#500913] via-[#500913]/90 to-transparent z-30">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37] mb-1">
                      Navigation
                    </p>
                    <p className="text-xs font-raleway text-white/70 uppercase tracking-widest">
                      {liveStatus.nextEvent}
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Himalayan+Kitchen+Monroe+LA&destination_place_id=ChIJA6EA26lHLoYRePeUecxUD1s"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 bg-[#d4af37] text-[#500913] px-6 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl"
                  >
                    <span>Get Directions</span>
                    <Navigation size={12} fill="currentColor" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
