export default function Badge({ icon: Icon, children }) {
  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-2xl border border-line bg-white/[0.04] px-3.5 py-2 text-sm font-semibold text-slate-200 shadow-lg shadow-black/10">
      {Icon ? <Icon size={16} className="text-primary" /> : null}
      {children}
    </span>
  );
}
