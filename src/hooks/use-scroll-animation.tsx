import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.3 });

  return { ref, isInView };
}
