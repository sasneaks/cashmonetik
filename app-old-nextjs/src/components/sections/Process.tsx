"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FileSearch, Settings, Rocket, HeadphonesIcon } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Audit de vos besoins",
    description:
      "Analyse de vos flux actuels, identification des points de friction et évaluation du potentiel.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Solution sur-mesure",
    description:
      "Recommandation du matériel adapté à votre configuration et vos contraintes.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Déploiement & Formation",
    description:
      "Installation par nos techniciens certifiés et formation complète de vos équipes.",
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "Support continu",
    description:
      "Maintenance préventive, hotline dédiée et mises à jour logicielles incluses.",
  },
]

export function Process() {
  return (
    <section id="comment-ca-marche" className="py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Product Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />

              <div className="relative">
                <Image
                  src="/images/machine-close.jpg"
                  alt="Détail du monnayeur automatique"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />

                {/* Floating Detail Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Installation rapide</p>
                      <p className="text-xs text-slate-500">1/2 journée par poste</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Steps */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4 border border-blue-500/30">
                Processus simplifié
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comment ça marche
              </h2>
              <p className="text-lg text-slate-400 mb-12">
                Un accompagnement de A à Z pour garantir le succès de votre projet
                en automatisation.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    {/* Number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <step.icon className="w-5 h-5 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
