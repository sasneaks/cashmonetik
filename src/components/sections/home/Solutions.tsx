'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { solutions } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Solutions() {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    },
    []
  );

  return (
    <section id="solutions" className="py-20 max-md:py-12 bg-bg">
      <Container>
        <SectionHeader
          tag="Nos solutions"
          title={
            <>
              Des équipements <span className="text-primary">adaptés</span> à votre métier
            </>
          }
          subtitle="Chaque solution est pensée pour répondre aux défis spécifiques de votre commerce."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 auto-rows-fr"
        >
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              onMouseMove={handleMouseMove}
              className={cn(
                'group relative p-0 bg-bg-card backdrop-blur-sm border border-border rounded-md overflow-hidden transition-all duration-500 hover:border-border-hover',
                'after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100',
                'after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.06),transparent_60%)]',
                solution.featured && 'row-span-2 max-lg:row-span-1'
              )}
            >
              {/* Badge */}
              {solution.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={cn(
                      'inline-flex items-center px-3 py-1 text-[11px] font-display font-bold rounded-full',
                      solution.badgeColor === 'green'
                        ? 'text-emerald-400 bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)]'
                        : 'text-primary bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]'
                    )}
                  >
                    {solution.badge}
                  </span>
                </div>
              )}

              {/* Image area */}
              <div
                className={cn(
                  'relative w-full bg-bg-elevated flex items-center justify-center overflow-hidden',
                  solution.featured ? 'h-[240px] max-lg:h-[180px]' : 'h-[180px]'
                )}
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out-custom"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="font-display text-lg font-bold mb-2">{solution.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-5">
                  {solution.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="outline" size="sm" arrow>
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Catalogue link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.3}
          className="text-center mt-12"
        >
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm hover:gap-3 transition-all duration-300 group"
          >
            Voir le catalogue complet
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
