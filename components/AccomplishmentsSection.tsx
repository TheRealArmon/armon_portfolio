"use client";

import { AccomplishmentCard } from "./AccomplishmentCard";
import { useState } from "react";

const category = {
  cert: "Certification",
  other: "Other",
};

export function AccomplishmentsSection() {
  const accomplishments = [
    {
      title: "Kubestronaut",
      organization: "CNCF",
      date: "May 2024 - May 2026",
      description:
        "Title given upon completion of all Kubernetes certifications!",
      category: category.cert,
    },
    {
      title: "Linux",
      organization: "CNCF",
      date: "Date",
      description: "Did all linux certifications",
      category: category.cert,
    },
    {
      title: "ArgoCD",
      organization: "CNCF",
      date: "Date",
      description: "Did an ArgoCD certification.",
      category: category.cert,
    },
    {
      title: "Prometheus",
      organization: "CNCF",
      date: "Date",
      description: "Did a Prometheus certification.",
      category: category.cert,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAccomplishments = accomplishments.filter((accomplishment) =>
    selectedCategory === "All"
      ? true
      : selectedCategory === "Certifications"
      ? accomplishment.category === "Certifications"
      : accomplishment.category === "Other"
  );

  return (
    <section id="Accomplishments" className="py-20 px-4 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">
          Accomplishments
        </h2>
        <div className="flex justify-center items-center mb-6">
          <div className="join bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`join-item px-4 py-2 rounded-lg hover:opacity-75 ${
                selectedCategory === "All"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("Certifications")}
              className={`join-item px-4 py-2 rounded-lg hover:opacity-75 ${
                selectedCategory === "Certifications"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setSelectedCategory("Other")}
              className={`join-item px-4 py-2 rounded-lg hover:opacity-75 ${
                selectedCategory === "Other"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Other
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredAccomplishments.map((accomplishment, index) => (
            <AccomplishmentCard key={index} {...accomplishment} />
          ))}
        </div>
      </div>
    </section>
  );
}
