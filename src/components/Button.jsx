const variants = {
  primary:
    'border-primary/50 bg-primary text-slate-950 hover:-translate-y-0.5 hover:bg-emerald-300 button-glow',
  secondary:
    'border-secondary/40 bg-secondary/10 text-secondary hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary/15 hover:shadow-blueglow',
  ghost:
    'border-line bg-white/5 text-ink hover:-translate-y-0.5 hover:border-slate-500 hover:bg-white/10',
};

export default function Button({ href, children, variant = 'primary' }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border px-5 text-sm font-bold transition duration-300 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
