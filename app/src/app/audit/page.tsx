"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  FileSearch,
  Send,
  CheckCircle2,
  Building2,
  ShoppingCart,
  Store,
  Warehouse,
  Pill,
  UtensilsCrossed,
  CreditCard,
  Users,
  Clock,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const sectors = [
  { id: "hypermarche", icon: ShoppingCart, label: "Hypermarché" },
  { id: "supermarche", icon: Store, label: "Supermarché" },
  { id: "proximite", icon: Building2, label: "Commerce de proximité" },
  { id: "cash-carry", icon: Warehouse, label: "Cash & Carry" },
  { id: "pharmacie", icon: Pill, label: "Pharmacie" },
  { id: "restauration", icon: UtensilsCrossed, label: "Restauration" },
]

const storeRanges = [
  { id: "1", label: "1 point de vente" },
  { id: "2-5", label: "2 à 5 points de vente" },
  { id: "6-20", label: "6 à 20 points de vente" },
  { id: "20+", label: "Plus de 20 points de vente" },
]

const cashVolumes = [
  { id: "low", label: "Moins de 5 000€/jour" },
  { id: "medium", label: "5 000€ - 20 000€/jour" },
  { id: "high", label: "20 000€ - 50 000€/jour" },
  { id: "very-high", label: "Plus de 50 000€/jour" },
]

const painPoints = [
  { id: "ecarts", icon: TrendingUp, label: "Écarts de caisse fréquents" },
  { id: "temps", icon: Clock, label: "Temps de clôture trop long" },
  { id: "securite", icon: CreditCard, label: "Problèmes de sécurité" },
  { id: "personnel", icon: Users, label: "Gestion du personnel complexe" },
]

const benefits = [
  "Analyse complète de vos flux actuels",
  "Identification des points de friction",
  "Estimation du ROI potentiel",
  "Recommandations personnalisées",
  "Devis détaillé sans engagement",
]

export default function AuditPage() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    sector: "",
    storeCount: "",
    cashVolume: "",
    painPoints: [] as string[],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    comments: "",
  })

  const updateFormData = (key: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const togglePainPoint = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(id)
        ? prev.painPoints.filter((p) => p !== id)
        : [...prev.painPoints, id],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const canProceedStep1 = formData.sector && formData.storeCount
  const canProceedStep2 = formData.cashVolume
  const canProceedStep3 = formData.firstName && formData.lastName && formData.email && formData.company

  return (
    <>
      {/* Hero with gradient background */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20"
            >
              <FileSearch className="w-4 h-4" />
              Audit gratuit et sans engagement
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Demandez votre{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                audit personnalisé
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Nos experts analysent gratuitement vos besoins et vous proposent
              une solution sur-mesure pour optimiser votre gestion des espèces.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">
                    Ce que comprend votre audit
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-400 mb-1">48h</div>
                      <div className="text-sm text-slate-400">Délai de réponse moyen</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Des questions ?{" "}
                  <Link href="/contact" className="text-accent hover:underline">
                    Contactez-nous directement
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-premium-lg border border-border p-12 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Demande envoyée avec succès !
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                    Merci {formData.firstName} ! Notre équipe va analyser votre demande
                    et vous recontacter sous 48h avec une proposition personnalisée.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline" className="rounded-xl">
                      <Link href="/">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Retour à la page principale
                      </Link>
                    </Button>
                    <Button asChild className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
                      <Link href="/solutions">
                        Découvrir nos solutions
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-2xl shadow-premium-lg border border-border overflow-hidden">
                  {/* Progress bar */}
                  <div className="bg-slate-50 px-8 py-4 border-b border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        Étape {step} sur 3
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {step === 1 && "Votre activité"}
                        {step === 2 && "Vos besoins"}
                        {step === 3 && "Vos coordonnées"}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8">
                    {/* Step 1: Activity */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Quel est votre secteur ?
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Sélectionnez le secteur qui correspond le mieux à votre activité.
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {sectors.map((sector) => (
                              <button
                                key={sector.id}
                                type="button"
                                onClick={() => updateFormData("sector", sector.id)}
                                className={cn(
                                  "flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all",
                                  formData.sector === sector.id
                                    ? "border-accent bg-accent/5 text-accent"
                                    : "border-border hover:border-accent/50 hover:bg-slate-50"
                                )}
                              >
                                <sector.icon className="w-6 h-6" />
                                <span className="text-sm font-medium text-center">
                                  {sector.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Combien de points de vente avez-vous ?
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Cela nous aide à dimensionner notre proposition.
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {storeRanges.map((range) => (
                              <button
                                key={range.id}
                                type="button"
                                onClick={() => updateFormData("storeCount", range.id)}
                                className={cn(
                                  "p-4 rounded-xl border-2 text-left transition-all",
                                  formData.storeCount === range.id
                                    ? "border-accent bg-accent/5 text-accent"
                                    : "border-border hover:border-accent/50 hover:bg-slate-50"
                                )}
                              >
                                <span className="font-medium">{range.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={!canProceedStep1}
                            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0"
                          >
                            Continuer
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Needs */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Quel est votre volume de transactions en espèces ?
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Estimation du montant total quotidien en espèces.
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {cashVolumes.map((volume) => (
                              <button
                                key={volume.id}
                                type="button"
                                onClick={() => updateFormData("cashVolume", volume.id)}
                                className={cn(
                                  "p-4 rounded-xl border-2 text-left transition-all",
                                  formData.cashVolume === volume.id
                                    ? "border-accent bg-accent/5 text-accent"
                                    : "border-border hover:border-accent/50 hover:bg-slate-50"
                                )}
                              >
                                <span className="font-medium">{volume.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Quels sont vos principaux défis ? (optionnel)
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Sélectionnez un ou plusieurs défis que vous souhaitez résoudre.
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {painPoints.map((point) => (
                              <button
                                key={point.id}
                                type="button"
                                onClick={() => togglePainPoint(point.id)}
                                className={cn(
                                  "flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all",
                                  formData.painPoints.includes(point.id)
                                    ? "border-accent bg-accent/5 text-accent"
                                    : "border-border hover:border-accent/50 hover:bg-slate-50"
                                )}
                              >
                                <point.icon className="w-5 h-5 flex-shrink-0" />
                                <span className="font-medium text-sm">{point.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="rounded-xl"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Retour
                          </Button>
                          <Button
                            type="button"
                            onClick={() => setStep(3)}
                            disabled={!canProceedStep2}
                            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0"
                          >
                            Continuer
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Vos coordonnées
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Pour que nous puissions vous recontacter avec notre analyse.
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Prénom *
                            </label>
                            <Input
                              value={formData.firstName}
                              onChange={(e) => updateFormData("firstName", e.target.value)}
                              placeholder="Jean"
                              required
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Nom *
                            </label>
                            <Input
                              value={formData.lastName}
                              onChange={(e) => updateFormData("lastName", e.target.value)}
                              placeholder="Dupont"
                              required
                              className="h-12 rounded-xl"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email professionnel *
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder="jean.dupont@entreprise.fr"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Téléphone
                            </label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => updateFormData("phone", e.target.value)}
                              placeholder="06 12 34 56 78"
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Fonction
                            </label>
                            <Input
                              value={formData.position}
                              onChange={(e) => updateFormData("position", e.target.value)}
                              placeholder="Directeur des opérations"
                              className="h-12 rounded-xl"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Entreprise / Enseigne *
                          </label>
                          <Input
                            value={formData.company}
                            onChange={(e) => updateFormData("company", e.target.value)}
                            placeholder="Nom de votre enseigne"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Commentaires additionnels
                          </label>
                          <Textarea
                            value={formData.comments}
                            onChange={(e) => updateFormData("comments", e.target.value)}
                            placeholder="Précisez vos besoins ou posez-nous vos questions..."
                            rows={4}
                            className="resize-none rounded-xl"
                          />
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="rounded-xl"
                          >
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Retour
                          </Button>
                          <Button
                            type="submit"
                            disabled={!canProceedStep3 || isLoading}
                            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0 min-w-[180px]"
                          >
                            {isLoading ? (
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                  />
                                </svg>
                                Envoi en cours...
                              </span>
                            ) : (
                              <>
                                Envoyer ma demande
                                <Send className="ml-2 w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </div>

                        <p className="text-xs text-muted-foreground text-center pt-4">
                          Vos données sont traitées confidentiellement.
                          Consultez notre{" "}
                          <Link href="/confidentialite" className="underline hover:text-foreground">
                            politique de confidentialité
                          </Link>.
                        </p>
                      </motion.div>
                    )}
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
