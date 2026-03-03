import { Plus, Minus, Utensils } from "lucide-react";

export default function MenuListing({ cart, category, subGroups, updateQty }) {
  const getItemQty = (id) => cart.find((i) => i.id === id)?.qty || 0;

  return (
    <div className="mb-24">
      <div className="flex items-center space-x-6 mb-12">
        <h2 className="font-heading text-4xl uppercase tracking-tighter text-accent">
          {category}
        </h2>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      {Object.entries(subGroups).map(([subTitle, items]) => (
        <div key={subTitle} className="mb-16 last:mb-0">
          <div className="flex items-center gap-3 mb-8">
            <Utensils size={14} className="text-accent/30" />
            <h3 className="font-serif italic text-xl text-white/60">
              {subTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {items.map((item) => (
              <article
                key={item.id}
                className="group flex gap-5 p-4 bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all rounded-2xl hover:bg-white/[0.04]"
              >
                <div className="relative w-28 h-28 overflow-hidden rounded-xl bg-midnight/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-white uppercase text-sm tracking-wide">
                        {item.name}
                      </h4>
                      <span className="text-accent font-serif italic">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-serif italic text-sm text-white/40 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex justify-end mt-4">
                    {getItemQty(item.id) === 0 ? (
                      <button
                        onClick={() => updateQty(item, 1)}
                        className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-primary transition-all"
                      >
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center bg-white/5 rounded-full border border-accent/50 overflow-hidden">
                        <button
                          onClick={() => updateQty(item, -1)}
                          className="px-3 py-2 text-accent hover:bg-accent/10 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white">
                          {getItemQty(item.id)}
                        </span>
                        <button
                          onClick={() => updateQty(item, 1)}
                          className="px-3 py-2 text-accent hover:bg-accent/10 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
