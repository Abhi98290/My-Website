import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useScroll, useInView } from "framer-motion";
import { Moon, Sun, Github, Linkedin, ArrowUp, Sparkles, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [loadingText, setLoadingText] = useState("Initializing");
  useEffect(() => {
    const texts = ["Initializing", "Loading Assets", "Preparing Experience", "Almost Ready"];
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 600);
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 15 + 5;
        if (next >= 100) {
          clearInterval(id);
          clearInterval(textInterval);
          setLoadingText("Ready");
          setTimeout(() => setDone(true), 600);
          return 100;
        }
        return next;
      });
    }, 150);
    return () => {
      clearInterval(id);
      clearInterval(textInterval);
    };
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxs(
    motion.div,
    {
      exit: { opacity: 0 },
      transition: { duration: 0.8 },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `
                  linear-gradient(var(--grid-color) 1px, transparent 1px),
                  linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
                `,
              backgroundSize: "60px 60px"
            },
            animate: {
              backgroundPosition: ["0px 0px", "60px 60px"]
            },
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-radial" }),
        [...Array(15)].map((_, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute h-1 w-1 rounded-full bg-neon/40",
            style: {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            },
            animate: {
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            },
            transition: {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }
          },
          i
        )),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center gap-8", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsx(
                  motion.h1,
                  {
                    className: "font-mono text-6xl font-bold text-neon glow tracking-tight",
                    animate: {
                      textShadow: [
                        "0 0 20px rgba(134, 239, 172, 0.6)",
                        "0 0 40px rgba(134, 239, 172, 0.8)",
                        "0 0 20px rgba(134, 239, 172, 0.6)"
                      ]
                    },
                    transition: { duration: 2, repeat: Infinity },
                    children: "AS"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.h1,
                  {
                    className: "absolute inset-0 font-mono text-6xl font-bold text-neon/30 tracking-tight",
                    animate: {
                      x: [-2, 2, -2],
                      opacity: [0.3, 0.5, 0.3]
                    },
                    transition: { duration: 0.2, repeat: Infinity },
                    children: "AS"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative h-32 w-32", children: [
            [...Array(3)].map((_, i) => /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 rounded-full border-2 border-neon/30",
                animate: {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                },
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4
                }
              },
              i
            )),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 rounded-full border-4 border-transparent border-t-neon",
                animate: { rotate: 360 },
                transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-4 rounded-full bg-neon/20",
                animate: {
                  scale: [0.8, 1, 0.8],
                  opacity: [0.3, 0.6, 0.3]
                },
                transition: { duration: 2, repeat: Infinity }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-80", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                className: "mb-3 text-center font-mono text-sm text-neon",
                children: [
                  loadingText,
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      animate: { opacity: [1, 0, 1] },
                      transition: { duration: 1, repeat: Infinity },
                      children: "..."
                    }
                  )
                ]
              },
              loadingText
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-neon/15", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-r from-transparent via-neon/30 to-transparent",
                  animate: { x: ["-100%", "200%"] },
                  transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-full bg-gradient-to-r from-neon via-neon-soft to-neon",
                  style: {
                    width: `${progress}%`,
                    boxShadow: "0 0 20px var(--neon), 0 0 40px var(--neon)"
                  },
                  transition: { duration: 0.3 }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between font-mono text-xs", children: [
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  className: "text-muted-foreground",
                  animate: { opacity: [0.5, 1, 0.5] },
                  transition: { duration: 2, repeat: Infinity },
                  children: "Loading Portfolio"
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.span,
                {
                  className: "text-neon font-bold",
                  initial: { scale: 1.2 },
                  animate: { scale: 1 },
                  children: [
                    Math.floor(progress),
                    "%"
                  ]
                },
                Math.floor(progress)
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: [0.4, 0.7, 0.4] },
              transition: { duration: 2, repeat: Infinity },
              className: "mt-4 font-mono text-xs text-muted-foreground",
              children: "Full Stack Developer · React Native · Node.js"
            }
          )
        ] })
      ]
    }
  ) });
}
const profile = {
  tagline: "Building production-grade web & mobile experiences with React, React Native, Node.js & PostgreSQL.",
  location: "Bikaner, Rajasthan",
  email: "abhisheksinghal1909@gmail.com",
  phone: "+91 8306386953",
  linkedin: "https://www.linkedin.com/in/abhishek-singhal-a6789a232/",
  github: "https://github.com/abhisheksinghal1909"
};
const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "1M+", label: "Real-time Events Handled" }
];
const skills = {
  Expert: ["JavaScript", "React", "React Native", "Node.js", "Express.js", "PostgreSQL"],
  Proficient: ["Prisma ORM", "Socket.IO", "REST APIs", "JWT Auth", "Redux", "MongoDB", "MySQL"],
  Familiar: ["Python", "C++", "SQL", "Machine Learning", "Figma", "Android Studio"],
  Tools: ["Git", "GitHub", "VSCode", "Postman", "FCM", "Agile/Scrum"]
};
const projects = [
  {
    title: "MySathi Railway Platform",
    featured: true,
    description: "Production-grade real-time railway platform — live train tracking, PNR insights and on-demand porter (coolie) booking across multiple stations.",
    stack: ["React Native", "Node.js", "Socket.IO", "PostgreSQL", "Prisma"],
    highlight: "Dual mobile app ecosystem (Passenger & Coolie) with JWT-authenticated WebSockets."
  },
  {
    title: "Face Emotion Detection App",
    featured: true,
    description: "Real-time face emotion detection Android app with camera integration, on-device data flow and clean result visualization.",
    stack: ["React Native", "Java", "Android Studio", "Figma"],
    highlight: "1,000+ downloads · 200+ reviews — iterated UI from real interaction data."
  },
  {
    title: "E-commerce Platform",
    featured: false,
    description: "Full-featured e-commerce store with advanced search & filtering, admin dashboard, secure auth, and email-based password recovery.",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
    highlight: "Scalable product management with role-based admin insights."
  },
  {
    title: "Electricity Consumption Forecasting",
    featured: false,
    description: "Analyzed 9 months of 15-minute interval data from 5 corporate buildings and forecasted next 3 months using SARIMA + VAR ensemble.",
    stack: ["Python", "SARIMA", "VAR", "Pandas"],
    highlight: "85% accuracy on 20% test split — ADF & Durbin–Watson validated."
  }
];
const experience = [
  {
    role: "Full Stack Developer",
    company: "MySathi Pvt Ltd.",
    location: "Jaipur, RJ",
    period: "May 2025 — Present",
    stack: "React Native · Node.js · Express.js · PostgreSQL",
    points: [
      "Built a production-grade real-time railway platform with live train tracking, PNR insights and on-demand porter booking.",
      "Architected a dual mobile app ecosystem (Passenger & Coolie) with secure bi-directional Socket.IO + JWT WebSockets.",
      "Developed scalable Node.js + Express APIs with role-based auth, event-driven workflows and FCM push notifications.",
      "Designed PostgreSQL schemas with Prisma ORM for high-concurrency, high-availability access."
    ]
  },
  {
    role: "Android Developer Intern",
    company: "Rawattech Consulting",
    location: "Jaipur, RJ",
    period: "May 2023 — Oct 2023",
    stack: "React Native · JavaScript · Android Studio · Figma",
    points: [
      "Built a real-time face emotion detection app — camera integration, data flow and result visualization.",
      "Analyzed 1,000+ downloads and 200+ reviews to iterate on UI and performance.",
      "Worked on object detection features with structured data handling and consistent UI.",
      "Used Figma for wireframing — improved development clarity and efficiency."
    ]
  }
];
const education = [
  {
    school: "Poornima College of Engineering",
    degree: "B.Tech, Computer Science",
    detail: "CGPA: 7.68 / 10",
    period: "Jul 2019 — Jun 2023",
    location: "Jaipur, RJ"
  },
  {
    school: "Delhi Public School",
    degree: "Class XII — PCM",
    detail: "Science stream",
    period: "Apr 2017 — Apr 2019",
    location: "Bikaner, RJ"
  }
];
const certifications = [
  {
    title: "Meta Android Developer Professional Certificate",
    issuer: "Coursera · Meta",
    detail: "Android app development with JavaScript & React Native, Android Studio and the Android SDK."
  }
];
function MagneticButton({
  children,
  className = "",
  strength = 0.3
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouse,
      onMouseLeave: reset,
      animate: { x: position.x, y: position.y },
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      className: `magnetic inline-block ${className}`,
      children
    }
  );
}
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      return stored || "dark";
    }
    return "dark";
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  };
  return { theme, toggleTheme };
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      onClick: toggleTheme,
      className: "relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/40 text-foreground backdrop-blur transition-all hover:border-neon hover:text-neon",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      "aria-label": "Toggle theme",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: false,
            animate: {
              scale: theme === "dark" ? 1 : 0,
              opacity: theme === "dark" ? 1 : 0,
              rotate: theme === "dark" ? 0 : 180
            },
            transition: { duration: 0.3 },
            className: "absolute",
            children: /* @__PURE__ */ jsx(Moon, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: false,
            animate: {
              scale: theme === "light" ? 1 : 0,
              opacity: theme === "light" ? 1 : 0,
              rotate: theme === "light" ? 0 : -180
            },
            transition: { duration: 0.3 },
            className: "absolute",
            children: /* @__PURE__ */ jsx(Sun, { size: 18 })
          }
        )
      ]
    }
  );
}
const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#top", className: "font-mono text-lg font-bold text-neon glow", children: "<AS />" }),
          /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-8 font-mono text-sm md:flex", children: links.map((l, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: l.href,
              className: "text-muted-foreground transition-colors hover:text-neon",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "text-neon", children: [
                  "0",
                  i + 1,
                  "."
                ] }),
                " ",
                l.label
              ]
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-4 md:flex", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(MagneticButton, { strength: 0.3, children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: profile.github,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-neon hover:text-neon",
                  "aria-label": "GitHub",
                  children: /* @__PURE__ */ jsx(Github, { size: 18 })
                }
              ) }),
              /* @__PURE__ */ jsx(MagneticButton, { strength: 0.3, children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: profile.linkedin,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-neon hover:text-neon",
                  "aria-label": "LinkedIn",
                  children: /* @__PURE__ */ jsx(Linkedin, { size: 18 })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(MagneticButton, { strength: 0.4, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "rounded-md border border-neon px-4 py-2 font-mono text-xs text-neon transition-all hover:bg-neon hover:text-primary-foreground",
                children: "say hello"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "menu",
              className: "md:hidden",
              onClick: () => setOpen((v) => !v),
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "block h-0.5 w-6 bg-neon" }),
                /* @__PURE__ */ jsx("span", { className: "block h-0.5 w-6 bg-neon" }),
                /* @__PURE__ */ jsx("span", { className: "block h-0.5 w-4 bg-neon" })
              ] })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "border-t border-border/60 bg-background/95 backdrop-blur md:hidden", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 px-6 py-4 font-mono text-sm", children: [
          links.map((l, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "block py-2 text-muted-foreground hover:text-neon",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "text-neon", children: [
                  "0",
                  i + 1,
                  "."
                ] }),
                " ",
                l.label
              ]
            }
          ) }, l.href)),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 border-t border-border pt-4", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: profile.github,
                target: "_blank",
                rel: "noreferrer",
                className: "flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-neon hover:text-neon",
                "aria-label": "GitHub",
                children: /* @__PURE__ */ jsx(Github, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: profile.linkedin,
                target: "_blank",
                rel: "noreferrer",
                className: "flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-neon hover:text-neon",
                "aria-label": "LinkedIn",
                children: /* @__PURE__ */ jsx(Linkedin, { size: 20 })
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
function AnimatedCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button") || target.classList.contains("magnetic")) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border-2 border-neon mix-blend-difference md:block",
        style: {
          x: cursorXSpring,
          y: cursorYSpring
        },
        animate: {
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1
        },
        transition: { duration: 0.15 }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1 w-1 rounded-full bg-neon mix-blend-difference md:block",
        style: {
          x: cursorXSpring,
          y: cursorYSpring
        },
        animate: {
          scale: isPointer ? 0 : 1,
          opacity: isHidden ? 0 : 1,
          x: isPointer ? 15 : 15,
          y: isPointer ? 15 : 15
        },
        transition: { duration: 0.15 }
      }
    )
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-neon via-neon-soft to-neon",
      style: { scaleX }
    }
  );
}
function FloatingElements() {
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden", children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "absolute h-2 w-2 rounded-full bg-neon/20",
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      },
      animate: {
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1]
      },
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }
    },
    i
  )) });
}
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.8, y: 20 },
      whileHover: { scale: 1.1, y: -5 },
      whileTap: { scale: 0.9 },
      onClick: scrollToTop,
      className: "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon bg-background/80 text-neon backdrop-blur-sm transition-all hover:bg-neon hover:text-background hover:shadow-[0_0_20px_rgba(134,239,172,0.5)]",
      "aria-label": "Back to top",
      children: /* @__PURE__ */ jsx(ArrowUp, { size: 20 })
    }
  ) });
}
function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2e3
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);
  return /* @__PURE__ */ jsxs("span", { children: [
    displayText,
    /* @__PURE__ */ jsx("span", { className: "animate-pulse text-neon", children: "|" })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "top",
      className: "relative flex min-h-screen items-center overflow-hidden px-6 pt-24",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon/20 blur-[120px]",
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              },
              transition: { duration: 8, repeat: Infinity }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-neon-soft/20 blur-[120px]",
              animate: {
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              },
              transition: { duration: 8, repeat: Infinity, delay: 1 }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-7xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-2 backdrop-blur-sm",
                  children: [
                    /* @__PURE__ */ jsx(Sparkles, { size: 16, className: "text-neon" }),
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-sm text-neon", children: "Available for opportunities" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.1 },
                    className: "text-5xl font-bold leading-tight tracking-tight lg:text-7xl",
                    children: [
                      "Hi, I'm",
                      " ",
                      /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
                        /* @__PURE__ */ jsx("span", { className: "relative z-10 text-neon glow", children: "Abhishek" }),
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "absolute -bottom-2 left-0 h-3 w-full bg-neon/20",
                            initial: { scaleX: 0 },
                            animate: { scaleX: 1 },
                            transition: { duration: 0.8, delay: 0.5 }
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.2 },
                    className: "text-2xl font-medium text-muted-foreground lg:text-4xl",
                    children: /* @__PURE__ */ jsx(
                      TypingAnimation,
                      {
                        texts: [
                          "Full Stack Developer 💻",
                          "React Native Expert 📱",
                          "Node.js Specialist ⚡",
                          "Building Real-time Apps 🚀"
                        ],
                        typingSpeed: 80,
                        deletingSpeed: 40,
                        pauseDuration: 2e3
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.3 },
                    className: "max-w-2xl text-lg leading-relaxed text-muted-foreground",
                    children: profile.tagline
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.4 },
                  className: "flex flex-wrap items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx(MagneticButton, { strength: 0.4, children: /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "#projects",
                        className: "group inline-flex items-center gap-2 rounded-lg bg-neon px-8 py-4 font-semibold text-background transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]",
                        children: [
                          "View My Work",
                          /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "transition-transform group-hover:translate-x-1" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx(MagneticButton, { strength: 0.3, children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "#contact",
                        className: "inline-flex items-center gap-2 rounded-lg border-2 border-border px-8 py-4 font-semibold text-foreground transition-all hover:border-neon hover:text-neon",
                        children: "Get In Touch"
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.5 },
                  className: "flex items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-sm text-muted-foreground", children: "Connect:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: [
                      { icon: Github, href: profile.github, label: "GitHub" },
                      { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                      { icon: Mail, href: `mailto:${profile.email}`, label: "Email" }
                    ].map((social) => /* @__PURE__ */ jsx(MagneticButton, { strength: 0.3, children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: social.href,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_20px_rgba(134,239,172,0.3)]",
                        "aria-label": social.label,
                        children: /* @__PURE__ */ jsx(social.icon, { size: 20 })
                      }
                    ) }, social.label)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.3 },
                className: "relative hidden lg:block",
                children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "rounded-2xl border border-border bg-card/50 p-8 shadow-2xl backdrop-blur-xl",
                      animate: {
                        y: [0, -20, 0]
                      },
                      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex gap-2", children: [
                          /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-red-500/70" }),
                          /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-yellow-500/70" }),
                          /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-green-500/70" })
                        ] }),
                        /* @__PURE__ */ jsx("pre", { className: "font-mono text-sm leading-relaxed", children: /* @__PURE__ */ jsxs("code", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "const" }),
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "developer" }),
                          " = ",
                          "{\n",
                          "  ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "name" }),
                          ":",
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "'Abhishek'" }),
                          ",",
                          "\n",
                          "  ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "role" }),
                          ":",
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "'Full Stack'" }),
                          ",",
                          "\n",
                          "  ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "skills" }),
                          ": [",
                          "\n",
                          "    ",
                          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "'React Native'" }),
                          ",",
                          "\n",
                          "    ",
                          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "'Node.js'" }),
                          ",",
                          "\n",
                          "    ",
                          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "'PostgreSQL'" }),
                          "\n",
                          "  ",
                          "],",
                          "\n",
                          "  ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "passion" }),
                          ":",
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "'Building'" }),
                          ",",
                          "\n",
                          "  ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "coffee" }),
                          ":",
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: "Infinity" }),
                          "\n",
                          "};"
                        ] }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "absolute -right-8 top-20 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-xl",
                      animate: {
                        y: [0, 15, 0]
                      },
                      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "font-mono text-3xl font-bold text-neon glow", children: "2+" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Years Exp" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "absolute -left-8 bottom-20 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-xl",
                      animate: {
                        y: [0, -15, 0]
                      },
                      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "font-mono text-3xl font-bold text-neon glow", children: "5+" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Projects" })
                      ]
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 1 },
              className: "absolute bottom-8 left-1/2 -translate-x-1/2",
              children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  animate: { y: [0, 10, 0] },
                  transition: { duration: 2, repeat: Infinity },
                  className: "flex flex-col items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "Scroll to explore" }),
                    /* @__PURE__ */ jsx("div", { className: "h-8 w-5 rounded-full border-2 border-neon/50", children: /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { y: [0, 12, 0] },
                        transition: { duration: 2, repeat: Infinity },
                        className: "mx-auto mt-1 h-2 w-1 rounded-full bg-neon"
                      }
                    ) })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function SectionTitle({
  index,
  comment,
  title
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsxs(
      motion.p,
      {
        className: "mb-2 font-mono text-sm text-neon",
        initial: { opacity: 0, x: -10 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.3 },
        children: [
          "// ",
          comment
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-4", children: [
      /* @__PURE__ */ jsxs(
        motion.span,
        {
          className: "font-mono text-2xl text-neon",
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.3, delay: 0.1 },
          children: [
            index,
            "."
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          className: "text-3xl font-bold tracking-tight md:text-4xl",
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.3, delay: 0.15 },
          children: title
        }
      ),
      /* @__PURE__ */ jsx(
        motion.span,
        {
          className: "hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block",
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
          style: { originX: 0 }
        }
      )
    ] })
  ] });
}
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.3 });
  return { ref, isInView };
}
function About() {
  const { ref, isInView } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "mx-auto max-w-6xl px-6 py-24", ref, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsx(SectionTitle, { index: "01", comment: "about me", title: "A bit about me" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-[2fr_1fr]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "space-y-4 text-base leading-relaxed text-muted-foreground",
          initial: { opacity: 0, x: -30 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
          transition: { duration: 0.4, delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "I'm a Full Stack Developer based in Rajasthan, currently building real-time mobile and web products at",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-neon", children: "MySathi Pvt Ltd." }),
              " My work focuses on React Native apps backed by Node.js, PostgreSQL and Socket.IO — the kind of systems where latency, reliability and clean schemas actually matter."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "I enjoy taking a product from a blank Figma board to a deployed, high-concurrency backend — designing the data model, wiring up the APIs, building the screens, and shipping it. I care about clean architecture, small focused components and writing code that the next person (often me, six months later) can read." }),
            /* @__PURE__ */ jsx("p", { children: "Outside of work I'm exploring AI integrations, time-series forecasting, and pushing my React Native skills further." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "grid grid-cols-3 gap-4 md:grid-cols-1",
          initial: { opacity: 0, x: 30 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
          transition: { duration: 0.4, delay: 0.2 },
          children: stats.map((s, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "rounded-lg border border-border bg-card/40 p-5 backdrop-blur transition-colors hover:border-neon group",
              initial: { opacity: 0, scale: 0.9 },
              animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
              transition: { duration: 0.3, delay: 0.3 + i * 0.06 },
              whileHover: {
                scale: 1.08,
                y: -8,
                transition: { duration: 0.2 }
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "font-mono text-3xl font-bold text-neon glow transition-all group-hover:scale-110", children: s.value }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
              ]
            },
            s.label
          ))
        }
      )
    ] })
  ] });
}
function Skills() {
  const { ref, isInView } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "mx-auto max-w-6xl px-6 py-24", ref, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsx(SectionTitle, { index: "02", comment: "skills", title: "Tech Arsenal" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: Object.entries(skills).map(([level, items], i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-neon group",
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 },
        transition: { duration: 0.3, delay: 0.1 + i * 0.06 },
        whileHover: {
          scale: 1.05,
          y: -8,
          transition: { duration: 0.2 }
        },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 font-mono text-sm uppercase tracking-widest text-neon transition-all group-hover:glow", children: level }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-2", children: items.map((s, idx) => /* @__PURE__ */ jsx(
            motion.li,
            {
              className: "rounded-md border border-border bg-background/40 px-3 py-1 text-xs text-foreground transition-all hover:border-neon hover:text-neon",
              initial: { opacity: 0, scale: 0.9 },
              animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
              transition: { duration: 0.2, delay: 0.2 + i * 0.06 + idx * 0.03 },
              whileHover: {
                scale: 1.15,
                transition: { duration: 0.15 }
              },
              children: s
            },
            s
          )) })
        ]
      },
      level
    )) })
  ] });
}
function Projects() {
  const { ref, isInView } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "mx-auto max-w-6xl px-6 py-24", ref, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsx(SectionTitle, { index: "03", comment: "projects", title: "Featured Work" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        className: "group relative flex flex-col rounded-xl border border-border bg-card/40 p-7 backdrop-blur transition-all hover:border-neon",
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.3, delay: 0.1 + i * 0.08 },
        whileHover: {
          y: -12,
          scale: 1.03,
          boxShadow: "0 0 30px rgba(134, 239, 172, 0.3)",
          transition: { duration: 0.2 }
        },
        children: [
          p.featured && /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "mb-3 w-fit font-mono text-xs uppercase tracking-widest text-neon",
              initial: { opacity: 0, x: -10 },
              animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 },
              transition: { duration: 0.3, delay: 0.2 + i * 0.08 },
              children: "★ featured"
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground transition-colors group-hover:text-neon", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.description }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 border-l-2 border-neon/60 pl-3 text-sm italic text-foreground/80", children: p.highlight }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 flex flex-wrap gap-2 font-mono text-xs", children: p.stack.map((t) => /* @__PURE__ */ jsx(
            motion.li,
            {
              className: "rounded-md border border-border bg-background/40 px-2 py-1 text-muted-foreground transition-colors group-hover:border-neon/50",
              whileHover: {
                scale: 1.15,
                color: "var(--neon)",
                transition: { duration: 0.15 }
              },
              children: t
            },
            t
          )) })
        ]
      },
      p.title
    )) })
  ] });
}
function Experience() {
  const { ref, isInView } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "experience", className: "mx-auto max-w-6xl px-6 py-24", ref, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsx(SectionTitle, { index: "04", comment: "experience", title: "Where I've Worked" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative space-y-10 border-l border-border pl-8", children: experience.map((job, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "relative",
        initial: { opacity: 0, x: -30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
        transition: { duration: 0.3, delay: i * 0.08 },
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-neon shadow-[0_0_12px_var(--neon)]",
              initial: { scale: 0 },
              animate: isInView ? { scale: 1 } : { scale: 0 },
              transition: { duration: 0.3, delay: 0.1 + i * 0.08 },
              whileHover: { scale: 1.5 }
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "rounded-lg border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-neon group",
              whileHover: {
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 }
              },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold", children: [
                    job.role,
                    " ",
                    /* @__PURE__ */ jsxs("span", { className: "text-neon group-hover:glow transition-all", children: [
                      "@ ",
                      job.company
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: job.period })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "mt-1 font-mono text-xs text-muted-foreground", children: [
                  job.location,
                  " · ",
                  job.stack
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2", children: job.points.map((pt, idx) => /* @__PURE__ */ jsxs(
                  motion.li,
                  {
                    className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
                    initial: { opacity: 0, x: -10 },
                    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 },
                    transition: { duration: 0.2, delay: 0.2 + i * 0.08 + idx * 0.05 },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "mt-1 text-neon", children: "▸" }),
                      /* @__PURE__ */ jsx("span", { children: pt })
                    ]
                  },
                  pt
                )) })
              ]
            }
          )
        ]
      },
      job.company
    )) })
  ] });
}
function Education() {
  const { ref, isInView } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "education", className: "mx-auto max-w-6xl px-6 py-24", ref, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsx(SectionTitle, { index: "05", comment: "education", title: "Education & Certifications" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      education.map((e, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-neon group",
          initial: { opacity: 0, scale: 0.95, y: 20 },
          animate: isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 },
          transition: { duration: 0.3, delay: 0.1 + i * 0.06 },
          whileHover: {
            scale: 1.03,
            y: -8,
            transition: { duration: 0.2 }
          },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground group-hover:text-neon transition-colors", children: e.school }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-neon", children: e.degree }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: e.detail }),
            /* @__PURE__ */ jsxs("p", { className: "mt-3 font-mono text-xs text-muted-foreground", children: [
              e.period,
              " · ",
              e.location
            ] })
          ]
        },
        e.school
      )),
      certifications.map((c, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "rounded-xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-neon md:col-span-2 group",
          initial: { opacity: 0, scale: 0.95, y: 20 },
          animate: isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 },
          transition: { duration: 0.3, delay: 0.25 + i * 0.06 },
          whileHover: {
            scale: 1.02,
            y: -8,
            transition: { duration: 0.2 }
          },
          children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2 font-mono text-xs uppercase tracking-widest text-neon group-hover:glow", children: "certification" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground group-hover:text-neon transition-colors", children: c.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-neon", children: c.issuer }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.detail })
          ]
        },
        c.title
      ))
    ] })
  ] });
}
function Contact() {
  const { ref, isInView } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "mx-auto max-w-4xl px-6 py-24 text-center", ref, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsx(SectionTitle, { index: "06", comment: "contact", title: "Let's build something" })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        className: "mx-auto max-w-xl text-base leading-relaxed text-muted-foreground",
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.4, delay: 0.1 },
        children: "I'm open to full-time roles, freelance work and interesting collaborations. If you have an idea, a problem to solve, or just want to say hi — my inbox is open."
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "mt-10 flex flex-wrap items-center justify-center gap-4",
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.4, delay: 0.2 },
        children: [
          /* @__PURE__ */ jsx(MagneticButton, { strength: 0.5, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `mailto:${profile.email}`,
              className: "rounded-md border border-neon bg-neon/10 px-7 py-4 font-mono text-sm text-neon transition-all hover:bg-neon hover:text-primary-foreground hover:glow-box",
              children: "say hello 👋"
            }
          ) }),
          /* @__PURE__ */ jsx(MagneticButton, { strength: 0.4, children: /* @__PURE__ */ jsx(
            "a",
            {
              href: profile.linkedin,
              target: "_blank",
              rel: "noreferrer",
              className: "rounded-md border border-border px-7 py-4 font-mono text-sm text-foreground transition-colors hover:border-neon hover:text-neon",
              children: "linkedin"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "mt-16 grid gap-4 text-left md:grid-cols-3",
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.4, delay: 0.3 },
        children: [
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
          }
        ].map((c, i) => /* @__PURE__ */ jsx(
          motion.a,
          {
            href: c.href,
            className: "group rounded-lg border border-border bg-card/40 p-5 backdrop-blur transition-all hover:border-neon",
            initial: { opacity: 0, scale: 0.95 },
            animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
            transition: { duration: 0.3, delay: 0.4 + i * 0.08 },
            whileHover: { scale: 1.03, y: -5 },
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/40 text-neon transition-all group-hover:border-neon group-hover:glow", children: /* @__PURE__ */ jsx(c.icon, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-neon", children: c.label }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-foreground", children: c.value })
              ] })
            ] })
          },
          c.label
        ))
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.footer,
      {
        className: "mt-24 border-t border-border pt-8 font-mono text-xs text-muted-foreground",
        initial: { opacity: 0 },
        animate: isInView ? { opacity: 1 } : { opacity: 0 },
        transition: { duration: 0.4, delay: 0.6 },
        children: [
          "Designed & built by ",
          /* @__PURE__ */ jsx("span", { className: "text-neon", children: "Abhishek Singhal" }),
          " · © ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AnimatedCursor, {}),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(FloatingElements, {}),
    /* @__PURE__ */ jsx(BackToTop, {}),
    /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Education, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] })
  ] });
}
export {
  Index as component
};
