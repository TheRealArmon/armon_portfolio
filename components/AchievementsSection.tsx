import { AchievementCard } from './AchievementCard'

export function AchievementsSection() {
  const Achievements = [
    {
      title: "Kubestronaut",
      organization: "CNCF",
      date: "May 2024 - May 2026",
      description: "Title given upon completion of all Kubernetes certifications!",
    },
    {
      title: "Good at linux",
      organization: "CNCF",
      date: "TIME",
      description: "placeholder text",
    },
    {
      title: "i know some argocd stuff",
      organization: "CNCF",
      date: "TIME",
      description: "placeholder text",
    },
    {
      title: "i know some prometheus stuff",
      organization: "CNCF",
      date: "TIME",
      description: "placeholder text",
    },
  ]

  return (
    <section id="Achievements" className="py-20 px-4 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Achievements.map((Achievement, index) => (
            <AchievementCard key={index} {...Achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}

