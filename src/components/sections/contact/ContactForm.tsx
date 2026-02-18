'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { siteConfig } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const contactItems = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: siteConfig.hours,
  },
];

const sectorOptions = [
  'Boulangerie',
  'Tabac',
  'Supermarché',
  'Pharmacie',
  'Autre',
];

const inputClasses =
  'w-full bg-bg-elevated border border-border rounded-sm px-4 py-3 text-text text-sm placeholder:text-text-tertiary focus:border-primary focus:outline-none transition-colors duration-200';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-base leading-relaxed mb-10"
            >
              Notre équipe commerciale est à votre disposition pour répondre à
              toutes vos questions et vous accompagner dans le choix de la
              solution la plus adaptée à votre activité.
            </motion.p>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i * 0.1}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)]">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text text-sm font-medium hover:text-primary transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text text-sm font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={0.2}
          >
            <div className="relative bg-bg-card backdrop-blur-xl border border-border rounded-lg p-8 max-md:p-6">
              {/* Radial glow behind form */}
              <div className="absolute -inset-px -z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Nous vous recontactons sous 2h ouvrées.
                  </p>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/support@cashmonetik.fr"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="space-y-5"
                >
                  {/* Honeypot */}
                  <div style={{ display: 'none' }}>
                    <input type="text" name="_honey" />
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://cashmonetik.fr/contact?success=true"
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jean Dupont"
                      className={inputClasses}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jean@exemple.fr"
                      className={inputClasses}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="06 12 34 56 78"
                      className={inputClasses}
                    />
                  </div>

                  {/* Sector */}
                  <div>
                    <label
                      htmlFor="sector"
                      className="block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2"
                    >
                      Secteur d&apos;activité *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      className={cn(inputClasses, 'appearance-none cursor-pointer')}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choisir un secteur
                      </option>
                      {sectorOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-display font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Décrivez votre besoin..."
                      className={cn(inputClasses, 'resize-none')}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="primary" size="lg" fullWidth arrow>
                    Envoyer le message
                  </Button>

                  {/* Response time badge */}
                  <p className="flex items-center justify-center gap-2 text-xs text-text-tertiary mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Réponse sous 2h ouvrées
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
