import { AgentTypes } from "@/components/landing/AgentTypes";
import { CTABanner } from "@/components/landing/CTABanner";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Industries } from "@/components/landing/Industries";
import { Integrations } from "@/components/landing/Integrations";
import { KeyFeatures } from "@/components/landing/KeyFeatures";
import { Marquee } from "@/components/landing/Marquee";
import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";
import Testimonial from "@/components/landing/Testimonial";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { Workflow } from "@/components/landing/Workflow";



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <AgentTypes />
        <hr className="border-forest border-b " />
        <TrustedBy />
        <hr className="border-forest/20 border-b " />
        <Workflow />
        <KeyFeatures />
        <Pricing />
        <Industries />
        <Testimonial/>
        <Integrations />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
