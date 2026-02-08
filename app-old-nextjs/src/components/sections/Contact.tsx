"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Future: Intégrer Resend ici
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                Contactez-nous
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Demandez votre audit gratuit
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Nos experts analysent vos flux de trésorerie et vous proposent une
                solution sur-mesure. Sans engagement.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Téléphone</p>
                    <p className="font-medium">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">contact@cashmonetik.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Adresse</p>
                    <p className="font-medium">Paris, France</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <ScrollReveal direction="right">
            <Card className="bg-white text-foreground">
              <CardContent className="p-6 lg:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-muted-foreground">
                      Notre équipe vous recontactera sous 24h.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium mb-2"
                        >
                          Prénom
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Jean"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium mb-2"
                        >
                          Nom
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Dupont"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email professionnel
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@entreprise.fr"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Entreprise
                      </label>
                      <Input
                        id="company"
                        placeholder="Nom de votre enseigne"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Votre besoin
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet (nombre de caisses, points de vente, problématiques actuelles...)"
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-foreground hover:bg-foreground/90"
                    >
                      Envoyer ma demande
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez de recevoir
                      les informations de notre équipe commerciale.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
