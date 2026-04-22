import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "@/components/MagneticButton";
import { TypingAnimation } from "@/components/TypingAnimation";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-neon-soft/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-neon" />
              <span className="font-mono text-sm text-neon">Available for opportunities</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl"
              >
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-neon glow">Abhishek</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-3 w-full bg-neon/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-medium text-muted-foreground lg:text-4xl"
              >
                <TypingAnimation
                  texts={[
                    "Full Stack Developer 💻",
                    "React Native Expert 📱",
                    "Node.js Specialist ⚡",
                    "Building Real-time Apps 🚀",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2000}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                {profile.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton strength={0.4}>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-neon px-8 py-4 font-semibold text-background transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]"
                >
                  View My Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-border px-8 py-4 font-semibold text-foreground transition-all hover:border-neon hover:text-neon"
                >
                  Get In Touch
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-sm text-muted-foreground">Connect:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: profile.github, label: "GitHub" },
                  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                ].map((social) => (
                  <MagneticButton key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_20px_rgba(134,239,172,0.3)]"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating code card */}
              <motion.div
                className="rounded-2xl border border-border bg-card/50 p-8 shadow-2xl backdrop-blur-xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mb-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = {"{\n"}
                    {"  "}
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-neon">'Abhishek'</span>,{"\n"}
                    {"  "}
                    <span className="text-green-400">role</span>:{" "}
                    <span className="text-neon">'Full Stack'</span>,{"\n"}
                    {"  "}
                    <span className="text-green-400">skills</span>: [{"\n"}
                    {"    "}
                    <span className="text-neon">'React Native'</span>,{"\n"}
                    {"    "}
                    <span className="text-neon">'Node.js'</span>,{"\n"}
                    {"    "}
                    <span className="text-neon">'PostgreSQL'</span>
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}
                    <span className="text-green-400">passion</span>:{" "}
                    <span className="text-neon">'Building'</span>,{"\n"}
                    {"  "}
                    <span className="text-green-400">coffee</span>:{" "}
                    <span className="text-orange-400">Infinity</span>
                    {"\n"}
                    {"};"}
                  </code>
                </pre>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -right-8 top-20 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-xl"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="font-mono text-3xl font-bold text-neon glow">2+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="font-mono text-3xl font-bold text-neon glow">5+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-muted-foreground">Scroll to explore</span>
            <div className="h-8 w-5 rounded-full border-2 border-neon/50">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-neon"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
