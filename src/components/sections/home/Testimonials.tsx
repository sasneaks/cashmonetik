'use client';

import { useEffect, useRef } from 'react';
import { testimonials } from '@/lib/content';
import { Container } from '@/components/ui/Container';

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let gsapModule: typeof import('@/lib/gsap') | null = null;

    const init = async () => {
      gsapModule = await import('@/lib/gsap');
      const { gsap, ScrollTrigger } = gsapModule;

      if (!sectionRef.current) return;

      const slides = sectionRef.current.querySelectorAll('.testimonial-slide');

      slides.forEach((slide) => {
        const quote = slide.querySelector('.testimonial-quote');
        const author = slide.querySelector('.testimonial-author');

        gsap.set([quote, author], { opacity: 0, y: 60 });

        ScrollTrigger.create({
          trigger: slide,
          start: 'top 65%',
          end: 'bottom 35%',
          scrub: 0.8,
          onEnter: () => {
            gsap.to(quote, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
            });
            gsap.to(author, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.2,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to([quote, author], {
              opacity: 0,
              y: 60,
              duration: 0.6,
              ease: 'power3.in',
            });
          },
        });
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
    <section ref={sectionRef} className="bg-bg">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="testimonial-slide min-h-[80vh] flex items-center border-t border-border"
        >
          <Container className="max-w-[800px] py-24 max-md:py-16">
            <div className="text-center">
              {/* Large quote mark */}
              <div className="font-display text-[6rem] max-md:text-[4rem] leading-none text-primary opacity-20 mb-4 select-none">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.3] tracking-[-0.02em] mb-10">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="testimonial-author flex items-center justify-center gap-4">
                {/* Initials avatar */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm font-bold text-white">
                    {testimonial.initials}
                  </span>
                </div>

                <div className="text-left">
                  <p className="font-display font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
}
