"use client"

import {
  TrendingDown,
  Clock,
  ShieldCheck,
  Banknote,
  BarChart3,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"

const benefits = [
  {
    icon: TrendingDown,
    title: "Réduction des écarts de caisse",
    description:
      "Éliminez les erreurs de comptage manuel et les différences inexpliquées. Notre solution automatise le comptage avec une précision de 100%.",
    metrics: ["Précision 100%", "Traçabilité totale"],
  },
  {
    icon: Clock,
    title: "Gain de temps opérationnel",
    description:
      "Supprimez les heures passées au comptage manuel. Vos équipes se concentrent sur l'accueil client et les tâches à valeur ajoutée.",
    metrics: ["Comptage instantané", "Clôture accélérée"],
  },
  {
    icon: ShieldCheck,
    title: "Sécurisation des fonds",
    description:
      "Coffre-fort intégré, accès contrôlé et traçabilité complète. Réduisez les risques de vol interne et externe.",
    metrics: ["Coffre intégré", "Accès sécurisé"],
  },
  {
    icon: Banknote,
    title: "Optimisation des collectes",
    description:
      "Anticipez vos besoins en fonds de caisse et optimisez la fréquence des collectes avec des données en temps réel.",
    metrics: ["Suivi temps réel", "Prévisionnel intelligent"],
  },
  {
    icon: BarChart3,
    title: "Reporting centralisé",
    description:
      "Tableau de bord multi-sites, alertes automatiques et export comptable. Pilotez vos flux d'espèces depuis une interface unique.",
    metrics: ["Vue multi-sites", "Alertes automatiques"],
  },
  {
    icon: CheckCircle2,
    title: "Conformité BCE",
    description:
      "Nos solutions respectent les normes de recirculation des billets de la Banque Centrale Européenne. Conformité garantie.",
    metrics: ["Normes BCE", "Certification"],
  },
]

export function Benefits() {
  return (
    <section id="benefices" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Bénéfices mesurables
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Une solution qui transforme vos opérations
            </h2>
            <p className="text-lg text-muted-foreground">
              De la réduction des écarts aux collectes optimisées,
              découvrez comment nos monnayeurs automatiques améliorent votre
              quotidien opérationnel.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <Card className="h-full border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {benefit.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-sm text-foreground"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
