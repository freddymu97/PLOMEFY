import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { FeaturesSection } from "@/components/features-section"
import { NextGenSection } from "@/components/next-gen-section"
import { PersonalOsSection } from "@/components/personal-os-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <DashboardPreview />
      <FeaturesSection />
      <NextGenSection />
      <PersonalOsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}

