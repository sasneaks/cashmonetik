import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { footerLinks } from '@/lib/content';

export function Footer() {
  return (
    <footer className="pt-14 max-md:pt-10 pb-8 border-t border-border bg-gradient-to-b from-[rgba(59,130,246,0.02)] to-transparent">
      <Container>
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-border max-lg:grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/assets/logo-cashmonetik.webp" alt="CashMonetik" width={200} height={70} className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-text-tertiary leading-relaxed max-w-[280px] mb-6">
              Solutions monétiques innovantes pour les commerces de proximité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-text-tertiary mb-5">
              Navigation
            </h4>
            {footerLinks.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-text-secondary py-1.5 hover:text-text transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Secteurs */}
          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-text-tertiary mb-5">
              Secteurs
            </h4>
            {footerLinks.sectors.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-text-secondary py-1.5 hover:text-text transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-text-tertiary mb-5">
              Légal
            </h4>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-text-secondary py-1.5 hover:text-text transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-xs text-text-tertiary">&copy; 2026 CashMonetik. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
}
