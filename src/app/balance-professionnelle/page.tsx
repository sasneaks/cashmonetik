import type { Metadata } from 'next';
import { MachinePageLayout } from '@/components/sections/machine/MachinePageLayout';

export const metadata: Metadata = {
  title: 'Balance professionnelle',
  description:
    'Balance professionnelle avec écran tactile intuitif et impression ticket intégrée. Idéale pour boulangeries, primeurs et traiteurs.',
};

export default function BalanceProfessionnellePage() {
  return (
    <MachinePageLayout
      id="balance"
      title="Balance professionnelle"
      subtitle="Pesage intelligent connecté"
      description="Balance professionnelle avec écran tactile intuitif et impression ticket intégrée. Idéale pour les boulangeries, primeurs et traiteurs."
      image="/assets/balance.webp"
      stats={[
        { value: 'PLU', label: '10 000 articles' },
        { value: 'IP65', label: 'Étanche' },
        { value: 'Wi-Fi', label: 'Connectée' },
      ]}
      features={[
        {
          icon: '⚖️',
          title: 'Précision 1g',
          description: "Pesage de haute précision à 1g près. Idéal pour les produits en vrac, la charcuterie et la pâtisserie.",
        },
        {
          icon: '📱',
          title: 'Écran tactile couleur',
          description: "Écran tactile intuitif avec affichage couleur des produits. Navigation rapide par catégories.",
        },
        {
          icon: '🖨️',
          title: 'Impression intégrée',
          description: "Impression ticket et étiquettes directement depuis la balance. Code-barres, prix au kilo, PLU.",
        },
        {
          icon: '📋',
          title: 'Base 10 000 articles',
          description: "Gérez jusqu'à 10 000 références produits avec photos, prix et codes PLU.",
        },
        {
          icon: '🔗',
          title: 'Connexion logiciel de caisse',
          description: "Intégration directe avec votre logiciel de caisse. Synchronisation automatique des articles et prix.",
        },
        {
          icon: '🧹',
          title: 'Nettoyage facile',
          description: "Construction en inox de qualité alimentaire. Nettoyage rapide, résistante aux projections (IP65).",
        },
      ]}
      specs={[
        { label: 'Portée', value: '6 / 15 / 30 kg' },
        { label: 'Précision', value: '1g / 2g / 5g' },
        { label: 'Écran', value: 'Tactile couleur 10"' },
        { label: 'Base articles', value: '10 000 PLU' },
        { label: 'Impression', value: 'Tickets et étiquettes' },
        { label: 'Protection', value: 'IP65 (étanche)' },
        { label: 'Connectivité', value: 'Wi-Fi / Ethernet / USB' },
        { label: 'Garantie', value: '1 an pièces et main d\'œuvre' },
      ]}
      advantages={[
        {
          title: 'Pesage rapide et sans erreur',
          description: "L'écran tactile couleur avec affichage des produits permet un pesage rapide. Vos vendeurs trouvent le bon article en un clic. Fini les erreurs de PLU et les pertes associées.",
          image: '/assets/balance.webp',
        },
        {
          title: 'Intégration complète avec votre caisse',
          description: "La balance communique directement avec votre logiciel de caisse. Les prix et articles sont synchronisés automatiquement. Pas de double saisie, pas d'erreurs de prix.",
        },
      ]}
    />
  );
}
