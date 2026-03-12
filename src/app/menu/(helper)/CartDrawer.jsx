"use client";

import React, { useState } from "react"; // Added useState
import {
  Plus,
  Minus,
  X,
  Phone,
  Users,
  Globe,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  subtotal,
  updateQty,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State

  if (!isOpen) return null;

  const tax = subtotal * 0.1044;
  const ONLINE_ORDER_URL =
    "https://order.online/store/-1144213/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnGbJPa6QZnm3-nvpnpygb-3W5pIQo_YGlsUoK9LErFZeiAKfBDGaBbnd66odsgHnUfQkmnqDSSJ7RFIEuMyrfhLGaVTlA%3D%3D";

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Drawer Overlay */}
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

        {/* Cart Items */}
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
            <div className="text-center py-20 opacity-20 italic font-serif text-white">
              Your cart is empty
            </div>
          )}
        </div>

        {/* Checkout Section */}
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

          {/* UPDATED: TRIGGER MODAL */}
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={cart.length === 0}
            className={`w-full font-black uppercase tracking-[0.2em] py-5 rounded-full flex items-center justify-center gap-3 text-xs shadow-xl transition-all ${
              cart.length === 0
                ? "bg-white/5 text-white/20 cursor-not-allowed"
                : "bg-accent text-primary hover:bg-white cursor-pointer"
            }`}
          >
            <UtensilsCrossed size={14} />
            Place Order
          </button>
        </div>
      </aside>

      {/* --- ORDER OPTION MODAL --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-primary border border-accent/20 max-w-sm w-full p-8 rounded-3xl shadow-2xl space-y-8 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-accent/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-heading text-white">Check Out</h3>
              <p className="text-white/40 font-serif italic text-xs">
                How would you like to finish your order?
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={ONLINE_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-accent text-primary p-5 rounded-2xl hover:bg-white transition-all group"
              >
                <div className="flex items-center gap-4">
                  <Globe size={20} />
                  <div className="text-left">
                    <span className="block font-black text-[10px] uppercase tracking-widest">
                      Online
                    </span>
                    <span className="text-[10px] opacity-70">
                      Pay & Order Now
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="tel:+13186003439"
                className="flex items-center justify-between border border-white/10 text-white p-5 rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <Phone size={20} />
                  <div className="text-left">
                    <span className="block font-black text-[10px] uppercase tracking-widest">
                      Call In
                    </span>
                    <span className="text-[10px] opacity-70">
                      Order by Phone
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
