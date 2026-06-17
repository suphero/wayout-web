import HeroSection from "@/components/hero/HeroSection";
import ProtocolSection from "@/components/sections/ProtocolSection";
import TokenomicsSection from "@/components/sections/TokenomicsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import ProgressionSection from "@/components/sections/ProgressionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProSection from "@/components/sections/ProSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProtocolSection />
      <TokenomicsSection />
      <SecuritySection />
      <ProgressionSection />
      <FeaturesSection />
      <ProSection />
      <ShowcaseSection />
      <FooterSection />
    </main>
  );
}
