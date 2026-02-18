'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { catalogueProducts } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function ProductDetail() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <div className="space-y-0">
          {catalogueProducts.map((product, index) => {
            const isOdd = index % 2 === 0;

            return (
              <div key={product.id} id={product.id} className="scroll-mt-[140px]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-14 max-md:py-8"
                >
                  {/* Image */}
                  <motion.div
                    variants={fadeUp}
                    custom={isOdd ? 0 : 0.15}
                    className={cn(
                      'relative flex items-center justify-center',
                      !isOdd && 'lg:order-2'
                    )}
                  >
                    <div className="relative w-full max-w-[480px] mx-auto">
                      {product.badge && (
                        <span
                          className={cn(
                            'absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full',
                            product.badgeColor === 'green'
                              ? 'bg-[rgba(34,197,94,0.12)] text-green-400 border border-[rgba(34,197,94,0.25)]'
                              : 'bg-[rgba(59,130,246,0.12)] text-primary border border-[rgba(59,130,246,0.25)]'
                          )}
                        >
                          {product.badge}
                        </span>
                      )}
                      <div className="bg-bg-card border border-border rounded-lg p-8 flex items-center justify-center aspect-square">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={400}
                          height={400}
                          className="object-contain w-full h-full max-h-[360px]"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    variants={fadeUp}
                    custom={isOdd ? 0.15 : 0}
                    className={cn(!isOdd && 'lg:order-1')}
                  >
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm font-display font-semibold text-primary mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Features grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button href="/contact" variant="primary" size="default" arrow>
                      Demander un devis
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Divider */}
                {index < catalogueProducts.length - 1 && (
                  <div className="border-t border-border" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
