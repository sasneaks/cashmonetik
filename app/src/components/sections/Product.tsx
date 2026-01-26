"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Banknote, Coins, Shield, Zap, RefreshCw, Wifi } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const features = [
  {
    icon: Banknote,
    title: "Billets",
    description: "Accepteur et recycleur de billets haute capacité",
  },
  {
    icon: Coins,
    title: "Pièces",
    description: "Tri et rendu automatique des pièces",
  },
  {
    icon: Shield,
    title: "Coffre sécurisé",
    description: "Accès contrôlé et traçabilité totale",
  },
  {
    icon: Zap,
    title: "Comptage rapide",
    description: "Traitement instantané des transactions",
  },
  {
    icon: RefreshCw,
    title: "Recyclage BCE",
    description: "Conforme aux normes de recirculation",
  },
  {
    icon: Wifi,
    title: "Connecté",
    description: "Suivi temps réel et alertes automatiques",
  },
]

export function Product() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Notre solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Monnayeur automatique nouvelle génération
            </h2>
            <p className="text-lg text-muted-foreground">
              Une technologie éprouvée au service de votre performance opérationnelle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="left">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Center - Product Image */}
          <ScrollReveal>
            <div className="relative flex justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl" />

              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [20, 0, 20] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/machine-detail.png"
                  alt="Détail monnayeur automatique"
                  width={400}
                  height={400}
                  className="drop-shadow-2xl"
                />
              </motion.div>

              {/* Accent Ring */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-full blur-sm" />
            </div>
          </ScrollReveal>

          {/* Right Features */}
          <div className="space-y-6">
            {features.slice(3, 6).map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: -8 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
