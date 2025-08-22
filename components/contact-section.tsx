"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from "lucide-react"
import Link from "next/link"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your international education journey? Get in touch with our expert counselors today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Nepal Office</h4>
                    <p className="text-muted-foreground">Baneshwor, Kathmandu, Nepal</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+977 9860818334</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@globalapplycentre.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">Sunday – Friday, 9 AM – 5 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="https://wa.me/9779860818334" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <Link
                    href="https://www.facebook.com/profile.php?id=61579035278531"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Link>
                </Button>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/place/Educare+-+Abroad+Saathi/@27.6894791,85.3344023,18z/data=!4m6!3m5!1s0x39eb190075b605ab:0x81078e955cbd5a02!8m2!3d27.6895423!4d85.3351062!16s%2Fg%2F11l_5177x5?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Apply Centre Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your study abroad goals..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
