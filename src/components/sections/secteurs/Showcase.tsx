'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { showcaseData } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = showcaseData[activeIndex];

  return (
    <section className="relative py-16 max-md:py-10 overflow-hidden min-h-[600px]">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/80 to-bg/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[400px]">
          {/* Left: Showcase title + description */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-flex items-center gap-2 font-display text-xs font-bold text-primary uppercase tracking-[0.12em] mb-6 px-[18px] py-1.5 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full">
                  Secteurs
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                  {active.title}
                </h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-[480px]">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Navigation tabs */}
          <div className="space-y-3">
            {showcaseData.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'w-full flex items-center gap-4 p-4 rounded-md border text-left transition-all duration-300',
                  index === activeIndex
                    ? 'bg-[rgba(59,130,246,0.08)] border-[rgba(59,130,246,0.3)] shadow-[0_0_20px_rgba(59,130,246,0.08)]'
                    : 'bg-bg-card/60 backdrop-blur-sm border-border hover:border-border-hover hover:bg-bg-card-hover'
                )}
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 border border-border">
                  <Image
                    src={item.image}
                    alt={item.navTitle}
                    fill
                    className="object-cover"
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <span
                    className={cn(
                      'block font-display text-xs font-bold uppercase tracking-[0.1em] mb-0.5 transition-colors duration-200',
                      index === activeIndex ? 'text-primary' : 'text-text'
                    )}
                  >
                    {item.navTitle}
                  </span>
                  <span className="block text-sm text-text-secondary truncate">
                    {item.navDesc}
                  </span>
                </div>

                {/* Active indicator */}
                {index === activeIndex && (
                  <motion.div
                    layoutId="showcase-indicator"
                    className="ml-auto w-2 h-2 rounded-full bg-primary flex-shrink-0"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
