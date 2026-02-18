'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { features } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const featureIcons: Record<string, React.ReactNode> = {
  target: <Target className="w-6 h-6" />,
  shield: <ShieldCheck className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  trendingUp: <TrendingUp className="w-6 h-6" />,
};

export function FeaturesSection() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <SectionHeader
          tag="Nos avantages"
          title={<>Pourquoi <span className="text-primary">CashMonetik</span></>}
          subtitle="Des engagements concrets qui font la différence au quotidien pour votre commerce."
        />
        <motion.div
          className="grid grid-cols-2 gap-5 max-md:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="p-10 rounded-lg bg-bg-card border border-border transition-all duration-400 ease-out-custom hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1.5 relative"
            >
              <span className="absolute top-9 right-9 font-display text-5xl font-extrabold text-[rgba(255,255,255,0.03)] leading-none">
                0{i + 1}
              </span>
              <div className="w-[52px] h-[52px] rounded-md bg-primary-glow border border-[rgba(59,130,246,0.15)] flex items-center justify-center text-primary mb-6">
                {featureIcons[feature.icon]}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[0.95rem] text-text-secondary leading-[1.7] max-w-[400px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
