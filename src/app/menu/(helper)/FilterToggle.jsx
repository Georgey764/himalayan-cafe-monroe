export default function FilterToggle({ label, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all ${
        active
          ? "bg-accent border-accent text-primary shadow-lg shadow-accent/20"
          : "border-white/10 text-white/40 hover:border-white/20 hover:text-white"
      }`}
    >
      {icon} <span>{label}</span>
    </button>
  );
}
