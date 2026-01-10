import React from "react";
import { Clock, ChevronRight } from "lucide-react";
import { useLiveStatus } from "./hooks/useLiveStatus";

const LocationSection = ({ fontTitle, fontSub, fontBody }) => {
  const liveStatus = useLiveStatus();
  return (
    <section id="location" className="py-32 px-6 bg-[#fdf5e6] text-[#121212]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl mb-12" style={fontTitle}>
            Plan Your <br />
            <span className="text-[#d4af37] italic" style={fontSub}>
              Visit
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-[#d4af37]">
                Location
              </h4>
              <p className="text-lg font-semibold">
                Monroe, Louisiana
                <br />
                <span className="text-sm opacity-60">
                  123 Everest View Blvd
                </span>
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-[#d4af37]">
                Contact
              </h4>
              <p className="text-lg font-bold">+1 (318) 555-0199</p>
            </div>
          </div>
        </div>
        <div className="bg-[#121212] text-white p-10 md:p-16 shadow-2xl">
          <h3 className="text-3xl mb-12 flex items-center" style={fontTitle}>
            <Clock className="mr-4 text-[#d4af37]" /> Service Hours
          </h3>
          <div className="space-y-8">
            <div className="flex justify-between border-b border-white/10 pb-6">
              <span className="font-bold uppercase text-xs">Wed — Mon</span>
              <div className="text-right">
                <p className="text-[#d4af37] italic" style={fontSub}>
                  Lunch: 11 AM — 2 PM
                </p>
                <p className="opacity-70 italic" style={fontSub}>
                  Dinner: 5 PM — 9 PM*
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center border border-white/10 p-6">
            <p className="text-2xl font-bold tracking-widest text-[#d4af37] uppercase">
              {liveStatus.status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
