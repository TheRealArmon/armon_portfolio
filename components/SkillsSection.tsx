import { SkillCard } from './SkillCard'
import { Icons, Logos } from './icons'

export function SkillsSection() {
  const skills = [
    {
      icon: <Icons.KubernetesOutlined className="w-6 h-6 text-blue-400" />,
      name: 'Kubernetes',
      description: 'Certified Kubestronaut, meaning that I hold all k8s certifications. Really enjoy working with k8s:)'
    },
    {
      icon: <Icons.DockerOutlined className="w-6 h-6 text-blue-400" />,
      name: 'Docker',
      description: "Can\'t do kubernetes without Docker! Some experience building images, but mostly just using other images."
    },
    {
      icon: <Icons.LinuxOutlined className="w-6 h-6 text-blue-400" />,
      name: 'Linux',
      description: 'OS of choice for programming. Did all Linux certifications over a few months; I have a solid grasp of foundational concepts, practical use, debugging and sysadmin work. Capable of writing simple bash/shell scripts.'
    },
    {
      icon: <Icons.PythonOutlined className="w-6 h-6 text-blue-400" />,
      name: 'Python',
      description: 'One of my main programming languages. Lets just say I 🤍 Python.'
    },
    {
      icon: <Logos.Go width={32} />,
      name: 'Go',
      description: 'Did backend programming in Go for half a year at a startup. Proficient enough:) Really enjoyed working with Go!'
    }
  ]

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
  )
}

