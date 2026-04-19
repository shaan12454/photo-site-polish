import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Want a website?",
  "Need bold animations?",
  "Building something wild?",
  "Contact me →",
];

export function Intro({ onDone }: { onDone: () => void }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [exiting, setExiting] = useState(false);

  // Typewriter
  useEffect(() => {
    const current = phrases[phraseIdx];
    let i = 0;
    setTyped("");
    const typeId = setInterval(() => {
      i++;
      setTyped(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(typeId);
        setTimeout(() => {
          setPhraseIdx((p) => (p + 1) % phrases.length);
        }, 1100);
      }
    }, 55);
    return () => clearInterval(typeId);
  }, [phraseIdx]);

  // No auto-dismiss — wait for user click

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!exiting && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
          onClick={() => setExiting(true)}
        >
          {/* Drifting glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-lime opacity-30 blur-[140px]"
          />

          {/* Name */}
          <h1 className="display relative text-[clamp(3.5rem,14vw,12rem)] text-ink">
            {"Shaan".split("").map((ch, i) => (
              <motion.span
                key={`s-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            <span className="inline-block w-[0.3em]" />
            {"Taji".split("").map((ch, i) => (
              <motion.span
                key={`t-${i}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 140 }}
              className="ml-3 inline-block h-[0.18em] w-[0.18em] -translate-y-[0.6em] rounded-full bg-lime glow-lime"
            />
          </h1>

          {/* Typewriter line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex min-h-[2em] items-center font-mono text-base uppercase tracking-[0.25em] text-ink/80 md:text-lg"
          >
            <span className="mr-2 text-lime">›</span>
            <span>{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="ml-1 inline-block h-[1em] w-[2px] bg-lime"
            />
          </motion.div>

          {/* Enter button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setExiting(true);
            }}
            data-cursor="Enter ✦"
            className="group relative mt-16 overflow-hidden rounded-full border border-lime/40 bg-lime/5 px-10 py-4 font-mono text-xs uppercase tracking-[0.3em] text-lime backdrop-blur-sm transition-all hover:border-lime hover:bg-lime hover:text-void"
          >
            <span className="relative z-10">See projects ↓</span>
            <motion.span
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-lime/20 to-transparent"
            />
          </motion.button>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="absolute bottom-10 font-mono text-[10px] uppercase tracking-widest text-ink/40"
          >
            ✦ click anywhere to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
