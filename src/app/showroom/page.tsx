import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { VideoShowcase } from '@/components/sections/showroom/VideoShowcase';
import { ProductGallery } from '@/components/sections/showroom/ProductGallery';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export const metadata: Metadata = {
  title: 'Showroom',
  description:
    'Découvrez nos solutions monétiques en vidéo et explorez notre gamme complète de produits pour commerces de proximité.',
};

export default function ShowroomPage() {
  return (
    <>
      <PageHero
        tag="Showroom"
        title={
          <>
            Nos équipements <span className="text-primary">en situation</span>
          </>
        }
        subtitle="Visualisez nos solutions monétiques en action et explorez notre gamme complète."
      />
      <VideoShowcase />
      <ProductGallery />
      <CtaFinal />
    </>
  );
}
