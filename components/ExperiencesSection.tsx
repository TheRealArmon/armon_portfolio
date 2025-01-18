"use client";

import { ExperienceItem } from "./ExperienceItem";

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
        "Conducting technical interviews in Java and Python",
      ],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "Machine learning intern",
      date: "June 2022 - July 2022",
      responsibilities: ["Python", "Databricks", "Azure"],
    },
    {
      company: "Hydro",
      location: "Øvre Årdal",
      position: "Data analyst intern",
      date: "June 2021 - August 2021",
      description: "aluminium, or aluminum. never understood the difference🤷‍♂️",
      responsibilities: ["Python", "Microsoft SQL Server"],
    },
    {
      company: "Hydro",
      location: "Øvre Årdal",
      position: "Data analyst intern",
      date: "June 2021 - August 2021",
      description: "aluminium, or aluminum. never understood the difference🤷‍♂️",
      responsibilities: ["Python", "Microsoft SQL Server"],
    },
    {
      company: "Hydro",
      location: "Øvre Årdal",
      position: "Data analyst intern",
      date: "June 2021 - August 2021",
      description: "aluminium, or aluminum. never understood the difference🤷‍♂️",
      responsibilities: ["Python", "Microsoft SQL Server"],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "Machine learning intern",
      date: "June 2022 - July 2022",
      responsibilities: ["Python", "Databricks", "Azure"],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "Machine learning intern",
      date: "June 2022 - July 2022",
      responsibilities: ["Python", "Databricks", "Azure"],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "IT-Consultant",
      date: "August 2023 - Present",
      description: "I did a great job I promise!!!",
      responsibilities: [
        "AI stuff",
        "Azure stuff",
        "Conducting technical interviews in Java and Python",
      ],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "IT-Consultant",
      date: "August 2023 - Present",
      description: "I did a great job I promise!!!",
      responsibilities: [
        "AI stuff",
        "Azure stuff",
        "Conducting technical interviews in Java and Python",
      ],
    },
  ];

  return (
    <section id="experiences" className="py-20 px-4 bg-[#232936]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Carousel container */}
          <div className="carousel flex gap-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="carousel-item flex-shrink-0 snap-center w-[300px] flex justify-center"
              >
                <div className="bg-[#1a1f2e] rounded-lg p-6 border-2 border-gray-700 w-[300px] h-[350px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{experience.company}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {experience.location} | {experience.position}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {experience.date}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {experience.description || "No description provided."}
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-gray-400">
                    {experience.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center mt-4 gap-16">
            <button
              className="btn btn-circle btn-sm"
              onClick={() =>
                document.querySelector(".carousel")?.scrollBy({
                  left: -300, // Adjust based on your card width
                  behavior: "smooth",
                })
              }
            >
              ❮
            </button>
            <button
              className="btn btn-circle btn-sm"
              onClick={() =>
                document.querySelector(".carousel")?.scrollBy({
                  left: 300, // Adjust based on your card width
                  behavior: "smooth",
                })
              }
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
