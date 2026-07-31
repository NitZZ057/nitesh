import { CheckCircle2, GitCompare, Workflow } from 'lucide-react';

const riskStyles = {
  high: 'border-red-400/30 bg-red-400/10 text-red-300',
  medium: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  low: 'border-primary/30 bg-primary/10 text-primary',
};

export default function ContractMockup() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-line bg-slate-950 p-4 sm:p-5">
      <div className="flex items-center gap-2 border-b border-line pb-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-primary" />
        <span className="ml-3 rounded-full border border-line px-3 py-1 text-xs text-muted">contract-intelligence/compare/v1</span>
      </div>

      <div className="grid gap-4 pt-5 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          {['PDF Ingestion', 'Clause Embedding', 'Change Detection', 'Ragas Evaluation'].map((step, index) => (
            <div
              key={step}
              className={`rounded-2xl border p-4 ${
                index === 2 ? 'border-secondary/50 bg-secondary/10 text-ink' : 'border-line bg-white/[0.03] text-muted'
              }`}
            >
              <div className="flex items-center gap-3">
                <Workflow size={17} className={index === 2 ? 'text-secondary' : 'text-slate-500'} />
                <span className="text-sm font-bold">{step}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-panel/70 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Version Diff</p>
              <h4 className="mt-2 text-lg font-bold">Service agreement v1 to v2</h4>
            </div>
            <GitCompare className="text-primary" size={22} />
          </div>
          <div className="mt-5 space-y-3">
            {[
              ['MOD', 'Payment Terms', 'high'],
              ['ADD', 'Liability Cap', 'medium'],
              ['DEL', 'Auto-Renewal', 'low'],
            ].map(([change, clause, risk]) => (
              <div key={clause} className="grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-xl bg-slate-950/70 p-3">
                <span className="text-xs font-black text-secondary">{change}</span>
                <span className="truncate text-sm text-slate-300">{clause}</span>
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase ${riskStyles[risk]}`}>{risk}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <CheckCircle2 size={17} />
              Faithfulness 0.91
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Every clause answer is scored against the retrieved contract text before it reaches a reviewer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
