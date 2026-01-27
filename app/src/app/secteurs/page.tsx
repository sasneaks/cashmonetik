"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingCart,
  Store,
  Building2,
  Warehouse,
  Pill,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const sectors = [
  {
    icon: ShoppingCart,
    title: "Hypermarchés",
    description:
      "Gestion centralisée de 20+ caisses avec réconciliation automatique et reporting consolidé multi-sites.",
    features: [
      "Gestion multi-caisses",
      "Réconciliation automatique",
      "Reporting consolidé",
      "Intégration ERP",
    ],
    stats: { value: "-95%", label: "écarts de caisse" },
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Store,
    title: "Supermarchés",
    description:
      "Solution adaptée aux surfaces moyennes avec optimisation des fonds de caisse et clôture accélérée.",
    features: [
      "Format compact",
      "Installation rapide",
      "ROI accéléré",
      "Support dédié",
    ],
    stats: { value: "-70%", label: "temps de clôture" },
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: Building2,
    title: "Commerce de proximité",
    description:
      "Déploiement multi-sites avec pilotage centralisé, idéal pour les réseaux de magasins.",
    features: [
      "Dashboard centralisé",
      "Alertes temps réel",
      "Gestion multi-sites",
      "Standardisation",
    ],
    stats: { value: "100%", label: "visibilité" },
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Warehouse,
    title: "Cash & Carry",
    description:
      "Gestion des volumes importants et des transactions B2B avec intégration aux systèmes de facturation.",
    features: [
      "Gros volumes",
      "Intégration facturation",
      "Traçabilité B2B",
      "Multi-devises",
    ],
    stats: { value: "+60%", label: "productivité" },
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Pill,
    title: "Pharmacies",
    description:
      "Solution discrète et compacte adaptée aux comptoirs de pharmacie avec sécurité renforcée.",
    features: [
      "Format discret",
      "Hygiène optimale",
      "Sécurité renforcée",
      "Intégration logiciel",
    ],
    stats: { value: "24/7", label: "disponibilité" },
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration",
    description:
      "Gestion rapide des espèces pour les environnements à fort débit avec résistance aux conditions difficiles.",
    features: [
      "Haute cadence",
      "Robustesse",
      "Nettoyage facile",
      "Comptage rapide",
    ],
    stats: { value: "2x", label: "plus rapide" },
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]

export default function SecteursPage() {
  return (
    <>
      {/* Hero with gradient */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              Secteurs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Une solution pour{" "}
              <span className="text-cyan-200">chaque secteur</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Quelle que soit votre activité, nous avons une solution adaptée
              à vos contraintes et objectifs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sectors - Alternating layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`py-12 ${index !== sectors.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Icon and stat */}
                <div className="flex-shrink-0 text-center lg:w-48">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-24 h-24 rounded-3xl ${sector.iconBg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <sector.icon className={`w-12 h-12 ${sector.iconColor}`} />
                  </motion.div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent`}>
                    {sector.stats.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {sector.stats.label}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 text-center lg:text-left">
                    {sector.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 text-center lg:text-left">
                    {sector.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {sector.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${sector.bgColor} ${sector.iconColor}`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Button asChild className={`rounded-xl bg-gradient-to-r ${sector.color} border-0 hover:opacity-90`}>
                    <Link href="/audit">
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Section with gradient overlay */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30">
                Exemple concret
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                En pharmacie comme en grande surface
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Notre solution est conçue pour tous les environnements : du comptoir
                de pharmacie au poste de caisse en hypermarché, en passant par
                la restauration rapide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 border-0 hover:opacity-90">
                  <Link href="/contact">
                    Discuter de mon secteur
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/machine-retail.png"
                  alt="Monnayeur en pharmacie"
                  width={600}
                  height={450}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
