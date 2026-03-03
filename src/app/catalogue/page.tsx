import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ProductDetail } from '@/components/sections/catalogue/ProductDetail';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Découvrez notre gamme complète : caisses automatiques, bornes de commande, caisses tactiles, balances professionnelles et robot Sparkoz.',
};

export default function CataloguePage() {
  return (
    <>
      <PageHero
        tag="Solutions"
        title={
          <>
            Nos <span className="text-primary">solutions</span>
          </>
        }
        subtitle="Équipements monétiques professionnels pour tous les secteurs d'activité."
      />
      <ProductDetail />
      <CtaFinal />
    </>
  );
}
