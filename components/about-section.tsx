"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Globe, Award, ArrowRight } from "lucide-react"

const stats = [
  { icon: Users, number: "5000+", label: "Students Guided" },
  { icon: Globe, number: "15+", label: "Countries" },
  { icon: Award, number: "98%", label: "Success Rate" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-gradient bg-clip-text text-transparent">
              About Global Apply Centre
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="animate-fade-in animate-delay-100">
                At Global Apply Centre, we specialize in guiding students towards their academic dreams abroad.{" "}
                {/* Removed "over a decade of experience" text */}
                We have successfully helped thousands of students secure admissions to prestigious universities
                worldwide.
              </p>
              <p className="animate-fade-in animate-delay-200">
                Our team of expert counselors understands the complexities of international education systems and
                provides personalized guidance tailored to each student's unique goals and aspirations. From initial
                counseling to visa processing, we ensure a smooth and successful journey.
              </p>
              <p className="animate-fade-in animate-delay-300">
                We pride ourselves on maintaining strong partnerships with leading universities across the globe,
                offering our students exclusive opportunities and scholarships that make quality education accessible
                and affordable.
              </p>
            </div>
            <div className="mt-8 animate-fade-in animate-delay-500">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift animate-pulse-glow"
              >
                More Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {" "}
            {/* Changed from grid-cols-2 to grid-cols-3 for 3 stats */}
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className={`text-center hover-lift animate-float animate-delay-${(index + 1) * 100}`}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-glow">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
