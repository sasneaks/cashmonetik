'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { siteConfig } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function CtaFinal() {
  return (
    <section className="relative py-20 max-md:py-12 bg-bg overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.1)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.06)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-[660px] mx-auto"
        >
          {/* Tag */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 font-display text-xs font-bold text-primary uppercase tracking-[0.12em] mb-6 px-[18px] py-1.5 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full"
          >
            Passez à l&apos;action
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4"
          >
            Prêt à <span className="text-primary">moderniser</span> votre commerce ?
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-[1.05rem] text-text-secondary leading-relaxed mb-10"
          >
            Demandez un audit gratuit de 30 minutes. Un expert analyse vos besoins
            et vous recommande la solution idéale, sans engagement.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Button href="/contact" variant="glow" size="xl" arrow>
              Demander un audit gratuit
            </Button>
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="outline"
              size="xl"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
