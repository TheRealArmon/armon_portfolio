import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  tags: string[];
  icon: ReactNode;
}

export function ProjectCard({
  title,
  role,
  description,
  tags,
  icon,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-6 hover:border-[#2D9CDB] border-[#2D9CDB] border-opacity-50 border-2 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mt-auto gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {/* Button */}
        <Button
          variant="link"
          className="text-blue-400 w-full sm:w-auto text-center"
        >
          This button doesn&#39;t do anything yet:)
        </Button>
      </div>
    </div>
  );
}
