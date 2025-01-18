import { NavBar } from '@/components/NavBar'
import { AboutSection } from '@/components/AboutSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperiencesSection } from '@/components/ExperiencesSection'
import { AccomplishmentsSection } from '@/components/AccomplishmentsSection'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-gray-100">
      <NavBar />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperiencesSection />
      <AccomplishmentsSection />
      <footer className="bg-[#232936] py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-center space-x-6">
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-[#2D9CDB] transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-[#2D9CDB] transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-[#2D9CDB] transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

