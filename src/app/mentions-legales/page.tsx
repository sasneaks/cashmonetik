import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site CashMonetik. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-[900px] mx-auto mt-28 max-md:mt-20 mb-16 px-6">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-primary font-medium font-display text-sm hover:gap-3 transition-all">
        &larr; Retour &agrave; l&apos;accueil
      </Link>

      <h1 className="font-display text-[2.5rem] font-extrabold mb-4">Mentions L&eacute;gales</h1>
      <p className="text-text-tertiary mb-12 text-sm">Derni&egrave;re mise &agrave; jour : 18 f&eacute;vrier 2026</p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">1. Informations l&eacute;gales</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Conform&eacute;ment aux dispositions de la loi n&deg; 2004-575 du 21 juin 2004 pour la confiance en l&apos;&eacute;conomie num&eacute;rique,
        il est pr&eacute;cis&eacute; aux utilisateurs du site CashMonetik l&apos;identit&eacute; des diff&eacute;rents intervenants dans le cadre de sa r&eacute;alisation et de son suivi.
      </p>

      <h3 className="font-display text-xl font-semibold mt-8 mb-4">&Eacute;diteur du site</h3>
      <p className="text-text-secondary leading-[1.8] mb-4">
        <strong className="text-text">CASH MONETIK</strong><br />
        SASU &ndash; Soci&eacute;t&eacute; par Actions Simplifi&eacute;e Unipersonnelle<br />
        Capital social : 40 000 &euro;<br />
        SIREN : 931 159 511<br />
        SIRET : 931 159 511 00019<br />
        Code APE : 4619B &ndash; Autres interm&eacute;diaires du commerce en produits divers<br />
        Immatricul&eacute;e au RNE le 18/07/2024<br />
        D&eacute;but d&apos;activit&eacute; : 25/06/2024<br />
        Si&egrave;ge social : 8 rue de l&apos;Est, 92100 Boulogne-Billancourt, France<br />
        Domiciliataire : NOVADOM (SIREN 902 244 870)<br />
        T&eacute;l&eacute;phone : 01 62 34 34 62<br />
        Email : support@cashmonetik.fr
      </p>

      <h3 className="font-display text-xl font-semibold mt-8 mb-4">Directeur de la publication</h3>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Morgan CAZIER, Pr&eacute;sident de la SASU CASH MONETIK.
      </p>

      <h3 className="font-display text-xl font-semibold mt-8 mb-4">H&eacute;bergement</h3>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Le site cashmonetik.fr est h&eacute;berg&eacute; par :<br />
        <strong className="text-text">Netlify, Inc.</strong><br />
        2325 3rd Street, Suite 296<br />
        San Francisco, California 94107<br />
        &Eacute;tats-Unis
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">2. Activit&eacute; de la soci&eacute;t&eacute;</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Autres interm&eacute;diaires du commerce en produits divers, prestations de services, ventes de produits
        de s&eacute;curit&eacute; et plus g&eacute;n&eacute;ralement toutes op&eacute;rations de quelque nature qu&apos;elles soient juridiques,
        &eacute;conomiques et financi&egrave;res, civiles et commerciales, se rattachant &agrave; l&apos;objet sus-indiqu&eacute;
        ou &agrave; tout autre objet similaire ou connexe.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">3. Propri&eacute;t&eacute; intellectuelle</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        L&apos;ensemble de ce site rel&egrave;ve de la l&eacute;gislation fran&ccedil;aise et internationale sur le droit d&apos;auteur et la propri&eacute;t&eacute; intellectuelle.
        Tous les droits de reproduction sont r&eacute;serv&eacute;s. La reproduction de tout ou partie de ce site sur quelque support que ce soit
        est formellement interdite sauf autorisation expresse du directeur de la publication.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">4. Donn&eacute;es personnelles</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD) et &agrave; la loi Informatique et Libert&eacute;s,
        vous disposez d&apos;un droit d&apos;acc&egrave;s, de rectification, de suppression et de portabilit&eacute; des donn&eacute;es vous concernant.
      </p>
      <p className="text-text-secondary leading-[1.8] mb-4">Pour exercer ces droits :</p>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Par email : support@cashmonetik.fr</li>
        <li>Par courrier : CASH MONETIK, 8 rue de l&apos;Est, 92100 Boulogne-Billancourt</li>
      </ul>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Pour plus d&apos;informations, consultez notre{' '}
        <Link href="/politique-confidentialite" className="text-primary underline">Politique de confidentialit&eacute;</Link>.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">5. Cookies</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Ce site utilise des cookies pour am&eacute;liorer l&apos;exp&eacute;rience utilisateur et r&eacute;aliser des statistiques de visite.
        Vous pouvez configurer vos pr&eacute;f&eacute;rences via le bandeau cookies affich&eacute; lors de votre premi&egrave;re visite.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">6. Responsabilit&eacute;</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        CASH MONETIK s&apos;efforce de fournir des informations aussi pr&eacute;cises que possible. Toutefois, elle ne pourra &ecirc;tre tenue
        responsable des omissions, des inexactitudes ou des carences dans la mise &agrave; jour de ces informations.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">7. Droit applicable</h2>
      <p className="text-text-secondary leading-[1.8] mb-4">
        Les pr&eacute;sentes mentions l&eacute;gales sont r&eacute;gies par le droit fran&ccedil;ais.
        En cas de litige, les tribunaux de Nanterre seront seuls comp&eacute;tents.
      </p>

      <h2 className="font-display text-2xl font-bold mt-12 mb-6">8. Contact</h2>
      <ul className="list-disc ml-6 text-text-secondary leading-[1.8] mb-4">
        <li>Email : support@cashmonetik.fr</li>
        <li>T&eacute;l&eacute;phone : 01 62 34 34 62</li>
        <li>Adresse : 8 rue de l&apos;Est, 92100 Boulogne-Billancourt, France</li>
      </ul>
    </div>
  );
}
