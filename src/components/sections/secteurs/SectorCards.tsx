'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { sectorCards } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function SectorCards() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <SectionHeader
          tag="Nos secteurs"
          title={
            <>
              Des solutions pour{' '}
              <span className="text-gradient">chaque métier</span>
            </>
          }
          subtitle="Découvrez nos équipements adaptés à votre secteur d'activité."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sectorCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              custom={index * 0.1}
              className="group [perspective:1000px]"
            >
              <div
                className={cn(
                  'relative w-full h-[320px] transition-transform duration-700 ease-out-custom',
                  '[transform-style:preserve-3d]',
                  'group-hover:[transform:rotateY(180deg)]'
                )}
              >
                {/* Front */}
                <div
                  className={cn(
                    'absolute inset-0',
                    'bg-bg-elevated border border-border rounded-lg',
                    'flex flex-col items-center justify-center p-6 text-center',
                    'transition-colors duration-300 group-hover:border-border-hover'
                  )}
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className="w-20 h-20 mb-6 relative flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      fill
                      className={cn('object-contain', card.title === 'Supermarchés' && 'icon-white')}
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3 text-text">
                    {card.title}
                  </h3>
                  <span className="text-xs text-text-tertiary font-display uppercase tracking-[0.1em]">
                    Survoler pour découvrir
                  </span>
                </div>

                {/* Back */}
                <div
                  className={cn(
                    'absolute inset-0 [transform:rotateY(180deg)]',
                    'bg-bg-elevated border border-[rgba(59,130,246,0.2)] rounded-lg',
                    'flex flex-col justify-between p-6'
                  )}
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div>
                    <h3 className="font-display text-base font-bold mb-2 text-primary">
                      {card.backTitle}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {card.backDescription}
                    </p>
                    <ul className="space-y-2">
                      {card.backFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    fullWidth
                    arrow
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
