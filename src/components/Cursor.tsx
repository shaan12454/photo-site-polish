import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,[data-cursor]");
      setHover(!!interactive);
      setLabel(interactive?.getAttribute("data-cursor") ?? null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
      >
        <motion.div
          animate={{ scale: hover ? 3.2 : 1, opacity: hover ? 0.95 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-lime mix-blend-difference"
          style={{ width: 14, height: 14 }}
        />
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-6 top-6 whitespace-nowrap rounded-full bg-lime px-3 py-1 text-xs font-medium text-void"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
