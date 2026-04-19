import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-5 md:px-10 transition-colors ${
        scrolled ? "backdrop-blur-md bg-void/60 border-b border-ink-10" : ""
      }`}
    >
      <a href="#top" data-cursor="Top ↑" className="font-mono text-sm font-semibold tracking-tight text-ink">
        S—T<span className="text-lime">.</span>
      </a>
      <div className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-ink/70 md:flex">
        <a href="#works" data-cursor="↓" className="hover:text-lime">Works</a>
        <a href="#about" data-cursor="↓" className="hover:text-lime">About</a>
        <a href="#contact" data-cursor="↓" className="hover:text-lime">Contact</a>
      </div>
      <a
        href="mailto:shaantaji55@gmail.com"
        data-cursor="Email ✶"
        className="rounded-full border border-ink-20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-ink hover:bg-lime hover:text-void hover:border-transparent transition-colors"
      >
        Hire me
      </a>
    </motion.nav>
  );
}
