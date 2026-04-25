import { motion } from 'framer-motion';

export default function SkillGroup({ group, delay = 0 }) {
  const Icon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl border border-line bg-panel/70 p-6 shadow-xl shadow-black/10"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
          <Icon size={21} />
        </div>
        <h3 className="text-xl font-bold">{group.title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-slate-950/50 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-primary/40 hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
