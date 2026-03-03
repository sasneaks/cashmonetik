import type { Metadata } from 'next';
import { MachinePageLayout } from '@/components/sections/machine/MachinePageLayout';

export const metadata: Metadata = {
  title: 'Caisse tactile',
  description:
    'Caisse enregistreuse tactile nouvelle génération. Écran HD, logiciel intégré et compatibilité avec tous les moyens de paiement.',
};

export default function CaisseTactilePage() {
  return (
    <MachinePageLayout
      id="caisse-tactile"
      title="Caisse tactile"
      subtitle="Point de vente tout-en-un"
      description="La caisse enregistreuse nouvelle génération. Écran tactile HD, logiciel intégré et compatibilité avec tous les moyens de paiement pour un encaissement rapide et fiable."
      image="/assets/caisse-tactile.webp"
      stats={[
        { value: 'HD', label: 'Tactile' },
        { value: 'Tous', label: 'Paiements' },
        { value: 'Cloud', label: 'Connecté' },
      ]}
      features={[
        {
          icon: '🖥️',
          title: 'Écran tactile Full HD',
          description: "Écran 15.6\" Full HD avec interface tactile réactive. Navigation fluide et intuitive pour un encaissement rapide.",
        },
        {
          icon: '💳',
          title: 'Tous moyens de paiement',
          description: "CB, NFC, sans contact, espèces, chèques, titres restaurant... Acceptez tous les paiements sans exception.",
        },
        {
          icon: '🖨️',
          title: 'Imprimante intégrée',
          description: "Imprimante ticket thermique intégrée pour une impression rapide et silencieuse des tickets de caisse.",
        },
        {
          icon: '📦',
          title: 'Logiciel de caisse inclus',
          description: "Logiciel de caisse complet préinstallé : gestion articles, stocks, clients, promotions et rapports.",
        },
        {
          icon: '☁️',
          title: 'Connexion Cloud',
          description: "Accédez à vos données de caisse depuis n'importe où. Rapports et statistiques disponibles en ligne.",
        },
        {
          icon: '🏪',
          title: 'Multi-magasins',
          description: "Gérez plusieurs points de vente depuis une seule interface. Rapports centralisés et gestion unifiée.",
        },
      ]}
      specs={[
        { label: 'Écran', value: '15.6" Full HD tactile' },
        { label: 'Processeur', value: 'Intel / ARM' },
        { label: 'Paiement', value: 'CB / NFC / Sans contact' },
        { label: 'Tiroir-caisse', value: 'Automatique intégré' },
        { label: 'Imprimante', value: 'Ticket thermique' },
        { label: 'Connectivité', value: 'Wi-Fi / Ethernet / USB' },
        { label: 'Système', value: 'Windows / Android' },
        { label: 'Garantie', value: '1 an pièces et main d\'œuvre' },
      ]}
      advantages={[
        {
          title: 'Un encaissement rapide et fiable',
          description: "L'écran tactile HD offre une navigation fluide et rapide. Encaissez vos clients en quelques secondes. Le logiciel intégré gère articles, stocks et promotions en temps réel.",
          image: '/assets/caisse-tactile.webp',
        },
        {
          title: 'Centralisez toute votre gestion',
          description: "Depuis une seule interface, gérez vos ventes, vos stocks et vos rapports. La connexion Cloud vous permet de suivre votre activité depuis n'importe où, même depuis votre téléphone.",
        },
      ]}
    />
  );
}
