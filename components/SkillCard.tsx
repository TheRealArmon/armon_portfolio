import { type ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode
  name: string
  description: string
}

export function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <div className="bg-[#232936] rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 text-xl font-semibold">
        {/* <Icon className="w-6 h-6 text-blue-400" /> */}
        {icon}
        <h3>{name}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

