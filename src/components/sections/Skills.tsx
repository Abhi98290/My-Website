import { SectionTitle } from "@/components/SectionTitle";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle index="02" comment="skills" title="Tech Arsenal" />
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([level, items], i) => (
          <motion.div
            key={level}
            className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-neon group"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
            whileHover={{ 
              scale: 1.05, 
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-neon transition-all group-hover:glow">
              {level}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s, idx) => (
                <motion.li
                  key={s}
                  className="rounded-md border border-border bg-background/40 px-3 py-1 text-xs text-foreground transition-all hover:border-neon hover:text-neon"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: 0.2 + i * 0.06 + idx * 0.03 }}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.15 }
                  }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
