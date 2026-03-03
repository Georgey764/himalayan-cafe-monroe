import { Plus, Minus, X, Phone, Users } from "lucide-react";
import Link from "next/link";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  subtotal,
  updateQty,
}) {
  if (!isOpen) return null;
  const tax = subtotal * 0.1044;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <aside className="relative w-full max-w-md bg-primary border-l border-white/10 p-8 flex flex-col shadow-2xl animate-in slide-in-from-right duration-500">
        <div className="flex justify-between items-center mb-12">
          <div className="space-y-1">
            <h2 className="font-heading text-4xl text-white uppercase tracking-tighter">
              Selection
            </h2>
            <p className="text-[10px] text-accent uppercase tracking-widest font-bold">
              Review your order
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar space-y-8">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center group"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">
                    {item.name}
                  </h4>
                  <p className="text-accent/60 font-serif italic text-sm">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center bg-white/5 rounded-full border border-white/10 p-1">
                  <button
                    onClick={() => updateQty(item, -1)}
                    className="p-1.5 text-white/40 hover:text-accent transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-xs font-bold w-6 text-center text-white">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item, 1)}
                    className="p-1.5 text-white/40 hover:text-accent transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-20 italic font-serif">
              Your cart is empty
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
          <Link
            href="/catering"
            className="flex items-center justify-center space-x-2 py-4 border border-accent/20 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:bg-accent/5 transition-all"
          >
            <Users size={14} />
            <span>Need Catering? View Menu</span>
          </Link>

          <div className="space-y-2">
            <div className="flex justify-between text-[10px] text-white/30 font-bold uppercase tracking-widest">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[32px] font-heading text-white">
              <span>Total</span>
              <span className="text-accent">
                ${(subtotal + tax).toFixed(2)}
              </span>
            </div>
          </div>

          <a
            href="tel:+13186003439"
            className="w-full bg-accent text-primary font-black uppercase tracking-[0.2em] py-5 rounded-full flex items-center justify-center gap-3 text-xs shadow-xl hover:bg-white transition-all"
          >
            <Phone size={14} />
            Call to Place Order
          </a>
        </div>
      </aside>
    </div>
  );
}
