"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import DarkModeToggle from "./dark-mode-toggle"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Study Destinations", href: "#destinations" },
    { name: "Career Pathways", href: "#career" },
    { name: "Blogs & News", href: "#blogs" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-slide-in-left">
            <Link href="/" className="flex items-center space-x-2 hover-lift">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-xl text-primary">Global Apply Centre</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-2 animate-slide-in-right">
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift animate-pulse-glow"
            >
              <Link href="https://wa.me/9779860818334" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Free Counselling
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-scale-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-card-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                {/* Dark Mode Toggle */}
                <div className="flex justify-center">
                  <DarkModeToggle />
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="https://wa.me/9779860818334" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Free Counselling
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
