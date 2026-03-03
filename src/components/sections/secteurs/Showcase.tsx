'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const sectorData = [
  {
    id: 'boulangeries',
    title: 'Boulangeries & Pâtisseries',
    description:
      "Aux heures de pointe, chaque seconde compte. Nos solutions accélèrent l'encaissement, éliminent les erreurs de rendu et sécurisent votre caisse, pour que vous puissiez vous concentrer sur votre métier.",
    image: '/assets/showcase-boulangerie.webp',
    benefits: [
      'Encaissement rapide aux heures de pointe',
      'Zéro erreur de rendu de monnaie',
      'Pesage intelligent avec PLU intégrés',
      'Fermeture de caisse en 5 minutes',
    ],
    machines: [
      { label: 'Caisse automatique', href: '/caisse-automatique' },
      { label: 'Caisse tactile', href: '/caisse-tactile' },
      { label: 'Balance pro', href: '/balance-professionnelle' },
    ],
  },
  {
    id: 'tabacs',
    title: 'Tabacs & Presse',
    description:
      "Sécurisez vos fonds de caisse et respectez les contraintes réglementaires. Nos monnayeurs automatiques éliminent les risques de vol et assurent une traçabilité totale de chaque transaction.",
    image: '/assets/showcase-tabac.webp',
    benefits: [
      'Sécurisation totale des fonds de caisse',
      'Traçabilité complète des transactions',
      'Conformité fiscale automatique',
      'Dissuasion anti-braquage',
    ],
    machines: [
      { label: 'Caisse automatique', href: '/caisse-automatique' },
      { label: 'Caisse tactile', href: '/caisse-tactile' },
    ],
  },
  {
    id: 'supermarches',
    title: 'Supermarchés & Épiceries',
    description:
      "Fluidifiez le passage en caisse, centralisez vos rapports et offrez une expérience de commande moderne à vos clients avec nos bornes en libre-service.",
    image: '/assets/showcase-cafe.webp',
    benefits: [
      'Multi-caisses centralisées',
      'Bornes de commande en libre-service',
      'Rapports consolidés temps réel',
      "Réduction de 40% des files d'attente",
    ],
    machines: [
      { label: 'Caisse automatique', href: '/caisse-automatique' },
      { label: 'Borne de commande', href: '/borne-commande' },
      { label: 'Caisse tactile', href: '/caisse-tactile' },
    ],
  },
  {
    id: 'pharmacies',
    title: 'Pharmacies & Officines',
    description:
      "Discrétion maximale et intégration avec votre logiciel métier. Nos solutions automatisent l'encaissement en toute confidentialité pour vos patients.",
    image: '/assets/showcase-boulangerie.webp',
    benefits: [
      'Discrétion maximale pour les patients',
      'Intégration LGO (logiciel de gestion officine)',
      'Sécurité renforcée des fonds',
      'Comptage automatique sans manipulation',
    ],
    machines: [
      { label: 'Caisse automatique', href: '/caisse-automatique' },
      { label: 'Caisse tactile', href: '/caisse-tactile' },
    ],
  },
];

function StickyNav() {
  const [activeSection, setActiveSection] = useState('boulangeries');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sectorData.forEach((sector) => {
      const el = document.getElementById(sector.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[72px] z-40 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border">
      <Container>
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-3">
          {sectorData.map((sector) => (
            <a
              key={sector.id}
              href={`#${sector.id}`}
              className={cn(
                'whitespace-nowrap px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-[0.08em] transition-all duration-300 border',
                activeSection === sector.id
                  ? 'bg-primary text-white border-primary shadow-[0_2px_12px_rgba(59,130,246,0.3)]'
                  : 'text-text-secondary border-border hover:border-border-hover hover:text-text'
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(sector.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {sector.id === 'supermarches' ? 'Supermarchés' : sector.id === 'boulangeries' ? 'Boulangeries' : sector.id === 'tabacs' ? 'Tabacs' : 'Pharmacies'}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}

function SectorSection({ sector, index }: { sector: typeof sectorData[0]; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <section id={sector.id} className="relative py-20 max-md:py-12 overflow-hidden scroll-mt-[140px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/85 to-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
          )}
        >
          {/* Image side */}
          <motion.div
            variants={fadeUp}
            custom={isReversed ? 0.15 : 0}
            className={cn(
              'relative flex items-center justify-center',
              isReversed && 'lg:order-2'
            )}
          >
            <div className="relative w-full max-w-[500px] mx-auto rounded-lg overflow-hidden border border-border/30">
              <Image
                src={sector.image}
                alt={sector.title}
                width={500}
                height={350}
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={fadeUp}
            custom={isReversed ? 0 : 0.15}
            className={cn(isReversed && 'lg:order-1')}
          >
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
              <span className="text-primary">{sector.title}</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[500px]">
              {sector.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {sector.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Machine pills */}
            <div className="mb-8">
              <span className="block text-xs font-display font-bold text-text-tertiary uppercase tracking-[0.1em] mb-3">
                Solutions recommandées
              </span>
              <div className="flex flex-wrap gap-2">
                {sector.machines.map((machine) => (
                  <Link
                    key={machine.href}
                    href={machine.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-display font-semibold text-primary bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] rounded-full transition-all duration-300 hover:bg-[rgba(59,130,246,0.15)] hover:border-[rgba(59,130,246,0.4)]"
                  >
                    {machine.label}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>

            <Button href="/contact" variant="primary" size="default" arrow>
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export function Showcase() {
  return (
    <>
      <StickyNav />
      {sectorData.map((sector, index) => (
        <SectorSection key={sector.id} sector={sector} index={index} />
      ))}
    </>
  );
}
