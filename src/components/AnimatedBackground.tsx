import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Animated background:
 *  - Slow drifting gradient orbs (CSS/framer)
 *  - Subtle particle/star field on canvas
 *  - Fixed, behind everything, pointer-events: none
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(120, Math.floor((w * h) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.5 + 0.2,
      }));
    };

    const mouse = { x: w / 2, y: h / 2 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          p.x += (dx / dist) * 0.3;
          p.y += (dy / dist) * 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 230, ${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(210, 255, 100, ${(1 - d / 110) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Drifting color blobs */}
      <motion.div
        animate={{ x: [0, 120, -60, 0], y: [0, -80, 60, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full opacity-30 blur-[140px]"
        style={{ background: "var(--accent-lime)" }}
      />
      <motion.div
        animate={{ x: [0, -100, 80, 0], y: [0, 100, -60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-2/3 h-[500px] w-[500px] rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--accent-blue)" }}
      />
      <motion.div
        animate={{ x: [0, 60, -120, 0], y: [0, -120, 40, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/3 top-[120vh] h-[500px] w-[500px] rounded-full opacity-20 blur-[160px]"
        style={{ background: "oklch(0.75 0.2 320)" }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
