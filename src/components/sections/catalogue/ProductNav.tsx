'use client';

import { useState, useEffect } from 'react';
import { catalogueProducts } from '@/lib/content';
import { cn } from '@/lib/utils';

export function ProductNav() {
  const [activeId, setActiveId] = useState<string>(catalogueProducts[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    catalogueProducts.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-[72px] z-40 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border">
      <div className="max-w-container mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
        {catalogueProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => scrollTo(product.id)}
            className={cn(
              'flex-shrink-0 font-display text-[13px] font-semibold px-4 py-2 rounded-full border transition-all duration-300 ease-out-custom',
              activeId === product.id
                ? 'bg-primary text-white border-primary shadow-[0_2px_12px_rgba(59,130,246,0.3)]'
                : 'bg-transparent text-text-secondary border-border hover:border-border-hover hover:text-text'
            )}
          >
            {product.title}
          </button>
        ))}
      </div>
    </div>
  );
}
