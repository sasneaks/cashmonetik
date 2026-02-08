"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const footerLinks = {
  solutions: [
    { label: "Monnayeurs de caisse", href: "/solutions#monnayeurs" },
    { label: "Back-office", href: "/solutions#backoffice" },
    { label: "Intégrations", href: "/solutions#integrations" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Nos partenaires", href: "/a-propos#partenaires" },
    { label: "Contact", href: "/contact" },
  ],
  ressources: [
    { label: "Comment ça marche", href: "/fonctionnement" },
    { label: "Secteurs", href: "/secteurs" },
    { label: "Demander un audit", href: "/audit" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative">
        {/* CTA Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              >
                Prêt à transformer votre{" "}
                <span className="gradient-text">gestion des espèces</span> ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
              >
                Nos experts analysent vos besoins et vous proposent une solution sur-mesure.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Demander un audit gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-colors"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CM</span>
                </div>
                <span className="font-semibold text-lg">Cash Monetik</span>
              </Link>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">
                Solutions professionnelles de gestion automatisée des espèces
                pour la grande distribution.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.entreprise.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Direct */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span className="text-sm text-slate-400">01 23 45 67 89</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span className="text-sm text-slate-400">contact@cashmonetik.fr</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span className="text-sm text-slate-400">Paris, France</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Cash Monetik. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/mentions-legales"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/confidentialite"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
