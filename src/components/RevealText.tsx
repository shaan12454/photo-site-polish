import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

export function RevealText({
  children,
  delay = 0,
  className = "",
  as = "span",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const MotionTag = motion(as as any);
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <MotionTag
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay, ease: [0.65, 0, 0.35, 1] }}
        className="inline-block"
      >
        {children}
      </MotionTag>
    </span>
  );
}
