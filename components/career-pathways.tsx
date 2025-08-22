"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Microscope,
  Briefcase,
  Stethoscope,
  Monitor,
  Palette,
  TrendingUp,
  Award,
  Newspaper,
  Calendar,
} from "lucide-react"

const pathways = [
  {
    category: "Courses",
    items: [
      { name: "STEM", icon: Microscope, description: "Science, Technology, Engineering & Mathematics" },
      { name: "Business", icon: Briefcase, description: "Management, Finance & Entrepreneurship" },
      { name: "Medicine", icon: Stethoscope, description: "Healthcare & Medical Sciences" },
      { name: "IT", icon: Monitor, description: "Computer Science & Information Technology" },
      { name: "Arts", icon: Palette, description: "Creative Arts & Liberal Studies" },
    ],
  },
  {
    category: "The Next Step",
    items: [
      { name: "Career Guidance", icon: TrendingUp, description: "Professional career counselling and planning" },
      { name: "Internships", icon: Briefcase, description: "Global internship opportunities" },
    ],
  },
  {
    category: "Opportunities",
    items: [
      { name: "Scholarships", icon: Award, description: "Latest scholarship opportunities worldwide" },
      { name: "Study Updates", icon: Newspaper, description: "Policy updates and education news" },
      { name: "Events", icon: Calendar, description: "Education fairs, webinars & workshops" },
    ],
  },
]

const CareerPathways = () => {
  return (
    <section id="career" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Career Pathways</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover diverse academic programs and career opportunities that align with your passion and professional
            goals.
          </p>
        </div>

        <div className="space-y-12">
          {pathways.map((pathway, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">{pathway.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {pathway.items.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <IconComponent className="w-7 h-7 text-accent" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-card-foreground mb-2">{item.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explore All Pathways
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CareerPathways
