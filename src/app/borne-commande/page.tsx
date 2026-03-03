import type { Metadata } from 'next';
import { MachinePageLayout } from '@/components/sections/machine/MachinePageLayout';

export const metadata: Metadata = {
  title: 'Borne de commande',
  description:
    'Borne de commande interactive pour une prise de commande autonome et rapide. Augmentez votre panier moyen et réduisez les files d\'attente.',
};

export default function BorneCommandePage() {
  return (
    <MachinePageLayout
      id="borne-commande"
      title="Borne de commande"
      subtitle="Borne interactive tactile"
      description="Offrez à vos clients une expérience de commande autonome, rapide et intuitive. Augmentez votre panier moyen de 25% grâce à la suggestion intelligente."
      image="/assets/borne-commande.webp"
      stats={[
        { value: '+25%', label: 'Panier moyen' },
        { value: '-40%', label: 'Attente' },
        { value: '100%', label: 'Personnalisable' },
      ]}
      features={[
        {
          icon: '📱',
          title: 'Écran tactile grand format',
          description: "Écran tactile 22\" ou 32\" avec interface fluide et intuitive. Vos clients passent commande en toute autonomie.",
        },
        {
          icon: '🎨',
          title: 'Interface personnalisable',
          description: "Personnalisez l'interface avec vos couleurs, votre logo et vos produits. Mises à jour en temps réel.",
        },
        {
          icon: '💳',
          title: 'Paiement intégré',
          description: "Terminal de paiement CB intégré. Vos clients commandent et paient sans passer en caisse.",
        },
        {
          icon: '🧠',
          title: 'Suggestions intelligentes',
          description: "Algorithme de suggestion qui propose automatiquement des accompagnements et des montées en gamme.",
        },
        {
          icon: '📊',
          title: 'Statistiques en temps réel',
          description: "Suivez vos ventes, les produits les plus commandés et le panier moyen en temps réel.",
        },
        {
          icon: '⏱️',
          title: "Gestion des files d'attente",
          description: "Réduisez jusqu'à 40% le temps d'attente de vos clients avec la commande en libre-service.",
        },
      ]}
      specs={[
        { label: 'Écran', value: '22" ou 32" tactile' },
        { label: 'Résolution', value: 'Full HD 1080p' },
        { label: 'Paiement', value: 'CB / NFC / Sans contact' },
        { label: 'Impression', value: 'Ticket intégré' },
        { label: 'Connectivité', value: 'Wi-Fi / Ethernet' },
        { label: 'Système', value: 'Android / Windows' },
        { label: 'Installation', value: 'Murale ou sur pied' },
        { label: 'Garantie', value: '1 an pièces et main d\'œuvre' },
      ]}
      advantages={[
        {
          title: 'Boostez votre panier moyen',
          description: "Les suggestions intelligentes et la présentation visuelle des produits incitent vos clients à commander plus. Les bornes augmentent le panier moyen de 20 à 30% grâce à l'upselling automatique.",
          image: '/assets/borne-commande.webp',
        },
        {
          title: "Fluidifiez le service aux heures de pointe",
          description: "Vos clients n'attendent plus en file. Ils commandent en autonomie sur la borne pendant que votre équipe prépare les commandes. Résultat : plus de clients servis, moins de stress.",
        },
      ]}
    />
  );
}
