import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RevealText } from "@/components/RevealText";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-4 pt-28 md:px-10 md:pt-32">
      {/* static glow orbs — no scroll parallax to prevent floating-on-scroll */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-lime opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-4 font-mono text-xs uppercase tracking-widest text-ink/60">
          <span>✦ Kerala, IN — {time}</span>
          <span>Portfolio / 2025—Now</span>
        </div>

        <h1 className="display mt-12 text-[clamp(3.5rem,14vw,15rem)] text-ink">
          <div>
            <RevealText>Shaan</RevealText>
          </div>
          <div className="flex flex-wrap items-center gap-x-6">
            <RevealText delay={0.1}>Taji.</RevealText>
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              className="inline-block h-[0.7em] w-[0.7em] rounded-full bg-lime glow-lime"
            />
          </div>
          <div className="text-ink/40">
            <RevealText delay={0.2}>Code &</RevealText>{" "}
            <RevealText delay={0.3}>chaos</RevealText>
          </div>
          <div>
            <RevealText delay={0.4}>for the web.</RevealText>
          </div>
        </h1>

        <div className="mt-16 grid grid-cols-1 items-end gap-10 md:grid-cols-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-md text-base leading-relaxed text-ink/70 md:col-start-2"
          >
            Web developer building bold, animated, performance-obsessed
            interfaces. Always learning more, always shipping more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 md:justify-end"
          >
            <MagneticButton href="#works" cursorLabel="See works ↓">
              See works
            </MagneticButton>
            <MagneticButton href="#contact" cursorLabel="Say hi ✶">
              Get in touch →
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/50">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-8 w-px bg-ink/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
