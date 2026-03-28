import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import IntegratedPlatform from "./components/IntegratedPlatform";
import MESSection from "./components/MESSection";
import QMSSection from "./components/QMSSection";

import BenefitsSection, { CTASection } from "./components/BenefitsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntegratedPlatform />
      <MESSection />
      <QMSSection />

      <BenefitsSection />
      <CTASection />
    </>
  );
}
