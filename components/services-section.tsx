"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, GraduationCap, FileCheck, BookOpen, Building2, Users, Phone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: MessageCircle,
    title: "Free Counselling",
    description: "Personalized guidance tailored to your academic goals and career aspirations.",
    color: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Student Admission",
    description: "Complete admission services from application to enrollment in top universities.",
    color: "text-green-600",
  },
  {
    icon: FileCheck,
    title: "Compliance Assistance",
    description: "Expert visa processing support to ensure smooth immigration procedures.",
    color: "text-purple-600",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Comprehensive IELTS, TOEFL, and PTE coaching with proven success rates.",
    color: "text-orange-600",
  },
  {
    icon: Building2,
    title: "Partner Universities",
    description: "Access to prestigious global university partners with exclusive opportunities.",
    color: "text-red-600",
  },
  {
    icon: Users,
    title: "Interview Support",
    description: "Professional CAS and GS interview preparation to boost your confidence.",
    color: "text-teal-600",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial counselling to successful enrollment, we provide end-to-end support for your international
            education journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="https://wa.me/9779860818334" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
