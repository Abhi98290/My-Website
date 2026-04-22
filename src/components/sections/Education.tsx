import { SectionTitle } from "@/components/SectionTitle";
import { education, certifications } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Education() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle index="05" comment="education" title="Education & Certifications" />
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-neon group"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors">
              {e.school}
            </h3>
            <p className="mt-1 text-sm text-neon">{e.degree}</p>
            <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              {e.period} · {e.location}
            </p>
          </motion.div>
        ))}
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            className="rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-neon md:col-span-2 group"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-neon group-hover:glow">
              certification
            </p>
            <h3 className="text-lg font-bold text-foreground group-hover:text-neon transition-colors">
              {c.title}
            </h3>
            <p className="mt-1 text-sm text-neon">{c.issuer}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
