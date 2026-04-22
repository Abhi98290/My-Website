import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle index="03" comment="projects" title="Featured Work" />
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="group relative flex flex-col rounded-xl border border-border bg-card/40 p-7 backdrop-blur transition-all hover:border-neon"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            whileHover={{ 
              y: -12, 
              scale: 1.03,
              boxShadow: "0 0 30px rgba(134, 239, 172, 0.3)",
              transition: { duration: 0.2 }
            }}
          >
            {p.featured && (
              <motion.span
                className="mb-3 w-fit font-mono text-xs uppercase tracking-widest text-neon"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
              >
                ★ featured
              </motion.span>
            )}
            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-neon">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <p className="mt-4 border-l-2 border-neon/60 pl-3 text-sm italic text-foreground/80">
              {p.highlight}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
              {p.stack.map((t) => (
                <motion.li
                  key={t}
                  className="rounded-md border border-border bg-background/40 px-2 py-1 text-muted-foreground transition-colors group-hover:border-neon/50"
                  whileHover={{ 
                    scale: 1.15, 
                    color: "var(--neon)",
                    transition: { duration: 0.15 }
                  }}
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
