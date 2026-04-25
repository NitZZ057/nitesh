import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p> : null}
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
