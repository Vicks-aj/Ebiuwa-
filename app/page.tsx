"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Linkedin,
  Users,
  TrendingUp,
  Target,
  Award,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-white"
      style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-base">
                EE
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#experience" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                Experience
              </Link>
              <Link href="#education" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                Education
              </Link>
              <Link href="#skills" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                Skills
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
                Contact
              </Link>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg items-center gap-2"
              >
                <Link
                  href="https://docs.google.com/document/u/0/d/173c72EcUEzVrow7sQcK1vZZDldQBFSBp6xx-jOp4Zy4/mobilebasic"
                  target="_blank"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#about"
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Experience
                </Link>
                <Link
                  href="#education"
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Education
                </Link>
                <Link
                  href="#skills"
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Button
                  asChild
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 w-fit"
                >
                  <Link
                    href="https://docs.google.com/document/u/0/d/173c72EcUEzVrow7sQcK1vZZDldQBFSBp6xx-jOp4Zy4/mobilebasic"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 via-pink-500 to-purple-600 rounded-3xl p-5 md:p-8 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                  <img src="/images/profile-photo.jpg" alt="Ebiuwa Egbon" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-indigo-200 via-purple-200 to-white bg-clip-text text-transparent drop-shadow-sm">
                  EBIUWA EGBON
                </h1>
                <p className="text-lg md:text-xl mb-4 text-purple-100">Product & Project Manager</p>

                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 md:gap-3 mb-6 text-sm md:text-base">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+2348150990267</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">egbonprecious539@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white hover:bg-gray-100 text-black border-white px-4 md:px-5 py-2"
                  >
                    <Link href="https://www.linkedin.com/in/ebiuwa-egbon/" target="_blank">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-white hover:bg-gray-100 text-black border-white px-4 md:px-5 py-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Product Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Expert in product roadmapping, feature prioritization, and stakeholder management with a focus on
                  delivering user-centric solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Team Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Proven track record of leading cross-functional teams and managing stakeholder expectations across
                  multiple successful projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Skilled in market research, operations, and implementing strategies that drive user engagement and
                  business growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">Work Experience</h2>

          <div className="space-y-8">
            {/* Current Role */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg md:text-xl">Product Manager</CardTitle>
                    <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                      Brandcery, Lagos, Nigeria (Remote)
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                    Mar 2025 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                  <li>
                    • Defined product requirements in collaboration with relevant stakeholders, providing a solid ground
                    to reach product goals
                  </li>
                  <li>
                    • Created and maintained detailed Product Requirement Documents (PRDs) that effectively communicated
                    product features, functionality, and user flows
                  </li>
                  <li>
                    • Led the product development process, especially testing software to reduce bugs and improve
                    feature releases
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Intern */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg md:text-xl">Product Intern (Retention)</CardTitle>
                    <CardDescription className="text-base md:text-lg font-medium text-slate-600">
                      OurEdenlife.ng, Lagos, Nigeria (Remote)
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    June 2024 - Mar 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                  <li>
                    • Assisted in developing and implementing retention strategies aimed at reducing churn rate,
                    increasing user engagement and improving retention by <strong>10%</strong>
                  </li>
                  <li>
                    • Conducted user research activities such as surveys, interviews, and usability tests to gather
                    qualitative insights
                  </li>
                  <li>
                    • Collaborated with cross-functional teams to align retention efforts with overall business goals
                  </li>
                  <li>• Collaborated with the retention PM to define user personas and customer journey maps</li>
                </ul>
              </CardContent>
            </Card>

            {/* Project Manager */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg md:text-xl">Project Manager</CardTitle>
                    <CardDescription className="text-base md:text-lg font-medium text-slate-600">
                      Smph Technology, Lagos, Nigeria (Remote)
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    April 2024 - Sept 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                  <li>
                    • Spearheaded the development and launch of the National Orientation Agency's (NOA) website and 4
                    internal tools, achieving a <strong>20% increase in user engagement</strong>
                  </li>
                  <li>
                    • Managed stakeholder expectations by presenting product updates during weekly sprint reviews and
                    bi-weekly strategy meetings
                  </li>
                  <li>
                    • Collaborated with engineering and design teams to define product roadmaps and ensure timely
                    delivery of features
                  </li>
                  <li>• Defined product requirements and maintained the product backlog for NOA</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">Leadership Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Team Lead</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium text-slate-600">
                  OFAS Port Harcourt, Nigeria
                </CardDescription>
                <Badge variant="outline" className="w-fit">
                  May 2021 - Present
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                  <li>
                    • Spearheaded a team of 15 people, boosted membership by <strong>50%</strong> through strategic
                    recruitment
                  </li>
                  <li>
                    • Improved social media impressions by <strong>60%</strong> boosting community growth
                  </li>
                  <li>
                    • Increased followers by <strong>20%</strong> through streamlined content marketing and external
                    partnerships
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Asst. Programs Manager</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium text-slate-600">
                  She Code Africa Benin, Nigeria
                </CardDescription>
                <Badge variant="outline" className="w-fit">
                  Jul 2022 - Present
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                  <li>
                    • Assisted in organizing programs that boosted community membership by <strong>60%</strong>
                  </li>
                  <li>• Improved community members experience with 3 mentorship programs</li>
                  <li>• Developed strategic external partnerships for community growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">Skills & Tools</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Target className="w-5 h-5" />
                  Core Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Market Research",
                    "Operations",
                    "Stakeholder Management",
                    "Agile Project Management",
                    "Product Documentation",
                    "Product Roadmapping",
                    "Feature Prioritization",
                    "User Research",
                    "Team Leadership",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 text-xs md:text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Briefcase className="w-5 h-5" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { name: "Jira", logo: "/images/tools/jira.png" },
                    { name: "Trello", logo: "/images/tools/trello.png" },
                    { name: "Notion", logo: "/images/tools/notion.png" },
                    { name: "Google Workspace", logo: "/images/tools/google-workspace.png" },
                    { name: "FigJam", logo: "/images/tools/figjam.png" },
                    { name: "Microsoft Office", logo: "/images/tools/microsoft-office.png" },
                    { name: "Lucid", logo: "/images/tools/lucid.png" },
                    { name: "Miro", logo: "/images/tools/miro.png" },
                    { name: "Canva", logo: "/images/tools/canva.png" },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={tool.logo || "/placeholder.svg"}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-medium text-center text-slate-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base md:text-lg">University of Benin</h3>
                  <p className="text-slate-600 text-sm md:text-base">Pharm.D (Doctor of Pharmacy)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <Award className="w-5 h-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm md:text-base">Certified Scrum Product Owner</p>
                    <p className="text-xs md:text-sm text-slate-600">Scrum Alliance</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Digital Marketing Nanodegree</p>
                    <p className="text-xs md:text-sm text-slate-600">Udacity</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Product Management Bootcamp</p>
                    <p className="text-xs md:text-sm text-slate-600">Tech4Dev</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Product Management Certificate</p>
                    <p className="text-xs md:text-sm text-slate-600">Nexford University</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Project Management Certificate</p>
                    <p className="text-xs md:text-sm text-slate-600">Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Let's Work Together</h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and challenges in product management. Let's connect
            and explore how we can create amazing products together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <a href="mailto:egbonprecious539@gmail.com">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:+2348150990267">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call Me
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 text-slate-600 text-sm md:text-base">
            <div className="flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4" />
              <span>egbonprecious539@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Phone className="w-4 h-4" />
              <span>+2348150990267</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base">&copy; 2025 Ebiuwa E. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
