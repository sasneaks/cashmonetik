'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function VideoShowcase() {
  return (
    <section className="py-16 max-md:py-10">
      <Container>
        <SectionHeader
          tag="Vidéo"
          title={<>Nos solutions <span className="text-primary">en action</span></>}
          subtitle="Découvrez nos équipements monétiques en fonctionnement réel chez nos clients."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          custom={0.2}
          className="rounded-lg overflow-hidden bg-bg-card border border-border"
        >
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video object-cover"
            poster=""
          >
            <source src="/assets/about-video.mov" type="video/quicktime" />
            <source src="/assets/about-video.mov" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </motion.div>
      </Container>
    </section>
  );
}
