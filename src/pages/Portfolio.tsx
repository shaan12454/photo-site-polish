import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, MessageCircle, Github } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

const myProjects = [
  {
    name: 'Pause and Say',
    description: 'An interactive web app for mindful communication and expression.',
    url: 'https://pause-and-say.up.railway.app/',
    icon: MessageCircle,
  },
  {
    name: 'Grid Serpent',
    description: 'A snake-inspired game with unique challenges and twists.',
    url: 'https://grid-serpent.up.railway.app/',
    icon: Gamepad2,
  },
];

export default function Portfolio() {
  return (
    <>
      <SEOHead title="Portfolio" description="Check out my projects — Pause and Say, Grid Serpent, and more." />

      <div className="min-h-screen">
        <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">My Projects</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Interactive apps and games I've built — try them right here!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20">
            {myProjects.map((project, index) => (
              <ScrollReveal key={project.name} delay={index * 0.15}>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-accent">
                        <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">{project.name}</h2>
                        <p className="text-muted-foreground font-light text-xs sm:text-sm">{project.description}</p>
                      </div>
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors text-sm font-light self-start sm:self-auto">
                      Open in new tab
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card">
                    <div className="aspect-video w-full">
                      <iframe src={project.url} title={project.name} className="w-full h-full border-0" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <Github className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-foreground" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">More on GitHub</h2>
              <p className="text-muted-foreground font-light text-sm sm:text-base">Check out my other projects and contributions</p>
              <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                <Github className="w-5 h-5" />
                Visit GitHub Profile
              </a>
            </div>
          </ScrollReveal>
        </section>

        <div className="h-16 sm:h-24" />
      </div>
    </>
  );
}
