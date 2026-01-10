import React from "react";

const MenuSection = ({ fontTitle, fontSub }) => {
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
    <section id="menu" className="py-32 px-6 bg-[#121212] text-white">
      <div className="max-w-[1000px] mx-auto">
        <h2
          className="text-5xl md:text-7xl mb-12 text-center"
          style={fontTitle}
        >
          Essential <span className="text-[#d4af37]">Plates</span>
        </h2>
        <div className="space-y-24">
          {menuItems.map((section, idx) => (
            <div key={idx}>
              <h3
                className="text-2xl tracking-[0.3em] uppercase mb-12"
                style={fontTitle}
              >
                {section.category}
              </h3>
              <div className="grid gap-y-12">
                {section.items.map((item, i) => (
                  <div key={i} className="group border-b border-white/5 pb-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4
                          className="text-xl md:text-2xl group-hover:text-[#d4af37] transition-all"
                          style={fontTitle}
                        >
                          {item.name}
                        </h4>
                        <p
                          className="text-sm opacity-50 italic"
                          style={fontSub}
                        >
                          {item.desc}
                        </p>
                      </div>
                      <span
                        className="text-xl text-[#d4af37]"
                        style={fontTitle}
                      >
                        ${item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
