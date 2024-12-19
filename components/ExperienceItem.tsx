import { MapPin } from 'lucide-react'

interface ExperienceItemProps {
  number: number
  company: string
  location: string
  position: string
  date: string
  description?: string
  responsibilities?: string[]
}

export function ExperienceItem({
  number,
  company,
  location,
  position,
  date,
  description,
  responsibilities
}: ExperienceItemProps) {
  return (
    <div className="relative">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-[#2D9CDB] rounded-full flex items-center justify-center text-xl font-bold">
            {number}
          </div>
        </div>
        <div className="ml-8">
          <h3 className="text-[#2D9CDB] text-xl font-semibold">{company}</h3>
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <h4 className="text-xl mb-1">{position}</h4>
          <p className="text-gray-400">{date}</p>
          {description && (
            <p className="text-gray-300 my-2">{description}</p>
          )}
          {responsibilities && responsibilities.length > 0 && (
            <div className="mt-4">
              <p className="text-gray-400 font-medium mb-2">Responsibilites:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

