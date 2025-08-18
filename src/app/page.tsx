"use client";
import HeroSection from "../components/HeroSection";
import PipelineSection from "../components/PipelineSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import DashboardPreviewSection from "../components/DashboardPreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PipelineSection />
      <HowItWorksSection />
      <PricingSection />
      <DashboardPreviewSection />
      <FAQSection />
    </>
  );
}
