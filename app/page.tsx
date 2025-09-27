"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import LocomotiveScrollProvider from "@/components/locomotive-scroll"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const skills = [
    { category: "Frontend", items: ["JavaScript", "React", "HTML5", "CSS/SCSS", "Tailwind"] },
    { category: "Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { category: "3D & CAD", items: ["Blender", "Cinema 4D", "CAD Systems"] },
    { category: "Creative", items: ["FL Studio", "Music Production", "UI/UX"] },
  ]

  const projects = [
    {
      title: "Interactive Portfolio",
      description: "Modern React portfolio with advanced animations and responsive design",
      tech: ["React", "Tailwind", "Locomotive Scroll"],
      year: "2024",
    },
    {
      title: "CAD Workflow Optimizer",
      description: "Custom tools for streamlining technical drawing processes",
      tech: ["CAD", "Process Optimization"],
      year: "2023",
    },
    {
      title: "Music Visualization App",
      description: "Real-time audio visualization using Web Audio API",
      tech: ["JavaScript", "Web Audio", "Canvas"],
      year: "2024",
    },
  ]

  const experience = [
    {
      period: "2023 — Present",
      company: "Dřevařská společnost Mníšek s.r.o.",
      role: "Production Specialist",
      description:
        "Optimizing manufacturing processes and creating technical CAD drawings for custom wooden packaging projects.",
    },
    {
      period: "2017 — 2023",
      company: "Barvy Jablonec",
      role: "Technical Consultant",
      description: "Providing B2B and B2C consultations for coating materials, managing inventory systems.",
    },
  ]

  return (
    <LocomotiveScrollProvider>
      <div className="min-h-screen bg-background text-foreground" data-scroll-section>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="gasp-heading text-xl font-semibold">Jakub Růžička</div>
              <div className="hidden md:flex items-center gap-8">
                {["About", "Experience", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`gasp-body text-sm transition-colors hover:text-primary ${
                      activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6" data-scroll-section>
          <div className="max-w-6xl mx-auto">
            <div className="scroll-fade-in" data-scroll data-scroll-speed="1">
              <h1
                className="gasp-heading text-6xl md:text-8xl font-bold mb-6 text-balance"
                data-scroll
                data-scroll-speed="2"
              >
                Jakub Růžička
              </h1>
              <div
                className="gasp-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl scroll-slide-left"
                data-scroll
                data-scroll-speed="1"
                data-scroll-delay="0.1"
              >
                <em className="text-primary">Crafting interfaces.</em> Building polished software and web experiences.
                Experimenting with creative technology and design systems. Multi-disciplinary developer at the
                intersection of code and creativity.
              </div>
              <p
                className="gasp-body text-lg text-muted-foreground max-w-2xl scroll-slide-left"
                data-scroll
                data-scroll-speed="0.5"
                data-scroll-delay="0.2"
              >
                Currently developing custom manufacturing solutions and exploring the boundaries between traditional
                craftsmanship and digital innovation.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6" data-scroll-section>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2
                  className="gasp-heading text-2xl font-semibold mb-6 text-primary scroll-fade-in"
                  data-scroll
                  data-scroll-speed="1"
                >
                  About
                </h2>
                <div
                  className="space-y-4 gasp-body text-muted-foreground scroll-slide-right"
                  data-scroll
                  data-scroll-speed="0.8"
                  data-scroll-delay="0.1"
                >
                  <p>
                    I'm a technically oriented professional with experience in manufacturing, CNC machinery, and sales,
                    now focusing on web development and user interface design.
                  </p>
                  <p>
                    My unique background combines manual craftsmanship with digital expertise, allowing me to approach
                    problems from both technical and creative perspectives.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup, index) => (
                    <Card
                      key={skillGroup.category}
                      className={`hover-lift scroll-scale-in bg-card border-border stagger-${index + 1}`}
                      data-scroll
                      data-scroll-speed="0.6"
                      data-scroll-delay={`0.${index + 1}`}
                    >
                      <CardContent className="p-6">
                        <h3 className="gasp-heading text-lg font-semibold mb-4">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <Badge key={skill} variant="secondary" className="gasp-body text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6 bg-muted/30" data-scroll-section>
          <div className="max-w-6xl mx-auto">
            <h2
              className="gasp-heading text-2xl font-semibold mb-12 text-primary scroll-fade-in"
              data-scroll
              data-scroll-speed="1"
            >
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className={`hover-lift bg-card border-border scroll-slide-left stagger-${index + 1}`}
                  data-scroll
                  data-scroll-speed="0.8"
                  data-scroll-delay={`0.${index + 1}`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="md:w-48 flex-shrink-0">
                        <div className="gasp-body text-sm text-muted-foreground font-medium">{job.period}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="gasp-heading text-xl font-semibold mb-2">{job.role}</h3>
                        <div className="gasp-body text-primary mb-3 font-medium">{job.company}</div>
                        <p className="gasp-body text-muted-foreground">{job.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6" data-scroll-section>
          <div className="max-w-6xl mx-auto">
            <h2
              className="gasp-heading text-2xl font-semibold mb-12 text-primary scroll-fade-in"
              data-scroll
              data-scroll-speed="1"
            >
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`hover-lift bg-card border-border group cursor-pointer scroll-scale-in stagger-${index + 1}`}
                  data-scroll
                  data-scroll-speed="0.6"
                  data-scroll-delay={`0.${index + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="gasp-heading text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="gasp-body text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="gasp-body text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="gasp-body text-xs text-muted-foreground">{project.year}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-muted/30" data-scroll-section>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="scroll-slide-left" data-scroll data-scroll-speed="0.8">
                <h2 className="gasp-heading text-2xl font-semibold mb-6 text-primary">Contact</h2>
                <p className="gasp-body text-muted-foreground mb-8">
                  If you would like to discuss a project or just say hi, I'm always down to chat.
                </p>
                <Button className="gasp-body font-medium hover-lift">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>
              </div>

              <div className="space-y-6 scroll-slide-right" data-scroll data-scroll-speed="0.6" data-scroll-delay="0.1">
                <div className="flex items-center gap-4 gasp-body text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:ruzickajakub95@gmail.com" className="hover:text-primary transition-colors">
                    ruzickajakub95@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 gasp-body text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+420 730 917 310</span>
                </div>
                <div className="flex items-center gap-4 gasp-body text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Jablonec nad Nisou, Czech Republic</span>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift bg-transparent">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border" data-scroll-section>
          <div className="max-w-6xl mx-auto">
            <div
              className="gasp-body text-sm text-muted-foreground text-center scroll-fade-in"
              data-scroll
              data-scroll-speed="0.5"
            >
              © 2025 Jakub Růžička. Crafted with precision and creativity.
            </div>
          </div>
        </footer>
      </div>
    </LocomotiveScrollProvider>
  )
}
