import type { Metadata } from 'next';
import { MachinePageLayout } from '@/components/sections/machine/MachinePageLayout';

export const metadata: Metadata = {
  title: 'Robot Sparkoz',
  description:
    "Robot de nettoyage autonome professionnel. Navigation LiDAR, 8h d'autonomie et couverture de 2000m². L'avenir de l'entretien de vos locaux.",
};

export default function RobotSparkozPage() {
  return (
    <MachinePageLayout
      id="robot-sparkoz"
      title="Robot Sparkoz"
      subtitle="Robot de nettoyage autonome"
      description="Le robot de nettoyage professionnel dernière génération. Navigation LiDAR, 8h d'autonomie et couverture de 2000m². L'avenir de l'entretien de vos locaux."
      image="/assets/robot-sparkoz.webp"
      badge="Nouveau"
      badgeColor="green"
      stats={[
        { value: '8h', label: 'Autonomie' },
        { value: '2000m²', label: 'Couverture' },
        { value: 'LiDAR', label: 'Navigation' },
      ]}
      features={[
        {
          icon: '🔋',
          title: "8h d'autonomie",
          description: "Batterie longue durée pour une journée complète de nettoyage. Recharge automatique quand le niveau est bas.",
        },
        {
          icon: '📡',
          title: 'Navigation LiDAR',
          description: "Cartographie précise de vos locaux par technologie LiDAR. Le robot évite les obstacles et optimise ses trajets.",
        },
        {
          icon: '🗺️',
          title: 'Couverture 2000m²',
          description: "Nettoyage efficace sur de grandes surfaces. Idéal pour les supermarchés, entrepôts et grandes surfaces commerciales.",
        },
        {
          icon: '🔄',
          title: 'Recharge automatique',
          description: "Le robot retourne automatiquement à sa base de recharge et reprend le nettoyage là où il s'était arrêté.",
        },
        {
          icon: '📅',
          title: 'Programmation horaire',
          description: "Planifiez les sessions de nettoyage selon vos horaires d'ouverture. Le robot travaille pendant la nuit ou en heures creuses.",
        },
        {
          icon: '🛡️',
          title: 'Capteurs anti-collision',
          description: "Multiples capteurs pour éviter les obstacles, les personnes et le mobilier. Nettoyage sûr et sans surveillance.",
        },
      ]}
      specs={[
        { label: 'Autonomie', value: '8 heures' },
        { label: 'Couverture', value: '2000 m²' },
        { label: 'Navigation', value: 'LiDAR 360°' },
        { label: 'Recharge', value: 'Automatique' },
        { label: 'Bruit', value: '< 60 dB' },
        { label: 'Réservoir', value: '10 litres' },
        { label: 'Connectivité', value: 'Wi-Fi / App mobile' },
        { label: 'Garantie', value: '1 an pièces et main d\'œuvre' },
      ]}
      advantages={[
        {
          title: 'Nettoyage professionnel autonome',
          description: "Le Robot Sparkoz nettoie vos locaux sans intervention humaine. Programmez-le et laissez-le travailler. Il cartographie vos espaces et optimise ses trajets pour un résultat impeccable.",
          image: '/assets/robot-sparkoz.webp',
        },
        {
          title: 'Réduisez vos coûts d\'entretien',
          description: "Remplacez ou complétez vos équipes de nettoyage par un robot qui travaille 8h d'affilée sans pause. Un investissement rentabilisé en quelques mois grâce aux économies sur les coûts de personnel.",
        },
      ]}
    />
  );
}
