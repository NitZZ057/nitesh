import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Hammer, Target } from 'lucide-react';

export default function ProjectCard({ project, delay = 0 }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group rounded-2xl border border-line bg-panel/75 p-6 shadow-xl shadow-black/10 transition-colors hover:border-primary/40 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-muted transition group-hover:border-primary/40 group-hover:text-primary">
          <ArrowUpRight size={19} />
        </span>
      </div>

      {project.problem ? (
        <div className="mt-5 rounded-2xl border border-line bg-slate-950/35 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
            <Target size={15} />
            Problem
          </div>
          <p className="mt-3 leading-7 text-muted">{project.problem}</p>
        </div>
      ) : (
        <p className="mt-4 leading-7 text-muted">{project.description}</p>
      )}

      {project.built ? (
        <div className="mt-4 rounded-2xl border border-line bg-white/[0.03] p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            <Hammer size={15} />
            Built
          </div>
          <p className="mt-3 leading-7 text-slate-300">{project.built}</p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-line bg-slate-950/40 px-3 py-1.5 text-xs font-bold text-slate-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 space-y-3">
        {(project.impact || project.achievements).map((achievement) => (
          <div key={achievement} className="flex gap-3 text-sm text-slate-300">
            <BadgeCheck size={17} className="mt-0.5 shrink-0 text-primary" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>

      {project.caseStudy ? (
        <a
          href={`${baseUrl}#/case-study/${project.caseStudy}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
        >
          View case study
          <ArrowUpRight size={16} />
        </a>
      ) : null}
    </motion.article>
  );
}
