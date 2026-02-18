'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Container } from './Container';

interface PageHeroProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-32 pb-14 max-md:pt-24 max-md:pb-10 text-center relative bg-gradient-to-b from-[rgba(59,130,246,0.06)] to-transparent">
      <Container>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 font-display text-xs font-bold text-primary uppercase tracking-[0.12em] mb-6 px-[18px] py-1.5 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full"
        >
          {tag}
        </motion.span>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="text-base max-md:text-sm text-text-secondary max-w-[560px] mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
