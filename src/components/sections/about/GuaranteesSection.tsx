'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, BarChart3 } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const guaranteeData = [
  {
    title: 'Satisfait ou remboursé 30 jours',
    description: "Si nos équipements ne répondent pas à vos attentes, nous les reprenons et vous remboursons intégralement. Sans condition.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: 'Installation rapide',
    description: "Installation rapide et professionnelle par nos techniciens certifiés. Nous respectons nos délais et votre temps.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: '99,5% disponibilité',
    description: "Nos équipements sont garantis disponibles 99,5% du temps. En cas de panne, intervention sous 4h.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export function GuaranteesSection() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <SectionHeader
          tag="Nos engagements"
          title={<>La garantie <span className="text-primary">CashMonetik</span></>}
          subtitle="Ce qui nous différencie vraiment de la concurrence."
        />
        <motion.div
          className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {guaranteeData.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="p-8 rounded-lg bg-bg-card border border-[rgba(59,130,246,0.12)] transition-all duration-400 ease-out-custom hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-sm bg-primary-glow border border-[rgba(59,130,246,0.15)] flex items-center justify-center text-primary mb-5">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
