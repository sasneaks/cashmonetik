'use client';

import Image from 'next/image';
import { clientLogos } from '@/lib/content';

export function TrustedBy() {
  // Triple the logos for seamless infinite scroll
  const scrollLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 border-t border-b border-border overflow-hidden bg-bg">
      <div className="text-center mb-8">
        <span className="text-xs font-display font-semibold uppercase tracking-[0.15em] text-text-tertiary">
          Ils automatisent avec CashMonetik
        </span>
      </div>

      <div className="relative mask-fade-x">
        <div className="flex items-center gap-16 animate-logo-scroll w-max">
          {scrollLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-12 px-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={36}
                className="h-9 w-auto opacity-[0.35] grayscale brightness-200 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
