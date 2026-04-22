import { SectionTitle } from "@/components/SectionTitle";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle index="04" comment="experience" title="Where I've Worked" />
      </motion.div>
      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <motion.span
              className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-neon shadow-[0_0_12px_var(--neon)]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
              whileHover={{ scale: 1.5 }}
            />
            <motion.div
              className="rounded-lg border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-neon group"
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold">
                  {job.role} <span className="text-neon group-hover:glow transition-all">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {job.location} · {job.stack}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt, idx) => (
                  <motion.li
                    key={pt}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, delay: 0.2 + i * 0.08 + idx * 0.05 }}
                  >
                    <span className="mt-1 text-neon">▸</span>
                    <span>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
