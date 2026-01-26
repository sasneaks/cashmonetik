"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const faqs = [
  {
    question: "Quels types de monnayeurs proposez-vous ?",
    answer:
      "Nous proposons une gamme complète de monnayeurs automatiques adaptés à chaque configuration : monnayeurs de caisse (recycleurs), monnayeurs de back-office, et solutions hybrides. Toutes nos machines sont certifiées BCE pour la recirculation des billets.",
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer:
      "L'installation d'un monnayeur de caisse prend généralement une demi-journée par poste. Pour un déploiement multi-caisses, nous planifions les interventions pour minimiser l'impact sur votre activité, souvent en horaires décalés.",
  },
  {
    question: "Proposez-vous des solutions de financement ?",
    answer:
      "Oui, nous proposons plusieurs options : achat, location longue durée (LLD) ou crédit-bail. Nos conseillers vous aident à identifier la solution la plus adaptée à votre structure et à votre budget.",
  },
  {
    question: "Comment fonctionne la maintenance ?",
    answer:
      "Nos contrats incluent une maintenance préventive régulière, une hotline dédiée et des interventions sur site sous 24-48h en cas de panne. Les mises à jour logicielles sont déployées automatiquement.",
  },
  {
    question: "Les monnayeurs s'intègrent-ils à mon système de caisse ?",
    answer:
      "Oui, nos solutions s'intègrent aux principaux logiciels de caisse du marché (Cegid, Openbravo, etc.) via des API standardisées. Notre équipe technique gère l'intégration et les tests.",
  },
  {
    question: "Quel est le retour sur investissement typique ?",
    answer:
      "Le ROI dépend de votre configuration et de vos volumes. En général, nos clients constatent un retour sur investissement entre 12 et 24 mois grâce à la réduction des écarts, du temps de comptage et de l'optimisation des collectes.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Questions fréquentes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vos questions, nos réponses
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur nos solutions de gestion
              automatisée des espèces.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-50 rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
