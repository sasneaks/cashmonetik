'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { faqItems } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="max-w-[800px] mx-auto space-y-3"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index * 0.06}
                className={cn(
                  'bg-bg-card backdrop-blur-xl border rounded-md overflow-hidden transition-colors duration-300',
                  isOpen
                    ? 'border-[rgba(59,130,246,0.3)]'
                    : 'border-border hover:border-border-hover'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full text-left px-6 py-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[15px] font-semibold text-text leading-snug">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 transition-colors duration-200',
                        isOpen ? 'text-primary' : 'text-text-tertiary'
                      )}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25, delay: 0.05 },
                      }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
