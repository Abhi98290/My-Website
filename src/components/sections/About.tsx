import { SectionTitle } from "@/components/SectionTitle";
import { stats } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle index="01" comment="about me" title="A bit about me" />
      </motion.div>
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <motion.div
          className="space-y-4 text-base leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p>
            I'm a Full Stack Developer based in Rajasthan, currently building real-time
            mobile and web products at{" "}
            <span className="text-neon">MySathi Pvt Ltd.</span> My work focuses on
            React Native apps backed by Node.js, PostgreSQL and Socket.IO — the kind
            of systems where latency, reliability and clean schemas actually matter.
          </p>
          <p>
            I enjoy taking a product from a blank Figma board to a deployed,
            high-concurrency backend — designing the data model, wiring up the APIs,
            building the screens, and shipping it. I care about clean architecture,
            small focused components and writing code that the next person (often me,
            six months later) can read.
          </p>
          <p>
            Outside of work I'm exploring AI integrations, time-series forecasting,
            and pushing my React Native skills further.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 gap-4 md:grid-cols-1"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-lg border border-border bg-card/40 p-5 backdrop-blur transition-colors hover:border-neon group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="font-mono text-3xl font-bold text-neon glow transition-all group-hover:scale-110">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
