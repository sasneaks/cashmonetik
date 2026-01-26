"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import {
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Clock,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: TrendingDown,
    title: "Écarts de caisse",
    description: "Éliminez les erreurs de comptage et les différences inexpliquées",
    stat: "-95%",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Clock,
    title: "Temps de clôture",
    description: "Accélérez les opérations de fin de journée",
    stat: "-70%",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisation",
    description: "Coffre intégré et traçabilité complète des flux",
    stat: "100%",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Zap,
    title: "Productivité",
    description: "Libérez vos équipes pour le service client",
    stat: "+40%",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
]

const logos = ["Glory", "Cashlogy", "Suzohapp", "Brinks", "Loomis", "Prosegur"]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-slate-950"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 opacity-30"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          </motion.div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  Solutions certifiées BCE
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8"
              >
                Automatisez la gestion{" "}
                <span className="gradient-text">des espèces</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg"
              >
                Réduisez vos écarts de caisse, sécurisez vos fonds et optimisez
                vos opérations avec nos monnayeurs automatiques.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 rounded-xl hover-lift border-0"
                >
                  <Link href="/audit">
                    Demander un audit gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base bg-white/10 text-white hover:bg-white/20 rounded-xl border-0 backdrop-blur-sm"
                >
                  <Link href="/solutions">Découvrir nos solutions</Link>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/10"
              >
                {[
                  { value: "500+", label: "Installations" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <Image
                  src="/images/hero-machine.png"
                  alt="Monnayeur automatique Cash Monetik"
                  width={600}
                  height={500}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />

              </div>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Logos Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/70 mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-semibold text-white/50"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Horizontal scroll cards on mobile, grid on desktop */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4"
            >
              Pourquoi nous choisir
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Des résultats mesurables
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Nos solutions apportent des améliorations concrètes et quantifiables
              à votre gestion des espèces.
            </motion.p>
          </div>

          {/* Benefits - horizontal layout with colored accents */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-white shadow-lg"
              >
                <div className={`flex-shrink-0 w-24 h-24 rounded-2xl ${benefit.bgColor} flex items-center justify-center`}>
                  <benefit.icon className={`w-12 h-12 ${benefit.iconColor}`} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {benefit.description}
                  </p>
                </div>
                <div className={`flex-shrink-0 text-right`}>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0 hover:opacity-90">
              <Link href="/solutions">
                Découvrir toutes nos solutions
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase - Split screen with video placeholder */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video/Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/machine-close.jpg"
                  alt="Détail du monnayeur"
                  width={600}
                  height={500}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30"
              >
                Technologie de pointe
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Une solution complète pour votre caisse
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-300 mb-10"
              >
                Nos monnayeurs automatiques combinent fiabilité, sécurité et
                simplicité pour transformer votre gestion quotidienne des espèces.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                {[
                  "Accepteur et recycleur de billets haute capacité",
                  "Tri et rendu automatique des pièces",
                  "Coffre-fort intégré avec accès sécurisé",
                  "Connectivité temps réel et reporting",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 rounded-xl hover-lift border-0"
                >
                  <Link href="/fonctionnement">
                    Comment ça marche
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Preview - Bento grid style */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4"
            >
              Secteurs
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Adapté à tous les formats de distribution
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Quelle que soit la taille de votre point de vente, nous avons une
              solution adaptée à vos besoins spécifiques.
            </motion.p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Large card with image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
            >
              <Image
                src="/images/machine-retail.png"
                alt="Monnayeur en point de vente"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/70 text-sm mb-2">Tous secteurs</p>
                <h3 className="text-white font-bold text-2xl mb-4">
                  Solution adaptée à chaque environnement
                </h3>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl">
                  <Link href="/secteurs">
                    Voir tous les secteurs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Small colored cards */}
            {[
              { title: "Hypermarchés", color: "bg-gradient-to-br from-blue-500 to-blue-600" },
              { title: "Supermarchés", color: "bg-gradient-to-br from-cyan-500 to-cyan-600" },
              { title: "Proximité", color: "bg-gradient-to-br from-green-500 to-green-600" },
              { title: "Cash & Carry", color: "bg-gradient-to-br from-purple-500 to-purple-600" },
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`${sector.color} rounded-3xl p-6 flex flex-col justify-end min-h-[160px] hover:scale-[1.02] transition-transform cursor-pointer`}
              >
                <CheckCircle2 className="w-6 h-6 text-white/80 mb-2" />
                <h3 className="text-white font-bold text-lg">{sector.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
