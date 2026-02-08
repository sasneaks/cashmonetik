"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShoppingCart, Store, Building2, Warehouse, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const useCases = [
  {
    icon: ShoppingCart,
    title: "Hypermarchés",
    features: ["Multi-caisses", "Réconciliation auto", "Reporting consolidé"],
  },
  {
    icon: Store,
    title: "Supermarchés",
    features: ["Format compact", "Installation rapide", "ROI accéléré"],
  },
  {
    icon: Building2,
    title: "Réseaux de proximité",
    features: ["Multi-sites", "Dashboard centralisé", "Alertes temps réel"],
  },
  {
    icon: Warehouse,
    title: "Cash & Carry",
    features: ["Gros volumes", "Intégration ERP", "Traçabilité complète"],
  },
]

export function UseCases() {
  return (
    <section id="cas-usage" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Cas pratiques
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Adapté à votre format de distribution
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Quelle que soit la taille de votre point de vente, nous proposons une
                solution optimisée pour vos besoins spécifiques.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-slate-50 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <useCase.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {useCase.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/machine-retail.png"
                  alt="Monnayeur automatique en pharmacie"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-1">
                    Solution adaptée à chaque environnement
                  </p>
                  <p className="text-slate-300 text-sm">
                    Commerce de proximité, pharmacies, grandes surfaces
                  </p>
                </div>
              </div>

              {/* Floating Product Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-3 border border-border"
              >
                <Image
                  src="/images/machine-front.jpg"
                  alt="Monnayeur Cashlogy"
                  width={150}
                  height={100}
                  className="rounded-lg"
                />
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
