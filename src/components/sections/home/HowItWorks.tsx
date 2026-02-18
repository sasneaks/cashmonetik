'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Headphones } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { howItWorks } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

const iconMap = {
  clock: Clock,
  zap: Zap,
  headphones: Headphones,
} as const;

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!isDesktop || typeof window === 'undefined') return;

    let gsapModule: typeof import('@/lib/gsap') | null = null;

    const init = async () => {
      gsapModule = await import('@/lib/gsap');
      const { ScrollTrigger } = gsapModule;

      if (!sectionRef.current || !stepsRef.current) return;

      const steps = stepsRef.current.querySelectorAll('.how-step');

      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i),
        });
      });
    };

    init();

    return () => {
      if (gsapModule) {
        gsapModule.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, [isDesktop]);

  const progress = ((activeStep + 1) / howItWorks.length) * 100;

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 max-md:py-12 bg-bg">
      <Container>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-10">
          {/* Left side - sticky on desktop */}
          <div className={cn(isDesktop && 'sticky top-32 self-start')}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 font-display text-xs font-bold text-primary uppercase tracking-[0.12em] mb-6 px-[18px] py-1.5 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full"
              >
                Comment ça marche
              </motion.span>

              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4"
              >
                Opérationnel en{' '}
                <span className="text-primary">3 étapes</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-text-secondary text-[1.05rem] leading-relaxed mb-8 max-w-[440px]"
              >
                Du premier contact à l&apos;installation, tout est pris en charge.
                Simple, rapide, clé en main.
              </motion.p>

              {/* Progress bar */}
              <motion.div variants={fadeUp} custom={0.3}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-display text-text-tertiary uppercase tracking-wider">
                    Progression
                  </span>
                  <span className="text-xs font-display text-text-tertiary">
                    {activeStep + 1}/{howItWorks.length}
                  </span>
                </div>
                <div className="h-1 bg-bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700 ease-out-custom"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - steps */}
          <div ref={stepsRef} className="space-y-8 max-lg:space-y-6">
            {howItWorks.map((step, i) => {
              const Icon = iconMap[step.detailIcon];
              const isActive = isDesktop ? activeStep === i : true;

              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  custom={i * 0.1}
                  className={cn(
                    'how-step p-8 max-md:p-6 bg-bg-card border border-border rounded-md transition-all duration-500',
                    isActive
                      ? 'border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.04)]'
                      : 'opacity-50'
                  )}
                >
                  <div className="flex items-start gap-6">
                    {/* Large step number */}
                    <span
                      className={cn(
                        'font-display text-5xl max-md:text-4xl font-extrabold tracking-[-0.04em] transition-colors duration-500',
                        isActive ? 'text-primary' : 'text-text-tertiary'
                      )}
                    >
                      {step.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Detail pill */}
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-display font-semibold text-primary bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.15)] rounded-full">
                        <Icon className="w-3.5 h-3.5" />
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
