'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function FaqContactBlock() {
  return (
    <section className="py-12 max-md:py-8">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 max-md:p-6 rounded-lg bg-bg-card border border-border"
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">
                Pas trouvé votre réponse ?
              </h3>
              <p className="text-sm text-text-secondary">
                Notre équipe vous répond sous 2h ouvrées.
              </p>
            </div>
          </div>
          <Button href="/contact" variant="primary" size="default" arrow>
            Contactez-nous
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
