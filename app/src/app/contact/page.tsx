"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero with colored background */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Contactez-nous
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Une question ? Notre équipe est à votre disposition
              pour vous répondre rapidement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:+33123456789"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Téléphone
                      </h3>
                      <p className="text-lg text-foreground">01 23 45 67 89</p>
                      <p className="text-sm text-muted-foreground">
                        Du lundi au vendredi, 9h-18h
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@cashmonetik.fr"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-lg text-foreground">contact@cashmonetik.fr</p>
                      <p className="text-sm text-muted-foreground">
                        Réponse sous 24h ouvrées
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Adresse
                      </h3>
                      <p className="text-lg text-foreground">Paris, France</p>
                      <p className="text-sm text-muted-foreground">
                        Intervention sur toute la France
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Suivez-nous
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* CTA Audit */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold">Besoin de plus ?</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    Demandez une analyse complète de vos besoins avec recommandations personnalisées.
                  </p>
                  <Button asChild size="sm" className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
                    <Link href="/audit">
                      Demander un audit gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Simple Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-premium-lg border border-border p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Merci ! Nous vous répondrons dans les plus brefs délais.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-xl"
                      >
                        Envoyer un autre message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Envoyez-nous un message
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Nom *
                            </label>
                            <Input
                              placeholder="Votre nom"
                              required
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email *
                            </label>
                            <Input
                              type="email"
                              placeholder="votre@email.fr"
                              required
                              className="h-12 rounded-xl"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Sujet
                          </label>
                          <Input
                            placeholder="Objet de votre message"
                            className="h-12 rounded-xl"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Message *
                          </label>
                          <Textarea
                            placeholder="Votre message..."
                            rows={5}
                            required
                            className="resize-none rounded-xl"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isLoading}
                          className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 border-0 hover:opacity-90"
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
                              Envoyer
                              <Send className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
