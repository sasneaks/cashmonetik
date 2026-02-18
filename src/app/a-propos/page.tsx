import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { ProcessSection } from '@/components/sections/about/ProcessSection';
import { GuaranteesSection } from '@/components/sections/about/GuaranteesSection';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'CashMonetik accompagne les commerces de proximité dans leur transformation monétique. Découvrez notre mission, nos engagements et notre processus.',
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        tag="À propos"
        title={
          <>
            Notre <span className="text-primary">engagement</span> à vos côtés.
          </>
        }
        subtitle="CashMonetik accompagne les commerces de proximité dans leur transformation monétique. De l'audit gratuit au support continu, nous sommes à vos côtés."
      />

      {/* Mission */}
      <section className="pb-8 max-md:pb-4">
        <Container>
          <p className="text-base text-text-secondary leading-relaxed max-w-[720px] mx-auto text-center">
            Notre mission est simple : permettre à chaque commerce de proximité de se concentrer
            sur l&apos;essentiel — ses clients — en éliminant les contraintes liées à la gestion
            du cash. Nous concevons et installons des solutions monétiques fiables, sécurisées
            et adaptées à chaque métier.
          </p>
        </Container>
      </section>

      <ProcessSection />
      <GuaranteesSection />
      <CtaFinal />
    </>
  );
}
