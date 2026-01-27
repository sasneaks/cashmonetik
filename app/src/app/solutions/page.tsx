"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Banknote,
  Coins,
  Shield,
  Wifi,
  BarChart3,
  Cog,
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "monnayeurs",
    title: "Monnayeurs de caisse",
    subtitle: "Automatisation au point de vente",
    description:
      "Intégrés directement à votre poste de caisse, nos monnayeurs automatisent le rendu de monnaie et sécurisent les espèces en temps réel.",
    image: "/images/machine-detail.png",
    features: [
      "Acceptation billets et pièces",
      "Rendu automatique de monnaie",
      "Coffre sécurisé intégré",
      "Connexion au logiciel de caisse",
      "Comptage précis à 100%",
      "Format compact",
    ],
    benefits: [
      { label: "Écarts de caisse", value: "-95%", color: "text-red-500" },
      { label: "Temps de clôture", value: "-70%", color: "text-blue-500" },
    ],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "backoffice",
    title: "Solutions Back-office",
    subtitle: "Gestion centralisée",
    description:
      "Centralisez la gestion de vos espèces en back-office. Idéal pour les grands volumes et les opérations de comptage en fin de journée.",
    image: "/images/machine-safe.jpg",
    features: [
      "Haute capacité de stockage",
      "Comptage multi-devises",
      "Coffre-fort certifié",
      "Gestion multi-utilisateurs",
      "Traçabilité complète",
      "Export comptable automatique",
    ],
    benefits: [
      { label: "Productivité", value: "+60%", color: "text-green-500" },
      { label: "Sécurité", value: "100%", color: "text-purple-500" },
    ],
    gradient: "from-purple-600 to-pink-600",
  },
]

const features = [
  {
    icon: Banknote,
    title: "Billets",
    description: "Accepteur et recycleur haute capacité, détection des faux billets",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Coins,
    title: "Pièces",
    description: "Tri automatique, rendu instantané, stockage optimisé",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Coffre-fort intégré, accès contrôlé, traçabilité totale",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Wifi,
    title: "Connectivité",
    description: "Intégration API, reporting temps réel, alertes automatiques",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Tableaux de bord, export comptable, historique complet",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Cog,
    title: "Maintenance",
    description: "Diagnostic à distance, mises à jour automatiques, SAV réactif",
    color: "bg-cyan-100 text-cyan-600",
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero with gradient */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20"
            >
              Nos solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Des solutions adaptées à{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                chaque besoin
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Du monnayeur de caisse compact à la solution back-office complète,
              découvrez notre gamme de produits.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products - alternating full-width sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 ${
            index % 2 === 0
              ? "bg-white"
              : "bg-gradient-to-br from-slate-50 to-blue-50"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image with overlay */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={500}
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-6">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="text-white">
                            <div className={`text-3xl font-bold ${benefit.color}`}>
                              {benefit.value}
                            </div>
                            <div className="text-sm text-white/70">
                              {benefit.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-medium mb-4`}
                >
                  {product.subtitle}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                >
                  {product.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground mb-8"
                >
                  {product.description}
                </motion.p>

                {/* Features list - 2 columns */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-3 mb-8"
                >
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className={`rounded-xl hover-lift bg-gradient-to-r ${product.gradient} border-0`}>
                    <Link href="/audit">
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl">
                    <Link href="/fonctionnement">
                      <Play className="mr-2 w-4 h-4" />
                      Voir en action
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Features - Horizontal scrollable on mobile, grid with colors on desktop */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4"
            >
              Fonctionnalités
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Tout ce dont vous avez besoin
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Nos solutions intègrent des fonctionnalités avancées pour couvrir tous vos besoins.
            </motion.p>
          </div>

          {/* Features - horizontal flex layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
