'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-14 max-md:mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 font-display text-xs font-bold text-primary uppercase tracking-[0.12em] mb-6 px-[18px] py-1.5 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-[0.95rem] max-md:text-sm text-text-secondary max-w-[560px] mx-auto mt-3"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
