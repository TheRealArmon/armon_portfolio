import { SkillCard } from "./SkillCard";
import { Icons, Logos } from "./icons";

export function SkillsSection() {
  const skills = [
    {
      icon: <Icons.KubernetesOutlined className="w-6 h-6 text-blue-400" />,
      name: "Kubernetes",
      description:
        "Really enjoy working with k8s:) Mostly only through certifications and local cluster until now.",
    },
    {
      icon: <Icons.DockerOutlined className="w-6 h-6 text-blue-400" />,
      name: "Docker",
      description:
        "Can't do kubernetes without Docker! Experienced enough for basic usage.",
    },
    {
      icon: <Icons.LinuxOutlined className="w-6 h-6 text-blue-400" />,
      name: "Linux",
      description:
        "OS of choice for programming. Period. Pretty good at day-to-day use, but I also know some basic bash scripting, network config, and sysadmin work.",
    },
    {
      icon: <Icons.PythonOutlined className="w-6 h-6 text-blue-400" />,
      name: "Python",
      description:
        "One of my main programming languages. Lets just say I really enjoy Python.",
    },
    {
      icon: <Logos.Go width={32} />,
      name: "Go",
      description:
        "Did backend programming in Go for half a year at a startup. Proficient enough:) Really enjoyed working with Go!",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
