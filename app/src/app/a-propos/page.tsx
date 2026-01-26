"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Target,
  Users,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous visons la meilleure qualité dans chaque installation, chaque intervention et chaque relation client.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Une équipe à taille humaine, réactive et disponible pour vous accompagner au quotidien.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Plus de 10 ans de savoir-faire dans la gestion automatisée des espèces et le cash management.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Handshake,
    title: "Confiance",
    description:
      "Des partenariats solides avec les leaders du marché pour vous garantir le meilleur.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
]

const partners = [
  { name: "Glory", type: "Fabricant", color: "bg-blue-100 text-blue-700" },
  { name: "Cashlogy", type: "Fabricant", color: "bg-cyan-100 text-cyan-700" },
  { name: "Suzohapp", type: "Fabricant", color: "bg-green-100 text-green-700" },
  { name: "Brinks", type: "Transport de fonds", color: "bg-purple-100 text-purple-700" },
  { name: "Loomis", type: "Transport de fonds", color: "bg-pink-100 text-pink-700" },
  { name: "Prosegur", type: "Transport de fonds", color: "bg-orange-100 text-orange-700" },
]

const stats = [
  { value: "500+", label: "Installations", color: "text-blue-500" },
  { value: "98%", label: "Satisfaction client", color: "text-green-500" },
  { value: "24h", label: "Délai intervention", color: "text-purple-500" },
  { value: "10+", label: "Années expérience", color: "text-orange-500" },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero with gradient */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              À propos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Votre partenaire{" "}
              <span className="text-orange-200">cash management</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Cash Monetik accompagne la grande distribution dans la
              modernisation de sa gestion des espèces depuis plus de 10 ans.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats - Colorful cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-all"
              >
                <div className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission - Split layout with image */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                Notre mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Simplifier la gestion des espèces pour les professionnels
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nous croyons que la gestion des espèces ne devrait pas être une
                source de stress pour les commerçants. Notre mission est de
                fournir des solutions fiables, simples et efficaces qui
                permettent à nos clients de se concentrer sur leur activité.
              </p>
              <div className="space-y-4">
                {[
                  "Réduire les écarts de caisse à zéro",
                  "Libérer du temps pour le service client",
                  "Sécuriser les flux de trésorerie",
                  "Simplifier les opérations quotidiennes",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/machine-front.jpg"
                alt="Équipe Cash Monetik"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Horizontal layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4"
            >
              Nos valeurs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
            >
              Ce qui nous guide
            </motion.h2>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl ${value.bgColor} ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partenaires" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30"
              >
                Nos partenaires
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Un écosystème de confiance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-300 mb-8"
              >
                Nous travaillons avec les leaders mondiaux du cash management
                et du transport de fonds pour vous garantir les meilleures
                solutions du marché.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium border border-green-500/30">
                  <Shield className="w-4 h-4" />
                  Certifié BCE
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
                  <Zap className="w-4 h-4" />
                  Support 24/7
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`${partner.color} rounded-xl p-6 text-center cursor-pointer transition-transform`}
                >
                  <div className="text-xl font-bold mb-1">
                    {partner.name}
                  </div>
                  <div className="text-sm opacity-70">
                    {partner.type}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Envie de nous rejoindre ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Nous sommes toujours à la recherche de talents pour renforcer
              notre équipe. Consultez nos offres ou envoyez-nous une candidature
              spontanée.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 bg-white text-orange-600 hover:bg-orange-50 rounded-xl hover-lift"
              >
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 border-white/30 text-white hover:bg-white/10 rounded-xl"
              >
                <Link href="/audit">Demander un audit</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
