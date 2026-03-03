'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { catalogueProducts } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function ProductDetail() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {catalogueProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className="group"
            >
              <Link
                href={product.slug}
                className="block bg-bg-card backdrop-blur-sm border border-border rounded-md overflow-hidden transition-all duration-500 hover:border-border-hover hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-[220px] max-sm:h-[160px] bg-bg-elevated flex items-center justify-center overflow-hidden">
                  {product.badge && (
                    <span
                      className={cn(
                        'absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1 text-[11px] font-display font-bold rounded-full',
                        product.badgeColor === 'green'
                          ? 'text-emerald-400 bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)]'
                          : 'text-primary bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]'
                      )}
                    >
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out-custom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 max-sm:p-4 flex flex-col flex-1">
                  <h3 className="font-display text-lg max-sm:text-base font-bold mb-1">
                    {product.title}
                  </h3>
                  <p className="text-xs font-display font-semibold text-primary mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-display font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    Découvrir
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
