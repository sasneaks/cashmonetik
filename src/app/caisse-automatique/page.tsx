import type { Metadata } from 'next';
import { MachinePageLayout } from '@/components/sections/machine/MachinePageLayout';

export const metadata: Metadata = {
  title: 'Caisse automatique',
  description:
    'Sécurisez et accélérez tous vos encaissements avec notre monnayeur automatique. Comptage instantané, rendu de monnaie intelligent, coffre anti-effraction.',
};

export default function CaisseAutomatiquePage() {
  return (
    <MachinePageLayout
      id="caisse-automatique"
      title="Caisse automatique"
      subtitle="Monnayeur automatique"
      description="Sécurisez et accélérez tous vos encaissements avec notre monnayeur automatique. Comptage instantané, rendu de monnaie intelligent et sécurisation totale de vos fonds de caisse."
      image="/assets/caisse-auto.webp"
      badge="Populaire"
      badgeColor="blue"
      stats={[
        { value: '0', label: 'Erreur' },
        { value: 'Rapide', label: 'Installation' },
        { value: '24/7', label: 'Support' },
      ]}
      features={[
        {
          icon: '💰',
          title: 'Comptage automatique',
          description: "Comptage instantané et sans erreur de tous les billets et pièces. Chaque centime est comptabilisé avec précision.",
        },
        {
          icon: '🔒',
          title: 'Coffre sécurisé',
          description: "Coffre anti-effraction intégré. L'argent est inaccessible, la dissuasion est immédiate contre les vols et braquages.",
        },
        {
          icon: '⚡',
          title: 'Rendu intelligent',
          description: "Rendu de monnaie automatique et optimisé. Plus d'erreurs de rendu, plus de litiges clients.",
        },
        {
          icon: '📊',
          title: 'Rapports en temps réel',
          description: "Suivi en direct de votre chiffre d'affaires, historique des transactions et rapports de caisse automatiques.",
        },
        {
          icon: '🔗',
          title: 'Compatible tous logiciels',
          description: "S'intègre avec la majorité des logiciels de caisse du marché. Installation transparente.",
        },
        {
          icon: '🛡️',
          title: 'Hygiène & sécurité',
          description: "Moins de manipulation de billets, plus d'hygiène. Image professionnelle qui inspire confiance.",
        },
      ]}
      specs={[
        { label: 'Acceptation', value: 'Billets et pièces' },
        { label: 'Capacité billets', value: '500+ billets' },
        { label: 'Capacité pièces', value: '2000+ pièces' },
        { label: 'Comptage', value: 'Instantané' },
        { label: 'Sécurité', value: 'Coffre anti-effraction' },
        { label: 'Connectivité', value: 'USB / Ethernet / Wi-Fi' },
        { label: 'Compatibilité', value: 'Tous logiciels de caisse' },
        { label: 'Garantie', value: '1 an pièces et main d\'œuvre' },
      ]}
      advantages={[
        {
          title: 'Zéro erreur de caisse, zéro stress',
          description: "Le comptage automatique élimine 100% des erreurs humaines. Finis les écarts de caisse, les recomptages fastidieux et les litiges clients. Votre fermeture de caisse passe de 45 minutes à 5 minutes.",
          image: '/assets/caisse-auto.webp',
        },
        {
          title: 'Sécurité maximale pour vos fonds',
          description: "Un coffre-fort intégré protège chaque euro encaissé. L'argent est inaccessible aux employés comme aux clients. Les tentatives de vol et braquages chutent face à un équipement sécurisé visible en caisse.",
        },
      ]}
    />
  );
}
