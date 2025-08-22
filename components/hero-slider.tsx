"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, Globe } from "lucide-react"
import Link from "next/link"

const countries = [
  {
    name: "United Kingdom",
    image: "/london-landmarks-campus.png",
    flag: "🇬🇧",
  },
  {
    name: "United States",
    image: "/diverse-university-students.png",
    flag: "🇺🇸",
  },
  {
    name: "Canada",
    image: "/canadian-university-maple-leaves.png",
    flag: "🇨🇦",
  },
  {
    name: "Japan",
    image: "/japanese-university-cherry-blossoms.png",
    flag: "🇯🇵",
  },
  {
    name: "Australia",
    image: "/australian-uni-opera-house.png",
    flag: "🇦🇺",
  },
  {
    name: "New Zealand",
    image: "/new-zealand-university.png",
    flag: "🇳🇿",
  },
  {
    name: "South Korea",
    image: "/south-korea-university.png",
    flag: "🇰🇷",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % countries.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % countries.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + countries.length) % countries.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {countries.map((country, index) => (
          <div
            key={country.name}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={country.image || "/placeholder.svg"}
              alt={`Study in ${country.name}`}
              className="w-full h-full object-cover animate-shimmer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-accent/50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Country Indicator */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover-lift animate-float">
              <Globe className="w-4 h-4 mr-2 animate-bounce-in" />
              Study in {countries[currentSlide].name} {countries[currentSlide].flag}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
            Your Journey to Global Education Starts Here
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Personalized counselling, admissions, visa support, and global opportunities for students.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 hover-lift animate-pulse-glow hover-glow"
            >
              <Link href="https://wa.me/9779860818334" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2 animate-bounce-in" />
                Start Free Counselling
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent hover-lift animate-shimmer"
              onClick={() => document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Globe className="w-5 h-5 mr-2 animate-bounce-in animate-delay-100" />
              Explore Study Destinations
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-12 animate-fade-in-up animate-delay-400">
            {countries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-lift animate-float ${
                  index === currentSlide ? "bg-accent scale-125 animate-pulse-glow" : "bg-white/50 hover:bg-white/75"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover-lift animate-float hover-glow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover-lift animate-float animate-delay-100 hover-glow"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}

export default HeroSlider
