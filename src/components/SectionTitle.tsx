import { motion } from "framer-motion";

export function SectionTitle({
  index,
  comment,
  title,
}: {
  index: string;
  comment: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <motion.p
        className="mb-2 font-mono text-sm text-neon"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        // {comment}
      </motion.p>
      <div className="flex items-baseline gap-4">
        <motion.span
          className="font-mono text-2xl text-neon"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {index}.
        </motion.span>
        <motion.h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {title}
        </motion.h2>
        <motion.span
          className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  );
}
