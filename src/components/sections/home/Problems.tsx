'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, ClipboardCheck, LockOpen, Shield, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { problems } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const iconMap = {
  alertCircle: AlertCircle,
  clock: Clock,
  clipboard: ClipboardCheck,
  lockOpen: LockOpen,
  shield: Shield,
  sparkles: Sparkles,
} as const;

export function Problems() {
  return (
    <section id="problems" className="py-20 max-md:py-12 bg-bg">
      <Container>
        <SectionHeader
          tag="Le constat"
          title={
            <>
              Votre commerce <span className="text-primary">perd de l&apos;argent</span> chaque jour
            </>
          }
          subtitle="Les problèmes que rencontrent 90% des commerces de proximité."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-5 max-lg:grid-cols-2 gap-5 max-sm:gap-3"
        >
          {problems.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-6 max-sm:p-4 bg-bg-card backdrop-blur-sm border border-border rounded-md overflow-hidden transition-all duration-500 hover:bg-bg-card-hover hover:border-border-hover"
              >
                {/* Red top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.15)]">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-display font-bold text-red-400 bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.15)] rounded-full">
                    {problem.stat}
                  </span>
                </div>

                <h3 className="font-display text-base max-sm:text-sm font-bold mb-2 max-sm:mb-1">{problem.title}</h3>
                <p className="text-sm max-sm:text-xs text-text-secondary leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pivot text */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.3}
          className="text-center text-text-secondary mt-10 max-md:mt-8 text-base"
        >
          CashMonetik résout ces problèmes.{' '}
          <strong className="text-text font-bold">Définitivement.</strong>
        </motion.p>
      </Container>
    </section>
  );
}
