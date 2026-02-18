'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { sectors } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Sectors() {
  return (
    <section id="sectors" className="py-20 max-md:py-12 bg-bg">
      <Container>
        <SectionHeader
          tag="Secteurs"
          title={
            <>
              Des solutions pour <span className="text-primary">chaque métier</span>
            </>
          }
          subtitle="Nos équipements sont pensés et configurés pour les contraintes spécifiques de votre secteur."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5"
        >
          {sectors.map((sector, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Link
                href="/secteurs"
                className="group flex flex-col items-center text-center p-6 bg-bg-card backdrop-blur-sm border border-border rounded-md transition-all duration-500 hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1 h-full"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-5 relative flex items-center justify-center">
                  <Image
                    src={sector.icon}
                    alt={sector.title}
                    width={64}
                    height={64}
                    className={`object-contain ${sector.title === 'Supermarchés' ? 'icon-white' : ''}`}
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold mb-2">{sector.title}</h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {sector.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 mt-auto">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
