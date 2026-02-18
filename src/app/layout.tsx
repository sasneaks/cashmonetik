import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Chatbot } from '@/components/shared/Chatbot';
import { CookieBanner } from '@/components/shared/CookieBanner';
import { ChatbotProvider } from '@/providers/ChatbotProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'CashMonetik | Solutions monétiques pour commerces de proximité',
    template: '%s | CashMonetik',
  },
  description:
    "CashMonetik équipe les professionnels avec des caisses automatiques, bornes de commande et robots de nettoyage. Installation sous 48h, formation incluse, support 24/7.",
  keywords: [
    'caisse automatique',
    'borne de commande',
    'robot nettoyage',
    'monnayeur automatique',
    'équipement commerce',
    'CashMonetik',
  ],
  authors: [{ name: 'CashMonetik' }],
  metadataBase: new URL('https://cashmonetik.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cashmonetik.fr',
    siteName: 'CashMonetik',
    title: 'CashMonetik | Solutions monétiques nouvelle génération',
    description:
      "Caisses automatiques, bornes de commande et robots de nettoyage. Installation sous 48h pour les commerces de proximité.",
    images: [{ url: '/assets/logo-cashmonetik.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CashMonetik | Solutions monétiques nouvelle génération',
    description:
      "Caisses automatiques, bornes de commande et robots de nettoyage. Installation sous 48h.",
    images: ['/assets/logo-cashmonetik.webp'],
  },
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: '48x48' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
  manifest: '/assets/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'CashMonetik',
              description:
                'Solutions monétiques pour commerces de proximité : caisses automatiques, bornes de commande, robots de nettoyage',
              url: 'https://cashmonetik.fr',
              telephone: '+33162343462',
              email: 'support@cashmonetik.fr',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8 rue de l\'Est',
                postalCode: '92100',
                addressLocality: 'Boulogne-Billancourt',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.8352,
                longitude: 2.2407,
              },
              openingHours: 'Mo-Fr 09:00-18:00',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
              priceRange: '€€',
            }),
          }}
        />
      </head>
      <body className="font-body bg-bg text-text antialiased">
        <ChatbotProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <Chatbot />
          <CookieBanner />
        </ChatbotProvider>
      </body>
    </html>
  );
}
