"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

const destinations = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: "/london-landmarks-campus.png",
    highlights: ["World-class universities", "Rich cultural heritage", "Post-study work visa"],
    universities: "500+ Universities",
    description: "Home to Oxford, Cambridge, and other prestigious institutions.",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: "/australian-uni-opera-house.png",
    highlights: ["High quality of life", "Research opportunities", "Multicultural society"],
    universities: "300+ Universities",
    description: "Leading destination for international students with excellent support systems.",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    image: "/diverse-university-students.png",
    highlights: ["Top-ranked universities", "Innovation hub", "Diverse programs"],
    universities: "1000+ Universities",
    description: "World's largest higher education system with unmatched opportunities.",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    image: "/canadian-university-maple-leaves.png",
    highlights: ["Affordable education", "Immigration pathways", "Safe environment"],
    universities: "400+ Universities",
    description: "Welcoming country with excellent education and immigration policies.",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    image: "/japanese-university-cherry-blossoms.png",
    highlights: ["Technology leader", "Unique culture", "Scholarship opportunities"],
    universities: "200+ Universities",
    description: "Perfect blend of traditional culture and cutting-edge technology.",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    image: "/new-zealand-university.png",
    highlights: ["Beautiful landscapes", "Quality education", "Work opportunities"],
    universities: "150+ Universities",
    description: "Stunning natural beauty combined with world-class education standards.",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    image: "/south-korea-university.png",
    highlights: ["K-culture hub", "Advanced technology", "Scholarship programs"],
    universities: "350+ Universities",
    description: "Dynamic country offering cutting-edge education in technology and innovation.",
  },
]

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Study Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore world-class education opportunities across the globe. Each destination offers unique advantages for
            your academic and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={`Study in ${destination.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {destination.name} {destination.flag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium bg-accent/90 rounded px-2 py-1">{destination.universities}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{destination.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{destination.description}</p>

                <div className="space-y-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinationsSection
