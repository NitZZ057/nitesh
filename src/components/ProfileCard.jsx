import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Server, ShieldCheck, Sparkles } from 'lucide-react';

const signals = [
  { label: 'RAG faithfulness', value: '90%+', icon: ShieldCheck },
  { label: 'APIs shipped', value: '30+', icon: Server },
  { label: 'AI focus', value: 'RAG', icon: Database },
];

export default function ProfileCard() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent blur-2xl" />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass relative overflow-hidden rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/40"
      >
        <div className="rounded-2xl border border-line bg-slate-950/80 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-muted">AI Engineer</p>
              <h2 className="mt-2 text-2xl font-black">Nitesh Jadhav</h2>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-slate-950">
              <Brain size={22} />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950">
            <div className="relative min-h-[410px] p-5">
              <div className="absolute inset-x-8 top-12 h-44 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute bottom-16 right-6 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative mx-auto aspect-[5/5] max-w-[285px] overflow-hidden rounded-[400px] border border-transparent 
bg-[linear-gradient(#020617,#020617)_padding-box,_linear-gradient(135deg,#22c55e,#38bdf8)_border-box] bg-slate-950 shadow-2xl shadow-black/40">
                {hasPhoto ? (
                  <img
                    src={`${baseUrl}Nitesh.png`}
                    alt="Nitesh Jadhav"
                    onError={() => setHasPhoto(false)}
                    className="h-full w-full object-cover rounded-[200px]"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 px-8 text-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-4xl font-black text-primary shadow-glow">
                      NJ
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">AI Engineer</p>
                    <p className="mt-3 text-sm leading-6 text-muted">Add your photo at public/Nitesh.png</p>
                  </div>
                )}
              </div>

              <div className="relative -mt-12 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Sparkles size={15} className="text-primary" />
                  Agentic AI and RAG systems
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <p className="text-muted">Experience</p>
                    <p className="mt-1 font-black text-ink">2+ years</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <p className="text-muted">Focus</p>
                    <p className="mt-1 font-black text-ink">LLM systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {signals.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-line bg-white/[0.03] p-3">
                  <Icon size={16} className="text-primary" />
                  <p className="mt-3 text-lg font-black">{item.value}</p>
                  <p className="mt-1 text-xs text-muted">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
