import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return (
    <div className="max-w-[900px] mx-auto mt-28 max-md:mt-20 mb-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-primary font-medium font-display text-sm hover:gap-3 transition-all">
        &larr; Retour &agrave; l&apos;accueil
      </Link>

      <h1 className="font-display text-[2.5rem] font-extrabold mb-4">Conditions G&eacute;n&eacute;rales de Vente</h1>
      <p className="text-text-tertiary mb-12 text-sm">Derni&egrave;re mise &agrave; jour : 9 f&eacute;vrier 2026</p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">1. Champ d&apos;application</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Les pr&eacute;sentes CGV s&apos;appliquent &agrave; toutes les ventes de mat&eacute;riel et prestations de services r&eacute;alis&eacute;es par CashMonetik aupr&egrave;s de professionnels et d&apos;entreprises.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">2. Devis et commandes</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Les devis sont valables 30 jours. La commande est d&eacute;finitive apr&egrave;s signature du devis ou bon de commande et versement de l&apos;acompte.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">3. Prix</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">Les prix sont en euros HT. La TVA sera ajout&eacute;e. Les prix incluent :</p>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>La fourniture du mat&eacute;riel</li>
        <li>La livraison en France m&eacute;tropolitaine</li>
        <li>L&apos;installation et la mise en service</li>
        <li>La formation initiale du personnel</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">4. Modalit&eacute;s de paiement</h2>
      <h3 className="font-display text-xl font-semibold mt-8 mb-4">Vente</h3>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>30% &agrave; la commande</li>
        <li>70% &agrave; la livraison et installation</li>
      </ul>
      <h3 className="font-display text-xl font-semibold mt-8 mb-4">Location</h3>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Paiement mensuel par pr&eacute;l&egrave;vement automatique. Premier loyer exigible &agrave; la signature.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">5. Livraison et installation</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        D&eacute;lai de 48h ouvr&eacute;es. Livraisons en France m&eacute;tropolitaine. V&eacute;rification du mat&eacute;riel sous 48h apr&egrave;s r&eacute;ception.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">6. Garanties</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Garantie commerciale de 3 ans pi&egrave;ces et main d&apos;&oelig;uvre. Sont exclus : usage anormal, n&eacute;gligence, modifications non autoris&eacute;es, usure normale.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">7. Maintenance et support</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Support technique 24/7</li>
        <li>Maintenance pr&eacute;ventive annuelle</li>
        <li>Mises &agrave; jour logicielles</li>
        <li>Intervention sous 4h en &Icirc;le-de-France, 24h en province</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">8. Garantie satisfait ou rembours&eacute;</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        CashMonetik offre une garantie &quot;Satisfait ou rembours&eacute;&quot; de 30 jours permettant le retour de l&apos;&eacute;quipement.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">9. R&eacute;siliation</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Pour les contrats de location : pr&eacute;avis de 3 mois et indemnit&eacute; &eacute;quivalente &agrave; 3 mois de loyers.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">10. Donn&eacute;es personnelles</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Traitement conforme au RGPD. Voir notre{' '}
        <Link href="/politique-confidentialite" className="text-primary underline">Politique de confidentialit&eacute;</Link>.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">11. Litiges</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        &Agrave; d&eacute;faut d&apos;accord amiable, les litiges seront port&eacute;s devant les tribunaux de Paris.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">12. Contact</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Email : support@cashmonetik.fr</li>
        <li>T&eacute;l&eacute;phone : 01 62 34 34 62</li>
        <li>Adresse : Paris, France</li>
      </ul>
    </div>
  );
}
