'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center transition-all duration-400 ease-out-custom ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.8)] backdrop-blur-[24px] backdrop-saturate-200 border-b border-[rgba(59,130,246,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : ''
        }`}
      >
        <div className="w-full max-w-container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0" aria-label="CashMonetik - Accueil">
            <Image src="/assets/logo-cashmonetik.png" alt="CashMonetik" width={220} height={77} className="h-14 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:rounded-sm after:transition-[width] after:duration-400 after:ease-out-custom hover:text-text hover:after:w-full ${
                  pathname === link.href ? 'text-text after:w-full' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm" arrow>
              Audit gratuit
            </Button>
          </div>

          <button
            className="lg:hidden w-8 h-8 relative z-[1001] flex flex-col justify-center items-center"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-5 h-[1.5px] bg-text absolute transition-all duration-300 ease-out-custom ${
                mobileOpen ? 'top-[15px] rotate-45' : 'top-[10px]'
              }`}
            />
            <span
              className={`block h-[1.5px] bg-text absolute top-[15px] transition-all duration-300 ease-out-custom ${
                mobileOpen ? 'opacity-0 w-5' : 'opacity-100 w-3.5'
              }`}
              style={{ left: '6px' }}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text absolute transition-all duration-300 ease-out-custom ${
                mobileOpen ? 'top-[15px] -rotate-45' : 'top-[20px]'
              }`}
            />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
