'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { catalogueProducts } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function ProductGallery() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <SectionHeader
          tag="Nos produits"
          title={<>Découvrez notre <span className="text-primary">gamme</span></>}
          subtitle="Caisses automatiques, bornes de commande, caisses tactiles et plus encore."
        />
        <motion.div
          className="grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {catalogueProducts.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              custom={i * 0.08}
              className="group p-6 rounded-lg bg-bg-card border border-border transition-all duration-400 ease-out-custom hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-1"
            >
              <div className="flex items-center justify-center aspect-square mb-4 rounded-md overflow-hidden bg-bg-elevated">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full p-3"
                />
              </div>
              <h3 className="font-display text-sm font-bold mb-3 text-center">
                {product.title}
              </h3>
              <div className="text-center">
                <Button
                  href={`/catalogue#${product.id}`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Voir détails
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
