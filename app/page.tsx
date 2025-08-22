import Navigation from "@/components/navigation"
import HeroSlider from "@/components/hero-slider"
import ServicesSection from "@/components/services-section"
import DestinationsSection from "@/components/destinations-section"
import CareerPathways from "@/components/career-pathways"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import UniversitiesSection from "@/components/universities-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSlider />
      <ServicesSection />
      <DestinationsSection />
      <CareerPathways />
      <AboutSection />
      <TestimonialsSection />
      <UniversitiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
