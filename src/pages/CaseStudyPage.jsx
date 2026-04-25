import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import ProjectMockup from '../components/ProjectMockup.jsx';

const architectureFlow = [
  {
    step: 'User',
    copy: 'Insurance user asks a policy question or submits a document-driven workflow request.',
  },
  {
    step: 'API',
    copy: 'FastAPI receives the request, validates inputs, and creates a stable boundary for AI inference.',
  },
  {
    step: 'Agent',
    copy: 'LangChain agents classify intent, plan the task, and decide when retrieval or reasoning is required.',
  },
  {
    step: 'Retriever',
    copy: 'Pinecone returns policy clauses, document chunks, and relevant context from embedded insurance documents.',
  },
  {
    step: 'LLM',
    copy: 'The model generates an answer constrained by retrieved context instead of relying on memory alone.',
  },
  {
    step: 'Evaluation',
    copy: 'Ragas checks faithfulness and answer quality before the response is treated as workflow-ready.',
  },
  {
    step: 'Output',
    copy: 'The system returns a grounded response with enough structure to support downstream policy workflows.',
  },
];

const caseComponents = [
  {
    title: 'Multi-Agent System',
    copy: 'Designed agents for planning, retrieval, reasoning, and response generation so policy analysis could be handled as a controlled workflow instead of one long prompt.',
  },
  {
    title: 'RAG Pipeline',
    copy: 'Built ingestion, chunking, embeddings, Pinecone indexing, and retrieval orchestration to ground answers in actual insurance policy documents.',
  },
  {
    title: 'Evaluation Layer',
    copy: 'Used Ragas to measure faithfulness and answer quality, reaching 90%+ faithfulness and creating a feedback loop for improving retrieval behavior.',
  },
];

const caseDecisions = [
  {
    title: 'Why RAG Over Fine-Tuning',
    copy: 'Insurance knowledge changes across documents and policies. RAG keeps answers grounded in current source material without retraining for every policy update.',
  },
  {
    title: 'Why FastAPI',
    copy: 'FastAPI gives the AI layer a clean production API boundary with validation, async-friendly endpoints, and straightforward integration with backend workflows.',
  },
  {
    title: 'Why Evaluation Layer',
    copy: 'LLM output needs measurement before trust. Ragas made faithfulness visible, testable, and improvable instead of relying on subjective review.',
  },
  {
    title: 'Why Agent-Based Design',
    copy: 'Policy analysis is multi-step work. Agents separate planning, retrieval, and reasoning so the system can handle complex requests with clearer control.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="fixed inset-0 -z-10 noise" />
      <div className="fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <Navbar />

      <main className="px-6 pb-24 pt-32 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <a href="/#featured" className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-primary">
              <ArrowLeft size={17} />
              Back to portfolio
            </a>
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
              <Badge icon={Rocket}>Multi-Agent AI Policy Assistant</Badge>
              <h1 className="mt-7 text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                Policy analysis, engineered for{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  trust and automation.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                Designed and built a multi-agent RAG system for insurance policy analysis using LangChain, FastAPI,
                Pinecone, document embeddings, and Ragas evaluation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['90%+ faithfulness', 'Reduced manual effort', 'Document-grounded answers', 'Production API boundary'].map((item) => (
                  <Badge key={item} icon={BadgeCheck}>
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
              <ProjectMockup />
            </motion.div>
          </div>
        </motion.section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="grid overflow-hidden rounded-2xl border border-line bg-panel/80 shadow-2xl shadow-black/30 lg:grid-cols-3">
            {[
              {
                label: 'Problem',
                icon: Target,
                copy:
                  'Insurance policy analysis depends on dense documents, exceptions, and workflow rules. Manual review was slow, difficult to scale, and risky when teams needed both speed and accuracy.',
              },
              {
                label: 'Solution',
                icon: Sparkles,
                copy:
                  'Architected a multi-agent system with LangChain, a FastAPI inference backend, and a Pinecone-backed RAG pipeline to retrieve policy context before generating answers.',
              },
              {
                label: 'Usage',
                icon: ShieldCheck,
                copy:
                  'Designed for document-grounded insurance workflows where responses must be traceable, evaluated, and stable enough to support operational decisions.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55 }}
                  className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r last:border-r-0"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={21} />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold">{item.label}</h2>
                  <p className="mt-4 leading-7 text-muted">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl rounded-2xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <GitBranch size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">System Architecture</p>
                  <h2 className="mt-1 text-2xl font-bold">User to evaluated output</h2>
                </div>
              </div>
              <p className="mt-5 leading-7 text-muted">
                The architecture keeps the model behind explicit retrieval, orchestration, and evaluation boundaries.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold text-slate-300">
                {architectureFlow.map((item, index) => (
                  <span key={item.step} className="inline-flex items-center gap-2">
                    <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5">{item.step}</span>
                    {index < architectureFlow.length - 1 ? <ArrowRight size={15} className="text-primary" /> : null}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {architectureFlow.map((item) => (
                <div key={item.step} className="grid gap-3 rounded-2xl border border-line bg-slate-950/30 p-4 sm:grid-cols-[110px_1fr]">
                  <p className="text-sm font-black text-primary">{item.step}</p>
                  <p className="text-sm leading-6 text-slate-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {caseComponents.map((component) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55 }}
                className="rounded-2xl border border-line bg-panel/75 p-6 shadow-xl shadow-black/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Layers3 size={21} />
                </div>
                <h2 className="mt-5 text-xl font-bold">{component.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{component.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Impact</p>
            <h2 className="mt-3 text-2xl font-bold">Measured quality, lower review load, production-ready boundaries.</h2>
            <div className="mt-6 grid gap-3">
              {[
                'Achieved 90%+ faithfulness using Ragas evaluation.',
                'Reduced manual policy review effort through document-grounded automation.',
                'Improved answer accuracy by forcing retrieval before generation.',
                'Designed the AI layer behind FastAPI contracts for production integration.',
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-300">
                  <BadgeCheck className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">Engineering Decisions</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {caseDecisions.map((decision) => (
                <div key={decision.title} className="rounded-2xl border border-line bg-slate-950/35 p-4">
                  <h3 className="font-bold text-ink">{decision.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{decision.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/20 via-secondary/10 to-panel p-8 shadow-glow sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Tech Stack</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {['FastAPI', 'LangChain', 'Pinecone', 'Ragas', 'Document Embeddings', 'LLMs', 'Python'].map((tech) => (
                  <span key={tech} className="rounded-full border border-line bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:nitzz057@gmail.com">
                Discuss This System <ExternalLink size={18} />
              </Button>
              <Button href="https://github.com/NitZZ057" variant="ghost">
                GitHub <Github size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
