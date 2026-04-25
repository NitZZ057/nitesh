import {
  ArrowRight,
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Section from './components/Section.jsx';
import Button from './components/Button.jsx';
import Badge from './components/Badge.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SkillGroup from './components/SkillGroup.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ProjectMockup from './components/ProjectMockup.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';

const projects = [
  {
    title: 'Multi-Agent AI Policy Assistant',
    problem:
      'Insurance teams needed faster policy interpretation without losing traceability across clauses, documents, and workflow rules.',
    built:
      'Engineered a FastAPI-based multi-agent system that plans user intent, retrieves policy context with Pinecone-backed RAG, and produces grounded responses evaluated with Ragas.',
    impact: [
      'Reached 90%+ faithfulness on RAG responses',
      'Reduced manual policy lookup effort by roughly 50%',
      'Connected AI outputs to real insurance workflow automation',
    ],
    tech: ['FastAPI', 'LangChain', 'Pinecone', 'Ragas', 'LLMs'],
  },
  {
    title: 'Production RAG Knowledge Pipeline',
    problem: 'Policy and ERP knowledge was fragmented across documents, making answers slow, inconsistent, and hard to validate.',
    built:
      'Built document ingestion, chunking, embeddings, vector search, retrieval orchestration, and evaluation loops for high-confidence AI responses.',
    impact: [
      'Improved answer grounding with measurable retrieval quality',
      'Created reusable ingestion flows for insurance documents',
      'Reduced hallucination risk through retrieval-first design',
    ],
    tech: ['LangChain', 'Pinecone', 'Embeddings', 'Ragas', 'FastAPI'],
  },
  {
    title: 'ERP & Insurance API Platform',
    problem: 'Insurance and ERP workflows required reliable APIs, optimized database access, and secure integrations under production constraints.',
    built:
      'Designed and shipped 30+ REST APIs across Laravel and MySQL systems, including authorization flows, ERP integration points, validation layers, and performance tuning.',
    impact: [
      'Optimized API and query latency by about 25%',
      'Improved reliability for policy and ERP workflows',
      'Strengthened backend contracts used by React frontends and internal systems',
    ],
    tech: ['Laravel', 'MySQL', 'Postman', 'Azure', 'REST APIs'],
  },
];

const thinking = [
  {
    icon: ShieldCheck,
    title: 'Reliable, Not Just Accurate',
    copy: 'AI systems should be dependable under workflow pressure, with clear failure paths and measurable quality.',
  },
  {
    icon: Database,
    title: 'RAG Over Hallucination',
    copy: 'I use grounded retrieval, source-aware context, and evaluation loops before trusting generated answers.',
  },
  {
    icon: ServerCog,
    title: 'LLMs As Components',
    copy: 'Models sit inside larger systems: APIs, data contracts, orchestration, observability, and backend safeguards.',
  },
  {
    icon: Zap,
    title: 'Evaluate Before Scaling',
    copy: 'I measure faithfulness, retrieval quality, latency, and failure modes before expanding AI usage.',
  },
];

const skills = [
  { title: 'AI / LLM Systems', icon: Brain, items: ['LLMs', 'RAG', 'LangChain', 'Pinecone', 'Ragas'] },
  { title: 'Backend', icon: Code2, items: ['FastAPI', 'Laravel', 'REST APIs', 'PHP', 'Express'] },
  { title: 'Systems', icon: Network, items: ['System Design', 'Scalable Architecture', 'API Contracts', 'Reliability'] },
  { title: 'Tools', icon: BriefcaseBusiness, items: ['Docker', 'Azure', 'CI/CD', 'Postman', 'Git', 'OpenAPI'] },
];

const expertise = [
  'Designing agentic AI systems for real insurance and ERP workflows',
  'Building advanced RAG pipelines with document ingestion, embeddings, and vector databases',
  'Orchestrating LLM workflows using LangChain and FastAPI services',
  'Evaluating LLM systems with Ragas for faithfulness and answer quality',
  'Integrating AI outputs with scalable backend APIs and production business rules',
];

const experience = [
  {
    role: 'Software Engineer I',
    company: 'Taurus Technologies',
    badge: 'AI + Backend Engineering',
    items: [
      'Built an AI-driven policy automation system using LLMs, reducing manual review effort by roughly 50%.',
      'Engineered a multi-agent AI Policy Assistant for insurance workflows using LangChain and FastAPI.',
      'Designed RAG pipelines for document ingestion, embeddings, vector retrieval, and grounded response generation.',
      'Shipped scalable REST APIs and backend integrations across insurance policy lifecycle systems.',
      'Improved API and database performance by about 25% through query optimization and cleaner contracts.',
    ],
  },
  {
    role: 'Backend / ERP Systems Engineer',
    company: 'Production ERP Integrations',
    badge: 'APIs + Reliability',
    items: [
      'Built ERP-facing API systems for secure transaction and workflow integrations.',
      'Improved database-heavy data retrieval paths for faster, more predictable API behavior.',
      'Implemented validation, authorization, and data consistency layers for production workflows.',
      'Collaborated across frontend, backend, and business teams to convert operational rules into reliable systems.',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;

  if (window.location.hash === '#/case-study') {
    return <CaseStudyPage />;
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="fixed inset-0 -z-10 noise" />
      <div className="fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden px-6 pt-32 sm:pt-36 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32">
            <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="max-w-3xl">
              <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                <Badge icon={Sparkles}>AI Engineer for agentic systems and production RAG</Badge>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-7 text-4xl font-black leading-[1.04] tracking-normal text-ink sm:text-5xl lg:text-6xl"
              >
                I engineer AI systems that turn enterprise knowledge into{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  reliable workflow automation.
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                AI Engineer with 2+ years of software engineering experience building agentic AI, RAG pipelines, and FastAPI
                services on top of production backend systems in insurance and ERP domains.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
                <Badge icon={Brain}>Multi-agent systems</Badge>
                <Badge icon={ShieldCheck}>90%+ RAG faithfulness with Ragas</Badge>
                <Badge icon={Rocket}>30+ production APIs shipped</Badge>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-4 flex flex-wrap gap-3">
                <Badge icon={Sparkles}>Agentic AI</Badge>
                <Badge icon={Database}>RAG Pipelines</Badge>
                <Badge icon={Zap}>FastAPI + LLM</Badge>
                <Badge icon={BadgeCheck}>AI Evaluation</Badge>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-10 flex flex-wrap gap-4">
                <Button href="#projects">
                  View My Work <ArrowRight size={18} />
                </Button>
                <Button href="#contact" variant="secondary">
                  Hire Me <Mail size={18} />
                </Button>
                <Button href="https://drive.google.com/file/d/1kcYK1fBIM18BNLC8_FvK65mpITsw5_Cc/view" variant="ghost">
                  Download Resume <Download size={18} />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ProfileCard />
            </motion.div>
          </div>
        </section>

        <Section id="featured" eyebrow="Featured Work" title="Multi-Agent AI Policy Assistant">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="grid overflow-hidden rounded-2xl border border-line bg-panel/80 shadow-2xl shadow-black/30 lg:grid-cols-2"
          >
            <div className="border-b border-line bg-slate-950/40 p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <ProjectMockup />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <Badge icon={Rocket}>FastAPI, LangChain, Pinecone, Ragas</Badge>
              <h3 className="mt-6 text-3xl font-bold tracking-normal text-ink">
                AI policy automation for insurance workflows
              </h3>
              <p className="mt-4 text-lg leading-8 text-muted">
                Insurance policy teams needed accurate answers across dense documents, policy rules, and workflow states. I
                built an agentic RAG system that retrieves grounded context, reasons through policy intent, and exposes the
                result through production-ready FastAPI services.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  ['Problem', 'Manual policy lookup created slow decisions, inconsistent interpretation, and limited traceability.'],
                  ['Solution', 'Designed planner, retrieval, reasoning, and response agents backed by Pinecone vector search and LangChain orchestration.'],
                  ['Architecture', 'Document ingestion creates embeddings, retrieval injects policy context, agents coordinate task flow, and Ragas evaluates faithfulness before scaling usage.'],
                ].map(([label, copy]) => (
                  <div key={label} className="rounded-2xl border border-line bg-slate-950/35 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid gap-3">
                {[
                  '90%+ faithfulness measured with Ragas',
                  'Reduced manual policy review effort by roughly 50%',
                  'Automated document-grounded answers for insurance workflows',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <BadgeCheck size={15} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`${baseUrl}#/case-study`}>
                  View Case Study <ExternalLink size={18} />
                </Button>
                <Button href="https://github.com/NitZZ057" variant="ghost">
                  GitHub <Github size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="AI and backend systems built around real business workflows.">
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={index * 0.1} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Work Experience" title="Where AI systems meet production backend infrastructure.">
          <div className="grid gap-5 lg:grid-cols-2">
            {experience.map((job) => (
              <motion.div
                key={job.role}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-120px' }}
                variants={fadeUp}
                transition={{ duration: 0.65 }}
                className="rounded-2xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{job.role}</h3>
                    <p className="mt-2 text-muted">{job.company}</p>
                  </div>
                  <Badge icon={BriefcaseBusiness}>{job.badge}</Badge>
                </div>
                <div className="mt-7 grid gap-4">
                  {job.items.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-line bg-slate-950/30 p-4 text-sm text-slate-200">
                      <BadgeCheck className="mt-0.5 shrink-0 text-primary" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section eyebrow="AI Engineering Expertise" title="I build LLM systems as products, not experiments.">
          <div className="grid gap-4 md:grid-cols-2">
            {expertise.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="flex gap-3 rounded-2xl border border-line bg-panel/70 p-5 text-slate-200"
              >
                <BadgeCheck className="mt-0.5 shrink-0 text-primary" size={18} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Operating Principles" title="How I Think About AI Systems">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {thinking.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-line bg-panel/70 p-6 shadow-xl shadow-black/10 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="The stack I use to build evaluated AI systems and scalable backends.">
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((group, index) => (
              <SkillGroup key={group.title} group={group} delay={index * 0.08} />
            ))}
          </div>
        </Section>

        <section id="contact" className="px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/20 via-secondary/10 to-panel p-8 shadow-glow sm:p-12 lg:p-16"
          >
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                Let&apos;s build intelligent systems powered by AI.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Open to AI Engineer roles focused on LLM applications, RAG pipelines, agentic systems, and backend
                infrastructure that makes AI usable in production.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="mailto:nitzz057@gmail.com">
                  Contact Me <Mail size={18} />
                </Button>
                <Button href="https://drive.google.com/file/d/1kcYK1fBIM18BNLC8_FvK65mpITsw5_Cc/view" variant="secondary">
                  View Resume <Download size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink">Nitesh Jadhav</p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-primary" href="https://github.com/NitZZ057" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a className="transition hover:text-primary" href="https://linkedin.com/in/nitesh-jadhav-89426321b" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
            <a className="transition hover:text-primary" href="mailto:nitzz057@gmail.com">
              nitzz057@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
