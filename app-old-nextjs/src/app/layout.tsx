import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Cash Monetik | Solutions de Gestion Automatisée des Espèces",
    template: "%s | Cash Monetik",
  },
  description:
    "Cash Monetik accompagne la grande distribution dans la modernisation de la gestion des espèces. Monnayeurs automatiques, réduction des écarts de caisse, sécurisation des flux.",
  keywords: [
    "monnayeur automatique",
    "gestion espèces",
    "grande distribution",
    "cash management",
    "écarts de caisse",
    "GMS",
  ],
  openGraph: {
    title: "Cash Monetik | Solutions de Gestion Automatisée des Espèces",
    description:
      "Solutions professionnelles de gestion automatisée des espèces pour la grande distribution.",
    type: "website",
    locale: "fr_FR",
    siteName: "Cash Monetik",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Grain texture overlay */}
        <div className="grain" />

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
