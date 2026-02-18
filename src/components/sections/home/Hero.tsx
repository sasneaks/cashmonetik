'use client';

import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'popmotion';
import { Phone } from 'lucide-react';
import { heroTypedStrings } from '@/lib/content';
import { useTypedText } from '@/hooks/useTypedText';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/* ─── Spring entrance hook ─── */
function useSpringIn(delay: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';

    const t = setTimeout(() => {
      animate({
        from: 0,
        to: 1,
        duration: 800,
        onUpdate: (v) => {
          el.style.opacity = String(v);
        },
      });
      animate({
        from: 32,
        to: 0,
        type: 'spring',
        stiffness: 100,
        damping: 16,
        mass: 1,
        onUpdate: (v) => {
          el.style.transform = `translateY(${v}px)`;
        },
      });
    }, delay);

    return () => clearTimeout(t);
  }, [delay]);

  return ref;
}

/* ─── Spring-animated counter ─── */
function SpringCounter({
  target,
  suffix = '',
  delay = 1000,
}: {
  target: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const t = setTimeout(() => {
      animate({
        from: 0,
        to: target,
        type: 'spring',
        stiffness: 40,
        damping: 22,
        mass: 1.5,
        onUpdate: (v) => {
          el.textContent = `${Math.round(v).toLocaleString('fr-FR')}${suffix}`;
        },
      });
    }, delay);

    return () => clearTimeout(t);
  }, [target, suffix, delay]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}

/* ─── Magnetic wrapper ─── */
function Magnetic({
  children,
  strength = 0.15,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const stopX = useRef<(() => void) | null>(null);
  const stopY = useRef<(() => void) | null>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      stopX.current?.();
      stopY.current?.();
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const m = el.style.transform.match(/translate\((.+?)px,\s*(.+?)px\)/);
    const fx = m ? parseFloat(m[1]) : 0;
    const fy = m ? parseFloat(m[2]) : 0;
    let cx = fx;
    let cy = fy;

    stopX.current?.();
    stopY.current?.();

    stopX.current = animate({
      from: fx,
      to: 0,
      type: 'spring',
      stiffness: 200,
      damping: 15,
      onUpdate: (v) => {
        cx = v;
        el.style.transform = `translate(${cx}px, ${cy}px)`;
      },
    }).stop;

    stopY.current = animate({
      from: fy,
      to: 0,
      type: 'spring',
      stiffness: 200,
      damping: 15,
      onUpdate: (v) => {
        cy = v;
        el.style.transform = `translate(${cx}px, ${cy}px)`;
      },
    }).stop;
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {children}
    </div>
  );
}

/* ─── Social proof ─── */
const proofItems = [
  { target: 500, suffix: '+', label: 'commerces équipés' },
  { target: 98, suffix: '%', label: 'clients satisfaits' },
  { target: 48, suffix: 'h', label: "d'installation" },
];

/* ═══════════════════════════════════════════
   HERO — Split layout: text left, video right
   ═══════════════════════════════════════════ */
export function Hero() {
  const { text, showCursor } = useTypedText({
    strings: heroTypedStrings,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 600,
  });

  const badgeRef = useSpringIn(100);
  const headingRef = useSpringIn(250);
  const descRef = useSpringIn(400);
  const ctaRef = useSpringIn(550);
  const videoRef = useSpringIn(500);
  const proofRef = useSpringIn(800);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-[15%] left-[25%] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] animate-orb-drift-a pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] bg-indigo-500/[0.03] rounded-full blur-[100px] animate-orb-drift-b pointer-events-none" />

      <Container className="relative z-10 py-28 max-md:py-20">
        <div className="grid grid-cols-[0.9fr_1.3fr] gap-10 items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* ── Left: content ── */}
          <div>
            {/* Badge */}
            <div ref={badgeRef}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 mb-7 bg-bg-card border border-border rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-display font-semibold text-text-secondary tracking-wide uppercase">
                  Solutions mon&eacute;tiques
                </span>
              </span>
            </div>

            {/* Heading */}
            <div ref={headingRef}>
              <h1 className="font-display text-[clamp(2.2rem,4.8vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-2">
                Automatisez vos{' '}
                <br className="max-md:hidden" />
                <span className="text-primary max-md:block max-md:min-h-[2.4em]">
                  {text}
                  <span
                    className={`inline-block w-[2px] h-[0.75em] bg-primary ml-0.5 align-middle transition-opacity duration-100 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </span>
              </h1>
              <p className="text-text-tertiary text-[0.95rem] font-display font-medium mb-6">
                La mon&eacute;tique intelligente pour votre commerce
              </p>
            </div>

            {/* Description */}
            <div ref={descRef}>
              <p className="text-[1.05rem] text-text-secondary leading-[1.75] mb-8 max-w-[480px]">
                Caisses automatiques, bornes de commande et solutions de
                paiement. Installation rapide, formation incluse, support
                24/7.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex items-center gap-4 flex-wrap">
              <Magnetic>
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Demander un devis gratuit
                </Button>
              </Magnetic>
              <Button href="tel:+33162343462" variant="outline" size="lg">
                <Phone className="w-4 h-4" />
                01 62 34 34 62
              </Button>
            </div>
          </div>

          {/* ── Right: video ── */}
          <div ref={videoRef} className="max-lg:max-w-xl max-lg:mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              >
                <source src="/assets/cashmonetik.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* ── Social proof strip ── */}
        <div ref={proofRef} className="mt-20 pt-8 border-t border-border/50">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-6">
            {proofItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-display text-2xl font-extrabold">
                  <SpringCounter
                    target={item.target}
                    suffix={item.suffix}
                    delay={1400 + i * 200}
                  />
                </span>
                <span className="text-sm text-text-tertiary">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
