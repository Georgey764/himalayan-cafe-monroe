export default function MenuSection({ section }) {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-serif uppercase tracking-widest whitespace-nowrap">
          {section.category}
        </h2>
        <div className="h-[1px] w-full bg-border-gold group-hover:bg-accent transition-colors" />
      </div>

      <div className="space-y-6">
        {section.items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 hover:bg-white/5 transition-colors px-2 rounded"
          >
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white/90">{item.name}</h3>
              {section.notes && (
                <p className="text-xs italic opacity-50 mt-1">
                  Note: {section.notes[0]}
                </p>
              )}
            </div>

            <div className="flex gap-4 text-center">
              {item.prices ? (
                Object.entries(item.prices).map(([size, price]) => (
                  <div key={size} className="min-w-[60px]">
                    <span className="block text-[10px] uppercase tracking-tighter opacity-50 mb-1">
                      {size}
                    </span>
                    <span className="text-accent font-bold">${price}</span>
                  </div>
                ))
              ) : (
                <div className="px-4 py-1 border border-border-gold rounded-full text-xs uppercase tracking-widest bg-primary/50 text-accent">
                  {item.price_info}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
