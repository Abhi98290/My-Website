import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold text-neon glow">
          &lt;AS /&gt;
        </a>
        
        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-neon"
              >
                <span className="text-neon">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <MagneticButton strength={0.3}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-neon hover:text-neon"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-neon hover:text-neon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </MagneticButton>
          </div>

          <MagneticButton strength={0.4}>
            <a
              href="#contact"
              className="rounded-md border border-neon px-4 py-2 font-mono text-xs text-neon transition-all hover:bg-neon hover:text-primary-foreground"
            >
              say hello
            </a>
          </MagneticButton>
        </div>

        <button
          aria-label="menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-neon" />
            <span className="block h-0.5 w-6 bg-neon" />
            <span className="block h-0.5 w-4 bg-neon" />
          </div>
        </button>
      </nav>
      
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-2 px-6 py-4 font-mono text-sm">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-neon"
                >
                  <span className="text-neon">0{i + 1}.</span> {l.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 border-t border-border pt-4">
              <ThemeToggle />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-neon hover:text-neon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-neon hover:text-neon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
