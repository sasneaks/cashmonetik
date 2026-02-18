import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { RoiCalculator } from '@/components/sections/contact/RoiCalculator';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez CashMonetik pour un audit gratuit de votre commerce. Devis personnalisé sous 48h, installation rapide et support 24/7.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title={
          <>
            Parlons de <span className="text-primary">votre projet</span>
          </>
        }
        subtitle="Recevez un audit personnalisé gratuit et une proposition sur mesure sous 48h."
      />
      <ContactForm />
      <RoiCalculator />
    </>
  );
}
