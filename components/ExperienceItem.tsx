import { MapPin } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  location: string;
  position: string;
  date: string;
  description?: string;
  showDescription: boolean;
  responsibilities: string[];
}

export function ExperienceItem({
  company,
  location,
  position,
  date,
  description,
  showDescription,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-6 border-2 border-gray-700 w-[300px] min-h-[300px] flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold">{company}</h3>
        <p className="text-gray-400 text-sm mb-2">
          {location} | {position}
        </p>
        <p className="text-gray-400 text-sm mb-4">{date}</p>
        {showDescription && <p className="text-gray-300 mb-4">{description}</p>}
      </div>
      <ul className="list-disc list-inside text-gray-400">
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
