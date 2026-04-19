import { motion } from "framer-motion";
import { RevealText } from "./RevealText";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-32 md:px-10 md:py-48">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-lime opacity-15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1600px]">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
          ✦ Contact / Let's build
        </span>
        <h2 className="display mt-8 text-[clamp(3rem,12vw,12rem)] text-ink">
          <div>
            <RevealText>Got an idea?</RevealText>
          </div>
          <div className="text-lime">
            <RevealText delay={0.1}>Let's ship it.</RevealText>
          </div>
        </h2>

        <div className="mt-16 flex flex-wrap items-center gap-6">
          <MagneticButton
            href="mailto:shaantaji55@gmail.com"
            cursorLabel="Email me ✶"
            className="text-base"
          >
            shaantaji55@gmail.com
          </MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/shaan-taji"
            cursorLabel="LinkedIn ↗"
          >
            LinkedIn
          </MagneticButton>
        </div>

        <div className="mt-32 grid gap-10 border-t border-ink-10 pt-10 md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Email
            </div>
            <a
              href="mailto:shaantaji55@gmail.com"
              data-cursor="Copy ✶"
              className="mt-2 block text-lg text-ink hover:text-lime"
            >
              shaantaji55@gmail.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Social
            </div>
            <a
              href="https://www.linkedin.com/in/shaan-taji"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-lg text-ink hover:text-lime"
            >
              linkedin.com/in/shaan-taji ↗
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Status
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg text-ink">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
              Open to opportunities
            </div>
          </div>
        </div>

        <footer className="mt-32 flex flex-wrap items-center justify-between gap-4 border-t border-ink-10 pt-8 font-mono text-[10px] uppercase tracking-widest text-ink/50">
          <span>© {new Date().getFullYear()} Shaan Taji</span>
          <span>Always learning more · Always coding more</span>
          <span>Built with TanStack + Framer Motion</span>
        </footer>
      </div>
    </section>
  );
}
