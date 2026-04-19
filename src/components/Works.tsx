import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "./RevealText";

type Project = {
  num: string;
  title: string;
  tag: string;
  url: string;
  description: string;
  stack: string[];
  status: "live" | "wip";
};

const projects: Project[] = [
  {
    num: "01",
    title: "Royal Plastics",
    tag: "Brand · Web Development",
    url: "https://royalplastics.vercel.app/",
    description:
      "A polished brand site for a plastics manufacturer — clean grid, smooth scroll, and a product showcase that feels industrial yet modern.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    status: "live",
  },
  {
    num: "02",
    title: "Pause & Say",
    tag: "Product · Wellness",
    url: "https://pause-and-say.up.railway.app/",
    description:
      "A mindful speaking companion in progress — pause, breathe, and say what matters. Currently being shaped into something soft and human.",
    stack: ["Next.js", "Railway", "TypeScript"],
    status: "wip",
  },
  {
    num: "03",
    title: "Grid Serpent",
    tag: "Game · Interactive",
    url: "https://grid-serpent.up.railway.app/",
    description:
      "A neon snake reimagined on an infinite grid — built for the browser, tuned for that one-more-go feeling.",
    stack: ["Canvas", "TypeScript", "Game Loop"],
    status: "live",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const reverse = i % 2 === 1;

  return (
    <motion.article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative grid grid-cols-1 gap-8 border-t border-ink-10 py-12 md:grid-cols-12 md:gap-10 md:py-20"
    >
      {/* Number + meta */}
      <div
        className={`md:col-span-3 ${reverse ? "md:order-3" : "md:order-1"}`}
      >
        <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-ink/50">
          <span className="text-lime">{p.num}</span>
          <span>/ 03</span>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink/60">
          {p.tag}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              p.status === "live" ? "bg-lime glow-lime" : "bg-amber-400"
            }`}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">
            {p.status === "live" ? "Live" : "In progress"}
          </span>
        </div>
      </div>

      {/* Live preview */}
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        data-cursor="Visit ↗"
        className={`relative block aspect-[16/10] overflow-hidden rounded-2xl border border-ink-10 bg-void md:col-span-6 ${
          reverse ? "md:order-2" : "md:order-2"
        }`}
      >
        {/* Lime glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 0.4 : 0 }}
          className="pointer-events-none absolute -inset-px z-0 rounded-2xl bg-lime blur-2xl"
        />
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <iframe
            src={p.url}
            title={p.title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 origin-center scale-[0.5] border-0"
          />
          {/* Subtle dark veil that lifts on hover */}
          <motion.div
            animate={{ opacity: hovered ? 0.1 : 0.55 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-void"
          />
          {/* Corner badge */}
          <motion.div
            animate={{
              y: hovered ? 0 : 10,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-lime px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-void"
          >
            Visit live ↗
          </motion.div>
        </div>
      </a>

      {/* Title + description */}
      <div
        className={`md:col-span-3 ${reverse ? "md:order-1" : "md:order-3"}`}
      >
        <motion.div style={{ y }}>
          <h3 className="display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-ink">
            <RevealText delay={i * 0.05}>{p.title}</RevealText>
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-ink/70">
            {p.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink-10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/60"
              >
                {s}
              </li>
            ))}
          </ul>
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            data-cursor="Open ↗"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-lime hover:gap-4 transition-all"
          >
            Open project <span aria-hidden>↗</span>
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function Works() {
  return (
    <section id="works" className="relative px-4 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-end justify-between pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
              ✦ Selected Works · 2024—Now
            </span>
            <h2 className="display mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-ink">
              <RevealText>Things I've</RevealText>{" "}
              <RevealText delay={0.1}>shipped.</RevealText>
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-ink/60 md:block">
            (03)
          </span>
        </div>
        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.num} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
