import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Marquee } from "@/components/Marquee";
import { Works } from "@/components/Works";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Intro";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main id="top" className="relative grain bg-void text-ink">
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Cursor />
      <AnimatedBackground />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <Marquee
          items={[
            "Web Development",
            "Creative Code",
            "Animation",
            "Always Learning",
            "Shipping Mode",
          ]}
        />
        <section id="works">
          <Works />
        </section>
        <section id="about">
          <About />
        </section>
        <Contact />
      </div>
    </main>
  );
}

