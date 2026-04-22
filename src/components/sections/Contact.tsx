import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle index="06" comment="contact" title="Let's build something" />
      </motion.div>

      <motion.p
        className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        I'm open to full-time roles, freelance work and interesting collaborations.
        If you have an idea, a problem to solve, or just want to say hi — my inbox is open.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <MagneticButton strength={0.5}>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-neon bg-neon/10 px-7 py-4 font-mono text-sm text-neon transition-all hover:bg-neon hover:text-primary-foreground hover:glow-box"
          >
            say hello 👋
          </a>
        </MagneticButton>
        <MagneticButton strength={0.4}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-7 py-4 font-mono text-sm text-foreground transition-colors hover:border-neon hover:text-neon"
          >
            linkedin
          </a>
        </MagneticButton>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-4 text-left md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {[
          { 
            label: "email", 
            value: profile.email, 
            href: `mailto:${profile.email}`,
            icon: Mail 
          },
          { 
            label: "phone", 
            value: profile.phone, 
            href: `tel:${profile.phone.replace(/\s/g, "")}`,
            icon: Phone 
          },
          { 
            label: "location", 
            value: profile.location, 
            href: "#",
            icon: MapPin 
          },
        ].map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            className="group rounded-lg border border-border bg-card/40 p-5 backdrop-blur transition-all hover:border-neon"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/40 text-neon transition-all group-hover:border-neon group-hover:glow">
                <c.icon size={18} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-widest text-neon">
                  {c.label}
                </p>
                <p className="mt-1 text-sm text-foreground">{c.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.footer
        className="mt-24 border-t border-border pt-8 font-mono text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Designed & built by <span className="text-neon">Abhishek Singhal</span> · © {new Date().getFullYear()}
      </motion.footer>
    </section>
  );
}
