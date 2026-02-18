import { Hero } from '@/components/sections/home/Hero';
import { TrustedBy } from '@/components/sections/home/TrustedBy';
import { TrustBadges } from '@/components/sections/home/TrustBadges';
import { Problems } from '@/components/sections/home/Problems';
import { Solutions } from '@/components/sections/home/Solutions';
import { HowItWorks } from '@/components/sections/home/HowItWorks';
import { Sectors } from '@/components/sections/home/Sectors';
import { CtaFinal } from '@/components/sections/home/CtaFinal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <TrustBadges />
      <Problems />
      <Solutions />
      <HowItWorks />
      <Sectors />
      <CtaFinal />
    </>
  );
}
