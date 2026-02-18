'use client';

import { motion } from 'framer-motion';
import { Lock, Globe, ShieldCheck, CheckCircle } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { trustBadges } from '@/lib/content';
import { Container } from '@/components/ui/Container';

const iconMap = {
  lock: Lock,
  globe: Globe,
  shield: ShieldCheck,
  check: CheckCircle,
} as const;

export function TrustBadges() {
  return (
    <section className="py-10 bg-bg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="flex items-center justify-center gap-6 flex-wrap px-6 py-4 bg-bg-card backdrop-blur-md border border-border rounded-lg"
        >
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon];
            return (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="w-px h-6 bg-border max-md:hidden" />
                )}
                <div className="flex items-center gap-2.5 px-2">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-text-secondary whitespace-nowrap">
                    {badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
