import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact" description={`Get in touch with ${photographerInfo.name} for collaborations and project inquiries.`} />

      <div className="min-h-screen">
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">Get in Touch</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light tracking-wide">Let's build something awesome together</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">Send a Message</h2>
                    <p className="text-muted-foreground font-light text-sm sm:text-base">Have an idea or want to collaborate? Drop me a message!</p>
                  </div>
                  <ContactForm />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">Contact Information</h2>
                    <p className="text-muted-foreground font-light text-sm sm:text-base">Prefer to reach out directly? Here's how you can contact me.</p>
                  </div>

                  <Separator />

                  <div className="space-y-5 sm:space-y-6">
                    <motion.div className="flex items-start gap-3 sm:gap-4" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <div className="p-2.5 sm:p-3 rounded-lg bg-accent">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-light tracking-wide text-muted-foreground">Email</p>
                        <a href={`mailto:${photographerInfo.email}`} className="text-sm sm:text-base md:text-lg font-light hover:text-muted-foreground transition-colors break-all">
                          {photographerInfo.email}
                        </a>
                      </div>
                    </motion.div>

                    {photographerInfo.discord && (
                      <motion.div className="flex items-start gap-3 sm:gap-4" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <div className="p-2.5 sm:p-3 rounded-lg bg-accent">
                          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-light tracking-wide text-muted-foreground">Discord</p>
                          <p className="text-sm sm:text-base md:text-lg font-light">{photographerInfo.discord}</p>
                        </div>
                      </motion.div>
                    )}

                    <motion.div className="flex items-start gap-3 sm:gap-4" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <div className="p-2.5 sm:p-3 rounded-lg bg-accent">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm font-light tracking-wide text-muted-foreground">Location</p>
                        <p className="text-sm sm:text-base md:text-lg font-light">{photographerInfo.location}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="h-12 sm:h-16" />
      </div>
    </>
  );
}
