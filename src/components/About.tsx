import { motion } from "framer-motion";
import { RevealText } from "./RevealText";

export function About() {
  const stack = [
    "React", "TypeScript", "Next.js", "TanStack", "Tailwind",
    "Framer Motion", "Node", "Postgres", "Vercel", "Railway",
  ];
  return (
    <section className="relative px-4 py-32 md:px-10 md:py-48">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
            ✦ About
          </span>
        </div>
        <div className="md:col-span-8">
          <h2 className="display text-[clamp(2rem,5vw,5rem)] text-ink">
            <RevealText>I'm a self-driven web</RevealText>{" "}
            <RevealText delay={0.05}>developer who treats</RevealText>{" "}
            <RevealText delay={0.1}>the browser like a</RevealText>{" "}
            <span className="text-lime">
              <RevealText delay={0.15}>canvas.</RevealText>
            </span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/70">
            I build sites that move, react, and feel alive — interfaces with
            opinions. Every project teaches me something new, and that loop of
            building → breaking → learning is the part I'm addicted to.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { k: "03+", v: "Live projects" },
              { k: "∞", v: "Learning" },
              { k: "100%", v: "Curiosity" },
              { k: "24/7", v: "Shipping mode" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="border-t border-ink-20 pt-4"
              >
                <div className="display text-4xl text-ink">{s.k}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink/50">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
              Stack / Tools
            </span>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4, backgroundColor: "var(--accent-lime)", color: "var(--void)" }}
                  className="cursor-none rounded-full border border-ink-20 px-4 py-2 text-sm text-ink/80 transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
