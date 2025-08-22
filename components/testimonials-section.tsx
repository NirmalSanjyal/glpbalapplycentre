"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    country: "Nepal",
    university: "University of Manchester, UK",
    course: "MSc Computer Science",
    rating: 5,
    text: "Global Apply Centre made my dream of studying in the UK a reality. Their guidance throughout the application process was exceptional, and I couldn't have done it without their support.",
    image: "/placeholder-6pj4e.png",
  },
  {
    name: "Rajesh Thapa",
    country: "Nepal",
    university: "University of Melbourne, Australia",
    course: "MBA",
    rating: 5,
    text: "The team at Global Apply Centre provided personalized counseling that helped me choose the perfect program. Their visa assistance was thorough and professional.",
    image: "/young-nepali-student.png",
  },
  {
    name: "Anita Gurung",
    country: "Nepal",
    university: "University of Toronto, Canada",
    course: "BSc Engineering",
    rating: 5,
    text: "From IELTS preparation to university selection, Global Apply Centre supported me every step of the way. I'm now studying at my dream university in Canada!",
    image: "/young-asian-woman-engineering-student.png",
  },
  {
    name: "Suresh Rai",
    country: "Nepal",
    university: "Boston University, USA",
    course: "MS Data Science",
    rating: 5,
    text: "The scholarship guidance I received was invaluable. Global Apply Centre helped me secure funding that made my American education affordable and accessible.",
    image: "/young-south-asian-graduate.png",
  },
  {
    name: "Kamala Poudel",
    country: "Nepal",
    university: "University of Auckland, New Zealand",
    course: "Master of Public Health",
    rating: 5,
    text: "Professional, knowledgeable, and caring - that's how I'd describe the Global Apply Centre team. They made the complex process simple and stress-free.",
    image: "/young-nepali-healthcare-student.png",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Student Experiences & Reviews</h2>
          <p className="text-lg text-muted-foreground">
            Hear from our successful students who are now pursuing their dreams at top universities worldwide.
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Student Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-accent/30 mb-4 mx-auto md:mx-0" />
                    <p className="text-lg text-card-foreground leading-relaxed italic">"{currentTestimonial.text}"</p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Student Info */}
                  <div>
                    <h4 className="font-semibold text-card-foreground text-lg">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground">{currentTestimonial.course}</p>
                    <p className="text-accent font-medium">{currentTestimonial.university}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
