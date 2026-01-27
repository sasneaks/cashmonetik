"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FileSearch,
  Settings,
  Rocket,
  HeadphonesIcon,
  CheckCircle2,
  Play,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Audit de vos besoins",
    description:
      "Nos experts analysent vos flux actuels, identifient les points de friction et évaluent le potentiel de votre gestion des espèces.",
    details: [
      "Analyse des volumes quotidiens",
      "Évaluation des écarts de caisse",
      "Étude de votre configuration actuelle",
      "Identification des gains potentiels",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    icon: Settings,
    title: "Solution sur-mesure",
    description:
      "Sur la base de notre audit, nous vous recommandons la solution la plus adaptée : type de matériel, nombre de machines, options de financement.",
    details: [
      "Recommandation personnalisée",
      "Devis détaillé et transparent",
      "Options de financement flexibles",
      "Planning de déploiement",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Déploiement & Formation",
    description:
      "Nos techniciens certifiés installent le matériel, le configurent et forment vos équipes pour une prise en main rapide et efficace.",
    details: [
      "Installation par techniciens certifiés",
      "Paramétrage et tests complets",
      "Formation du personnel",
      "Documentation complète",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "Support continu",
    description:
      "Bénéficiez de notre accompagnement dans la durée : maintenance préventive, hotline dédiée, mises à jour logicielles et interventions rapides.",
    details: [
      "Hotline dédiée",
      "Maintenance préventive",
      "Mises à jour automatiques",
      "Intervention sous 24-48h",
    ],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
]

export default function FonctionnementPage() {
  return (
    <>
      {/* Hero with gradient */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              Fonctionnement
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Comment ça{" "}
              <span className="text-cyan-200">marche</span> ?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Un processus simple et accompagné pour garantir le succès de
              votre projet.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/machine-close.jpg"
                alt="Démonstration du monnayeur"
                width={900}
                height={500}
                className="w-full"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl"
                >
                  <Play className="w-10 h-10 text-purple-600 fill-purple-600 ml-1" />
                </motion.button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                <p className="text-white font-semibold text-lg">
                  Voir le fonctionnement en vidéo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps - Modern horizontal stepper on desktop */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Un processus en 4 étapes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              De la phase initiale au support continu, nous vous accompagnons à chaque étape.
            </motion.p>
          </div>

          {/* Horizontal stepper - Desktop */}
          <div className="hidden lg:block">
            {/* Progress bar with numbers */}
            <div className="relative mb-16">
              {/* Background line */}
              <div className="absolute top-10 left-0 right-0 h-1 bg-slate-200 rounded-full" />
              {/* Gradient progress line */}
              <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 rounded-full" />

              {/* Step indicators */}
              <div className="relative flex justify-between">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-3xl font-bold shadow-xl cursor-pointer`}
                    >
                      {step.number}
                    </motion.div>
                    <div className={`mt-4 w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                      <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-foreground text-center max-w-[180px]">
                      {step.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Detail cards in a row */}
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`${step.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-${step.iconColor.replace('text-', '')}/30 transition-all`}
                >
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 ${step.iconColor} flex-shrink-0`} />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet - Vertical cards */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-3xl ${step.bgColor}`}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${step.color}`} />

                <div className="p-6 pl-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs bg-white/70 rounded-full px-3 py-1.5"
                      >
                        <CheckCircle2 className={`w-3 h-3 ${step.iconColor}`} />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
