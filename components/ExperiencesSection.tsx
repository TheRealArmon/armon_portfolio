import { ExperienceItem } from './ExperienceItem'

export function ExperiencesSection() {
  const experiences = [
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "IT-Consultant",
      date: "August 2023 - Present",
      description: "I did a great job I promise!!!",
      responsibilities: [
        "AI stuff",
        "Azure stuff",
        "Conducting technical inteviews in Java and Python"
      ]
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "Machine learning intern",
      date: "June 2022 - July 2022",
      responsibilities: [
        "Python",
        "Databricks",
        "Azure"
      ]
    },
    {
      company: "Hydro",
      location: "Øvre Årdal",
      position: "Data analyst intern",
      date: "June 2021 - August 2021",
      description: "aluminium, or aluminum. never understood the difference🤷‍♂️",
      responsibilities: [
        "Python",
        "Microsoft SQL Server",
      ]
    },
  ]

  return (
    <section id="experiences" className="py-20 px-4 bg-[#232936]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Experiences</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] top-10 bottom-0 w-0.5 bg-[#2D9CDB]" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} number={index + 1} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

