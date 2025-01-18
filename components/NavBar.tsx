'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Accomplishments', href: '#accomplishments' },
]

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1f2e] shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-[#2D9CDB]"> <a href=''>AH</a></span>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-gray-300 hover:text-black hover:bg-[#2D9CDB]"
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

