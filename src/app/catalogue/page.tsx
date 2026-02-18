import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ProductNav } from '@/components/sections/catalogue/ProductNav';
import { ProductDetail } from '@/components/sections/catalogue/ProductDetail';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export const metadata: Metadata = {
  title: 'Catalogue',
  description:
    'Découvrez notre gamme complète : caisses automatiques, bornes de commande, caisses tactiles, balances professionnelles et robot Sparkoz.',
};

export default function CataloguePage() {
  return (
    <>
      <PageHero
        tag="Catalogue"
        title={
          <>
            Nos <span className="text-primary">solutions</span>
          </>
        }
        subtitle="Équipements monétiques professionnels pour tous les secteurs d'activité."
      />
      <ProductNav />
      <ProductDetail />
      <CtaFinal />
    </>
  );
}
