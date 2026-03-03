'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { siteConfig, catalogueProducts } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface MachineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface MachineStat {
  value: string;
  label: string;
}

export interface MachineSpec {
  label: string;
  value: string;
}

export interface MachineAdvantage {
  title: string;
  description: string;
  image?: string;
}

interface MachinePageLayoutProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: 'blue' | 'green';
  stats: MachineStat[];
  features: MachineFeature[];
  specs: MachineSpec[];
  advantages: MachineAdvantage[];
}

export function MachinePageLayout({
  id,
  title,
  subtitle,
  description,
  image,
  badge,
  badgeColor = 'blue',
  stats,
  features,
  specs,
  advantages,
}: MachinePageLayoutProps) {
  const otherProducts = catalogueProducts.filter((p) => p.id !== id);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 max-md:pt-24 max-md:pb-10 bg-gradient-to-b from-[rgba(59,130,246,0.06)] to-transparent overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <motion.div initial="hidden" animate="visible">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 font-display text-xs font-bold text-primary uppercase tracking-[0.12em] mb-6 px-[18px] py-1.5 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full"
              >
                {subtitle}
              </motion.span>
              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.08] mb-5"
              >
                {title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-text-secondary text-[1.05rem] leading-relaxed mb-8 max-w-[520px]"
              >
                {description}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={0.3}
                className="flex gap-4 mb-8 flex-wrap"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-bg-card border border-border rounded-md px-5 py-3 text-center min-w-[100px]"
                  >
                    <span className="block font-display text-lg font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="block text-xs text-text-secondary">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="flex items-center gap-4 flex-wrap"
              >
                <Button href="/contact" variant="glow" size="lg" arrow>
                  Nous contacter
                </Button>
                <Button
                  href={`tel:${siteConfig.phone}`}
                  variant="outline"
                  size="lg"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phoneDisplay}
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[480px] mx-auto">
                {badge && (
                  <span
                    className={cn(
                      'absolute top-4 right-4 z-10 inline-flex items-center px-3 py-1 text-[11px] font-display font-bold uppercase tracking-[0.1em] rounded-full',
                      badgeColor === 'green'
                        ? 'bg-[rgba(34,197,94,0.12)] text-green-400 border border-[rgba(34,197,94,0.25)]'
                        : 'bg-[rgba(59,130,246,0.12)] text-primary border border-[rgba(59,130,246,0.25)]'
                    )}
                  >
                    {badge}
                  </span>
                )}
                <div className="bg-bg-card border border-border rounded-lg p-8 flex items-center justify-center">
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="object-contain w-full h-auto max-h-[400px]"
                    priority
                  />
                </div>
                {/* Glow */}
                <div className="absolute -inset-8 bg-[radial-gradient(ellipse,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-16 max-md:py-10 bg-bg">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="bg-bg-card border border-border rounded-md p-6 transition-all duration-300 hover:border-border-hover"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-base font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16 max-md:py-10 bg-bg">
        <Container>
          <div className="space-y-16 max-md:space-y-10">
            {advantages.map((advantage, index) => {
              const isOdd = index % 2 === 0;
              return (
                <motion.div
                  key={advantage.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
                >
                  <motion.div
                    variants={fadeUp}
                    custom={isOdd ? 0 : 0.15}
                    className={cn(!isOdd && 'lg:order-2')}
                  >
                    <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-extrabold tracking-[-0.02em] leading-[1.15] mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {advantage.description}
                    </p>
                  </motion.div>
                  {advantage.image && (
                    <motion.div
                      variants={fadeUp}
                      custom={isOdd ? 0.15 : 0}
                      className={cn(
                        'relative flex items-center justify-center',
                        !isOdd && 'lg:order-1'
                      )}
                    >
                      <div className="bg-bg-card border border-border rounded-lg p-6 w-full max-w-[420px] mx-auto">
                        <Image
                          src={advantage.image}
                          alt={advantage.title}
                          width={380}
                          height={280}
                          className="object-contain w-full h-auto rounded-sm"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SPECS */}
      <section className="py-16 max-md:py-10 bg-bg">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-[700px] mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.3rem,3vw,2rem)] font-extrabold text-center mb-8"
            >
              Caractéristiques <span className="text-primary">techniques</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={0.15}
              className="bg-bg-card backdrop-blur-sm border border-border rounded-md overflow-hidden"
            >
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={cn(
                    'flex items-center justify-between px-6 py-4 text-sm',
                    i < specs.length - 1 && 'border-b border-border'
                  )}
                >
                  <span className="text-text-secondary">{spec.label}</span>
                  <span className="font-display font-semibold text-text">
                    {spec.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-16 max-md:py-10 bg-bg">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.3rem,3vw,2rem)] font-extrabold text-center mb-10"
            >
              Autres <span className="text-primary">solutions</span>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {otherProducts.map((product) => (
                <motion.div key={product.id} variants={fadeUp}>
                  <Link
                    href={product.slug}
                    className="group block bg-bg-card border border-border rounded-md overflow-hidden transition-all duration-300 hover:border-border-hover hover:-translate-y-1"
                  >
                    <div className="relative w-full h-[140px] bg-bg-elevated flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-sm font-bold mb-1">
                        {product.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-display font-semibold">
                        Découvrir
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-20 max-md:py-12 bg-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.1)_0%,transparent_65%)]" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center max-w-[660px] mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4"
            >
              Prêt à <span className="text-primary">moderniser</span> votre commerce ?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-[1.05rem] text-text-secondary leading-relaxed mb-10"
            >
              Demandez un audit gratuit. Un expert analyse vos besoins
              et vous recommande la solution idéale, sans engagement.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <Button href="/contact" variant="glow" size="xl" arrow>
                Nous contacter
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="outline"
                size="xl"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phoneDisplay}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
