'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { processSteps } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function ProcessSection() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <SectionHeader
          tag="Notre process"
          title={<>Comment <span className="text-primary">ça marche</span></>}
          subtitle="De votre premier contact à l'accompagnement continu, un processus simple et transparent."
        />
        <motion.div
          className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i * 0.1}
              className="p-8 rounded-lg bg-bg-card border border-border transition-all duration-400 ease-out-custom hover:bg-bg-card-hover hover:border-border-hover"
            >
              <div className="font-display text-[2.5rem] font-extrabold text-primary leading-none mb-5 opacity-60">
                {step.number}
              </div>
              <div className="font-display text-[11px] font-bold text-primary uppercase tracking-[0.08em] mb-2">
                {step.tag}
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Button href="/contact" variant="primary" size="lg" arrow>
            Démarrer mon projet
          </Button>
        </div>
      </Container>
    </section>
  );
}
