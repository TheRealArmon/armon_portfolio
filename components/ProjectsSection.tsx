import { ExperiencesSection } from "./ExperiencesSection";
import { ProjectCard } from "./ProjectCard";
import { Icons } from "@/components/icons";

export function ProjectsSection() {
  const projects = [
    {
      title: "This website!",
      role: "Developer",
      description:
        "Made this website in Next.js 15, mainly as a way of practicing front-end.\
      Meant to act as a portfolio page, but I might also add blog posts or other features down the line.",
      tags: ["next.js 15", "tailwind", "git"],
      icon: <Icons.GlobalOutlined className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Youtube videos",
      role: "Filming, editing",
      description:
        "I create videos in my free-time! Not really technically relevant but fun nonetheless:)",
      tags: ["hobby", "davinci resolve"],
      icon: <Icons.SmileOutlined className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Music",
      role: "Amateur creator",
      description:
        "Calling myself a \"music producer\" would be wildly overselling, that's why I've written amateur creator instead!\
        Spurred by sporadic bursts of inspiration, I keep coming back to this hobby.",
      tags: ["hobby", "ableton"],
      icon: <Icons.SmileOutlined className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#232936]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
