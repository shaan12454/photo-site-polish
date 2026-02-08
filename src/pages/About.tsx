import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function About() {
  return (
    <>
      <SEOHead title="About" description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}.`} />

      <div className="min-h-screen">
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">About Me</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light tracking-wide">Developer & Tech Enthusiast</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
            <ScrollReveal>
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">{photographerInfo.name}</h2>
                <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide">{photographerInfo.tagline}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}><Separator /></ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground">{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {photographerInfo.interests.map((interest) => (
                    <span key={interest} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-accent rounded-full text-accent-foreground transition-shadow">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex items-center gap-3 sm:gap-4">
                {photographerInfo.socialLinks.instagram && (
                  <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 border border-border rounded-lg hover:bg-accent transition-all" aria-label="Instagram">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.linkedin && (
                  <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 border border-border rounded-lg hover:bg-accent transition-all" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.github && (
                  <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 border border-border rounded-lg hover:bg-accent transition-all" aria-label="GitHub">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="pt-4 space-y-3 p-4 sm:p-6 rounded-2xl bg-card border border-border">
                <div className="text-xs sm:text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${photographerInfo.email}`} className="text-foreground hover:text-muted-foreground transition-colors break-all">{photographerInfo.email}</a>
                </div>
                {photographerInfo.discord && (
                  <div className="text-xs sm:text-sm font-light tracking-wide flex items-center gap-2">
                    <span className="text-muted-foreground">Discord: </span>
                    <span className="text-foreground">{photographerInfo.discord}</span>
                  </div>
                )}
                <div className="text-xs sm:text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Location: </span>
                  <span className="text-foreground">{photographerInfo.location}</span>
                </div>
                <div className="text-xs sm:text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Education: </span>
                  <span className="text-foreground">{photographerInfo.education}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
