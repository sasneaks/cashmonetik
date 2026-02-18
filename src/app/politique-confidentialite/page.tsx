import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité de CashMonetik. Traitement des données personnelles, cookies et droits RGPD.',
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-[900px] mx-auto mt-28 max-md:mt-20 mb-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-primary font-medium font-display text-sm hover:gap-3 transition-all">
        &larr; Retour &agrave; l&apos;accueil
      </Link>

      <h1 className="font-display text-[2.5rem] font-extrabold mb-4">Politique de Confidentialit&eacute;</h1>
      <p className="text-text-tertiary mb-12 text-sm">Derni&egrave;re mise &agrave; jour : 9 f&eacute;vrier 2026</p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">1. Introduction</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        CashMonetik accorde une grande importance &agrave; la protection de vos donn&eacute;es personnelles. Cette politique vous informe sur la mani&egrave;re dont nous collectons, utilisons et prot&eacute;geons vos donn&eacute;es conform&eacute;ment au RGPD.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">2. Responsable du traitement</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        <strong className="text-text">CASH MONETIK SASU</strong><br />
        Adresse : 8 rue de l&apos;Est, 92100 Boulogne-Billancourt<br />
        Email : support@cashmonetik.fr<br />
        T&eacute;l&eacute;phone : 01 62 34 34 62
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">3. Donn&eacute;es collect&eacute;es</h2>
      <h3 className="font-display text-xl font-semibold mt-8 mb-4">3.1 Donn&eacute;es que vous nous fournissez</h3>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Informations d&apos;identification : nom, pr&eacute;nom, soci&eacute;t&eacute;</li>
        <li>Coordonn&eacute;es : adresse email, num&eacute;ro de t&eacute;l&eacute;phone</li>
        <li>Informations professionnelles : secteur d&apos;activit&eacute;, type de commerce</li>
        <li>Informations de commande : produits command&eacute;s, pr&eacute;f&eacute;rences</li>
      </ul>

      <h3 className="font-display text-xl font-semibold mt-8 mb-4">3.2 Donn&eacute;es collect&eacute;es automatiquement</h3>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Donn&eacute;es de navigation : pages visit&eacute;es, dur&eacute;e de visite</li>
        <li>Donn&eacute;es techniques : adresse IP, type de navigateur</li>
        <li>Cookies et traceurs</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">4. Finalit&eacute;s du traitement</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li><strong className="text-text">Gestion commerciale :</strong> traitement de vos demandes de devis, commandes</li>
        <li><strong className="text-text">Service client :</strong> assistance technique, support, maintenance</li>
        <li><strong className="text-text">Communication :</strong> envoi d&apos;informations sur nos produits (avec consentement)</li>
        <li><strong className="text-text">Am&eacute;lioration :</strong> analyse de l&apos;utilisation de notre site</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">5. Dur&eacute;e de conservation</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li><strong className="text-text">Clients actifs :</strong> dur&eacute;e de la relation commerciale + 3 ans</li>
        <li><strong className="text-text">Prospects :</strong> 3 ans &agrave; compter du dernier contact</li>
        <li><strong className="text-text">Facturation :</strong> 10 ans (obligation l&eacute;gale)</li>
        <li><strong className="text-text">Cookies :</strong> 13 mois maximum</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">6. Vos droits</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Conform&eacute;ment au RGPD, vous disposez des droits d&apos;acc&egrave;s, rectification, effacement, limitation, portabilit&eacute; et opposition. Pour les exercer :
      </p>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Par email : support@cashmonetik.fr</li>
        <li>Par courrier : CASH MONETIK, 8 rue de l&apos;Est, 92100 Boulogne-Billancourt</li>
      </ul>
      <p className="text-text-secondary leading-[1.8] mb-4">
        En cas de difficult&eacute;, vous pouvez saisir la CNIL (www.cnil.fr).
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">7. Cookies</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        <strong className="text-text">Cookies essentiels :</strong> n&eacute;cessaires au fonctionnement, sans consentement requis.<br />
        <strong className="text-text">Cookies analytiques :</strong> avec votre consentement.<br />
        <strong className="text-text">Cookies marketing :</strong> avec votre consentement.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">8. S&eacute;curit&eacute;</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Cryptage SSL/TLS</li>
        <li>Acc&egrave;s restreint aux donn&eacute;es</li>
        <li>Sauvegardes r&eacute;guli&egrave;res</li>
        <li>Sensibilisation des &eacute;quipes</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">9. Contact</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Email : support@cashmonetik.fr</li>
        <li>T&eacute;l&eacute;phone : 01 62 34 34 62</li>
        <li>Adresse : 8 rue de l&apos;Est, 92100 Boulogne-Billancourt</li>
      </ul>
    </div>
  );
}
