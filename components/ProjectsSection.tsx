import { ProjectCard } from "./ProjectCard";
import { Icons } from "@/components/icons";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#232936]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="This website!"
            role="Developer"
            description="Made this website in Next.js 15, mainly as a way of practicing front-end.
            Mainly meant to act as a portfolio page, but I might also add blog posts or other features down the line."
            tags={["next.js 15", "tailwind", "git"]}
            icon={<Icons.GlobalOutlined className="w-6 h-6 text-blue-400" />}
          />
          <ProjectCard
            title="Youtube videos"
            role="Filming, editing"
            description="I create videos in my free-time! Not really technically relevant but fun nonetheless:)"
            tags={["hobby", "davinci resolve"]}
            icon={<Icons.SmileOutlined className="w-6 h-6 text-blue-400" />}
          />
        </div>
      </div>
    </section>
  );
}
