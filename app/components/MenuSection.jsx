import React from "react";

const MenuSection = () => {
  const menuItems = [
    {
      category: "Indian Classics",
      items: [
        {
          name: "Butter Chicken",
          price: "18",
          desc: "Creamy tomato gravy with tender clay-oven chicken.",
        },
        {
          name: "Paneer Tikka Masala",
          price: "16",
          desc: "Grilled cottage cheese in a vibrant spiced sauce.",
        },
        {
          name: "Garlic Naan",
          price: "4",
          desc: "Freshly baked in the tandoor with garlic infusion.",
        },
      ],
    },
    {
      category: "Nepali Soul Food",
      items: [
        {
          name: "Steamed Momos",
          price: "14",
          desc: "Hand-folded dumplings with mountain spices.",
        },
        {
          name: "Thakali Thali",
          price: "32",
          desc: "Traditional platter of lentils, pickles, and rice.",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-32 px-6 bg-[#500913] text-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-cinzel leading-tight">
            Essential <span className="text-[#d4af37]">Plates</span>
          </h2>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <div className="w-12 h-[1px] bg-[#d4af37]/40"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-raleway text-[#d4af37]">
              Curated Selection
            </span>
            <div className="w-12 h-[1px] bg-[#d4af37]/40"></div>
          </div>
        </div>

        <div className="space-y-24">
          {menuItems.map((section, idx) => (
            <div key={idx} className="relative">
              {/* Category Heading */}
              <h3 className="text-2xl tracking-[0.4em] uppercase mb-12 font-cinzel text-[#d4af37] border-b border-[#d4af37]/20 pb-4 inline-block">
                {section.category}
              </h3>

              <div className="grid gap-y-10">
                {section.items.map((item, i) => (
                  <div key={i} className="group flex flex-col space-y-1">
                    <div className="flex justify-between items-baseline">
                      {/* Dish Name */}
                      <h4 className="text-xl md:text-2xl font-cinzel group-hover:text-[#d4af37] transition-colors duration-300 pr-4 bg-[#500913] z-10">
                        {item.name}
                      </h4>

                      {/* Decorative Leader Line */}
                      <div className="flex-1 border-b border-dotted border-white/20 mb-1.5 mx-2"></div>

                      {/* Price */}
                      <span className="text-xl font-cinzel text-[#d4af37] pl-4 bg-[#500913] z-10">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base opacity-60 font-ebgaramond italic max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="font-ebgaramond italic opacity-50 text-sm">
            Please inform your server of any dietary restrictions or allergies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
