import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type ReactNode } from 'react';

interface ProjectCardProps {
  title: string
  role: string
  date: string
  description: string
  tags: string[]
  icon: ReactNode
}

export function ProjectCard({ title, role, date, description, tags, icon }: ProjectCardProps) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm">{role} • {date}</p>
        </div>
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Button variant="link" className="text-blue-400">Details</Button>
      </div>
    </div>
  )
}

