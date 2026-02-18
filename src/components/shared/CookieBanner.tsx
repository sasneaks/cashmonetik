'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type CookieConsent = 'pending' | 'essential' | 'accepted';

export function CookieBanner() {
  const [consent, setConsent] = useLocalStorage<CookieConsent>('cashmonetik_cookies', 'pending');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent !== 'pending') return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [consent]);

  const handleAccept = () => {
    setConsent('accepted');
    setVisible(false);
  };

  const handleEssential = () => {
    setConsent('essential');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[950] bg-[rgba(10,10,15,0.75)] backdrop-blur-[20px] backdrop-saturate-150 border-t border-border"
        >
          <div className="w-full max-w-container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary text-center sm:text-left">
              <span className="font-display font-semibold text-text">Cookies</span> — Ce site
              utilise des cookies pour améliorer votre expérience.
            </p>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleEssential}
                className="text-sm font-display font-semibold px-5 py-2.5 rounded-md border border-border text-text hover:border-border-hover hover:bg-bg-card transition-all duration-300 ease-out-custom"
              >
                Paramètres
              </button>
              <button
                onClick={handleAccept}
                className="text-sm font-display font-semibold px-5 py-2.5 rounded-md bg-primary text-white hover:bg-primary-hover shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.25)] transition-all duration-300 ease-out-custom"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
