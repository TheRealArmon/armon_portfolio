"use client";

import { ExperienceItem } from "./ExperienceItem";

export function ExperiencesSection() {
  const experiences = [
    {
      company: "Norske Helsenett",
      location: "Oslo",
      position: "Platform engineer",
      date: "March 2025 - Present",
      description: "Doing super-interesting work, i promise!!:)",
      showDescription: true,
      responsibilities: [
        "Kubernetes",
        "ArgoCD",
        "Prometheus",
        "Grafana",
        "CI/CD",
      ],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "Software developer",
      date: "August 2023 - February 2025",
      description:
        "Did back-end work for a start-up for half a year, then worked on creating AI applications.",
      showDescription: true,
      responsibilities: [
        "Back-end development",
        "LLM web app development",
        "Python",
        "Azure",
        "Technical interviews in Java and Python",
      ],
    },
    {
      company: "Sopra Steria",
      location: "Oslo",
      position: "Machine learning internship",
      date: "June 2022 - July 2022",
      description:
        "Had an internship where I got to do computer vision stuff in python using Yolo v5 and Deepsort for tracking:))",
      showDescription: true,
      responsibilities: ["Python", "Databricks", "Azure"],
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
                className="carousel-item flex-shrink-0 snap-center flex justify-center"
              >
                <ExperienceItem key={index} {...experience} />
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
