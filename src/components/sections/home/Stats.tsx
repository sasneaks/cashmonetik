'use client';

import { useEffect, useRef } from 'react';
import { stats } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let gsapModule: typeof import('@/lib/gsap') | null = null;

    const init = async () => {
      gsapModule = await import('@/lib/gsap');
      const { gsap, ScrollTrigger } = gsapModule;

      if (!sectionRef.current || hasAnimated.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          hasAnimated.current = true;

          countersRef.current.forEach((el, i) => {
            if (!el) return;
            const target = stats[i].value;
            const obj = { val: 0 };

            gsap.to(obj, {
              val: target,
              duration: 2,
              delay: i * 0.15,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toString();
              },
            });
          });
        },
      });
    };

    init();

    return () => {
      if (gsapModule) {
        gsapModule.ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 max-md:py-12 bg-bg border-t border-b border-border"
    >
      <Container>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col items-center text-center py-6 px-4',
                i > 0 && 'border-l border-border max-sm:border-l-0',
                i >= 2 && 'max-md:border-t max-md:border-border',
                i >= 1 && 'max-sm:border-t max-sm:border-border'
              )}
            >
              <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-none mb-2">
                <span
                  ref={(el) => {
                    countersRef.current[i] = el;
                  }}
                >
                  0
                </span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <span className="text-sm text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
