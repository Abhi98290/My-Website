import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
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

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(var(--grid-color) 1px, transparent 1px),
                  linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Radial gradient */}
          <div className="absolute inset-0 gradient-radial" />

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-neon/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo/Name with glitch effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <motion.h1
                className="font-mono text-6xl font-bold text-neon glow tracking-tight"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(134, 239, 172, 0.6)",
                    "0 0 40px rgba(134, 239, 172, 0.8)",
                    "0 0 20px rgba(134, 239, 172, 0.6)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AS
              </motion.h1>
              {/* Glitch layers */}
              <motion.h1
                className="absolute inset-0 font-mono text-6xl font-bold text-neon/30 tracking-tight"
                animate={{
                  x: [-2, 2, -2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
              >
                AS
              </motion.h1>
            </motion.div>

            {/* Animated rings */}
            <div className="relative h-32 w-32">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-neon/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
              
              {/* Center spinner */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-neon"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner glow */}
              <motion.div
                className="absolute inset-4 rounded-full bg-neon/20"
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Progress section */}
            <div className="w-80">
              {/* Loading text */}
              <motion.div
                key={loadingText}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 text-center font-mono text-sm text-neon"
              >
                {loadingText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </motion.div>

              {/* Progress bar container */}
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-neon/15">
                {/* Animated background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-neon/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Progress fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-neon via-neon-soft to-neon"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: "0 0 20px var(--neon), 0 0 40px var(--neon)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress percentage */}
              <div className="mt-3 flex items-center justify-between font-mono text-xs">
                <motion.span
                  className="text-muted-foreground"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading Portfolio
                </motion.span>
                <motion.span
                  className="text-neon font-bold"
                  key={Math.floor(progress)}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                >
                  {Math.floor(progress)}%
                </motion.span>
              </div>
            </div>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 font-mono text-xs text-muted-foreground"
            >
              Full Stack Developer · React Native · Node.js
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
