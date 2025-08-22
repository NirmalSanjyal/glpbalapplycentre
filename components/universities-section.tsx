"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const universities = {
  UK: [
    {
      name: "University of Hull",
      logo: "/university-hull-logo.png",
      ranking: "Top 50 UK",
      specialties: ["Business", "Engineering", "Medicine"],
    },
    {
      name: "University of Birmingham",
      logo: "/university-birmingham-logo.png",
      ranking: "Russell Group",
      specialties: ["Research", "Medicine", "Law"],
    },
    {
      name: "University of Manchester",
      logo: "/university-manchester-logo.png",
      ranking: "Top 30 Global",
      specialties: ["Engineering", "Computer Science", "Business"],
    },
    {
      name: "London Metropolitan University",
      logo: "/london-metropolitan-university-logo.png",
      ranking: "London Based",
      specialties: ["Arts", "Business", "Architecture"],
    },
  ],
  "Australia & USA": [
    {
      name: "University of Melbourne",
      logo: "/university-melbourne-logo.png",
      ranking: "Top 40 Global",
      specialties: ["Medicine", "Law", "Engineering"],
    },
    {
      name: "Monash University",
      logo: "/monash-university-logo.png",
      ranking: "Go8 Member",
      specialties: ["Research", "Medicine", "Business"],
    },
    {
      name: "University of California",
      logo: "/uc-seal.png",
      ranking: "Top 20 Global",
      specialties: ["Technology", "Research", "Innovation"],
    },
    {
      name: "Boston University",
      logo: "/boston-university-logo.png",
      ranking: "Top 50 US",
      specialties: ["Business", "Medicine", "Engineering"],
    },
  ],
}

const UniversitiesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leading University Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have established strong partnerships with prestigious universities worldwide, ensuring our students have
            access to quality education and exclusive opportunities.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(universities).map(([region, unis]) => (
            <div key={region}>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">{region}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {unis.map((university, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <img
                          src={university.logo || "/placeholder.svg"}
                          alt={`${university.name} logo`}
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-2 text-sm leading-tight">
                        {university.name}
                      </h4>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {university.ranking}
                      </Badge>
                      <div className="space-y-1">
                        {university.specialties.map((specialty, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground">
                            {specialty}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UniversitiesSection
