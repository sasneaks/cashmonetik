"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Handshake, BadgeEuro, FileCheck, Building, Shield, Award } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const partnerships = [
  {
    icon: Handshake,
    title: "Partenaires fabricants",
    description:
      "Leaders mondiaux du cash management : Glory, Cashlogy, Suzohapp.",
  },
  {
    icon: BadgeEuro,
    title: "Solutions de financement",
    description:
      "Location longue durée, crédit-bail ou achat selon vos besoins.",
  },
  {
    icon: FileCheck,
    title: "Intégrateurs certifiés",
    description:
      "Réseau de techniciens formés, installation conforme et SAV réactif.",
  },
  {
    icon: Building,
    title: "Transporteurs de fonds",
    description:
      "Partenariats avec Brinks, Loomis et Prosegur.",
  },
]

export function Partnership() {
  return (
    <section id="partenaires" className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                <Image
                  src="/images/machine-safe.jpg"
                  alt="Monnayeur avec coffre-fort sécurisé"
                  width={600}
                  height={400}
                  className="w-full h-auto opacity-90"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <div className="max-w-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-medium">Sécurité maximale</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Coffre-fort intégré
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Protection de vos fonds avec accès contrôlé et traçabilité complète
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Certifié BCE</p>
                    <p className="text-xs text-slate-500">Conformité garantie</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right Side - Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Écosystème de confiance
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Un réseau de partenaires solides
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Cash Monetik travaille avec un écosystème de partenaires de
                référence pour vous garantir des solutions fiables et un
                service irréprochable.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {partnerships.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Partner Logos */}
            <ScrollReveal delay={0.5}>
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Nos partenaires</p>
                <div className="flex flex-wrap gap-6">
                  {["Glory", "Cashlogy", "Suzohapp", "Brinks", "Loomis"].map(
                    (partner, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-lg font-semibold text-slate-300"
                      >
                        {partner}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
