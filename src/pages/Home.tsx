import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Code, Cpu, Gamepad2, Rocket, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SecretTrigger } from '@/components/secret/SecretTrigger';

export default function Home() {
  return (
    <>
      <SEOHead title="Shaan Taji - Young Developer & Tech Enthusiast" description="15-year-old developer from Kerala, India. Passionate about web development, Python, AI, and future tech." />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay muted loop playsInline preload="metadata"
             
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLVideoElement).style.opacity = '0'; }}
            >
              <source src="/14478075_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6">
            <motion.div
              className="text-center space-y-4 sm:space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Link to="/about" className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors text-center">
                  Learn More
                </Link>
                <Link to="/contact" className="px-6 py-3 border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 sm:bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">Who I Am</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-base sm:text-lg font-light leading-relaxed text-muted-foreground text-left">
                {photographerInfo.biography.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/about" className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group">
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-16 sm:py-24 md:py-32 border-t border-border bg-muted/10">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16 space-y-4 px-4 sm:px-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">What I Love</h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light tracking-wide">My passions and interests</p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Code, title: 'Web Development', desc: 'Building beautiful, functional websites' },
              { icon: Cpu, title: 'Python & AI', desc: 'Creating apps and exploring AI coding' },
              { icon: Rocket, title: 'Future Tech', desc: 'Robotics, VR, and cutting-edge innovations' }
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15}>
                <motion.div
                  className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-4 text-primary" />
                  <h3 className="text-lg sm:text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm sm:text-base">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 sm:py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16 space-y-4 px-4 sm:px-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">My Projects</h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light tracking-wide">Things I've built</p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {photographerInfo.projects.map((project, index) => (
              <ScrollReveal key={project.name} delay={index * 0.15}>
                <motion.div
                  className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Gamepad2 className="w-7 h-7 sm:w-8 sm:h-8 mb-4 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-medium mb-2">{project.name}</h3>
                  <p className="text-muted-foreground font-light text-sm sm:text-base">{project.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-12 sm:mt-16 px-4 sm:px-6">
              <Link to="/portfolio" className="group inline-flex items-center gap-2 text-base sm:text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors">
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* GitHub CTA */}
        <section className="py-12 sm:py-16 md:py-24 border-t border-border bg-muted/10">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center space-y-6 px-4 sm:px-6">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="inline-block">
                <Github className="w-10 h-10 sm:w-12 sm:h-12 text-foreground" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide">Find me on GitHub</h2>
              <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                <Github className="w-5 h-5" />
                @shaan12454
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* Secret Trigger */}
        <div className="py-8 flex justify-center">
          <SecretTrigger />
        </div>
      </div>
    </>
  );
}
