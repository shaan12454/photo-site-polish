import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton({
  children,
  href,
  className = "",
  cursorLabel,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  cursorLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.4);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      data-cursor={cursorLabel}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-ink-20 px-8 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:text-void ${className}`}
    >
      <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-lime transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100" />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
