import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { FaqAccordion } from '@/components/sections/faq/FaqAccordion';
import { FaqContactBlock } from '@/components/sections/faq/FaqContactBlock';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Questions fréquentes sur les solutions CashMonetik : prix, installation, garantie, support technique et compatibilité.',
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        tag="FAQ"
        title={
          <>
            Questions <span className="text-primary">fréquentes</span>
          </>
        }
        subtitle="Retrouvez les réponses aux questions les plus posées par nos clients."
      />
      <FaqAccordion />
      <FaqContactBlock />
      <CtaFinal />
    </>
  );
}
