import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Showcase } from '@/components/sections/secteurs/Showcase';
import { SectorCards } from '@/components/sections/secteurs/SectorCards';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export const metadata: Metadata = {
  title: 'Secteurs',
  description:
    "Solutions monétiques adaptées à chaque secteur : boulangeries, tabacs, supermarchés, pharmacies. Découvrez nos équipements par métier.",
};

export default function SecteursPage() {
  return (
    <>
      <PageHero
        tag="Secteurs"
        title={
          <>
            Des solutions pour <span className="text-primary">chaque métier</span>
          </>
        }
        subtitle="Nos équipements s'adaptent aux spécificités de votre secteur d'activité."
      />
      <Showcase />
      <SectorCards />
      <CtaFinal />
    </>
  );
}
