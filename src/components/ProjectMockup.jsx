import { CheckCircle2, GitBranch, Workflow } from 'lucide-react';

export default function ProjectMockup() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-line bg-slate-950 p-4 sm:p-5">
      <div className="flex items-center gap-2 border-b border-line pb-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-primary" />
        <span className="ml-3 rounded-full border border-line px-3 py-1 text-xs text-muted">agentic-policy-ai/rag/v1</span>
      </div>

      <div className="grid gap-4 pt-5 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          {['Document Ingestion', 'Vector Retrieval', 'Policy Reasoning', 'Human Review'].map((step, index) => (
            <div
              key={step}
              className={`rounded-2xl border p-4 ${
                index === 2 ? 'border-primary/50 bg-primary/10 text-ink' : 'border-line bg-white/[0.03] text-muted'
              }`}
            >
              <div className="flex items-center gap-3">
                <Workflow size={17} className={index === 2 ? 'text-primary' : 'text-slate-500'} />
                <span className="text-sm font-bold">{step}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-panel/70 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Agent Trace</p>
              <h4 className="mt-2 text-lg font-bold">Policy decision pipeline</h4>
            </div>
            <GitBranch className="text-secondary" size={22} />
          </div>
          <div className="mt-5 space-y-3">
            {[
              ['POST', '/agents/plan', '118ms'],
              ['GET', '/rag/context', '74ms'],
              ['POST', '/eval/ragas', '90%+'],
            ].map(([method, route, time]) => (
              <div key={route} className="grid grid-cols-[56px_1fr_50px] items-center gap-3 rounded-xl bg-slate-950/70 p-3">
                <span className="text-xs font-black text-primary">{method}</span>
                <span className="truncate text-sm text-slate-300">{route}</span>
                <span className="text-right text-xs text-secondary">{time}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <CheckCircle2 size={17} />
              Faithfulness target passed
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Retrieved policy context is scored before responses move into insurance workflow automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
