"use client";

import { url } from "inspector";
import { AccomplishmentCard } from "./AccomplishmentCard";
import { useState } from "react";

const category = {
  cert: "Certifications",
  other: "Other",
};

export function AccomplishmentsSection() {
  const accomplishments = [
    {
      title: "Kubernetes",
      organization: "Cloud Native Computing Foundation",
      description:
        "I'm a certified Kubestronaut! Means I've done all the kubernetes certifications:)",
      url: "https://www.credly.com/badges/c2bea2a4-d964-476c-8b1e-a48259d34fb9",
      date: "",
      category: category.cert,
    },
    {
      title: "Linux",
      organization: "Cloud Native Computing Foundation",
      url: "https://www.credly.com/badges/07485790-0631-433e-9d93-a97c2a618840",
      description:
        "Did all the Linux certifications: IT Associate, Cloud Technician, and System Administrator.",
      date: "",
      category: category.cert,
    },
    {
      title: "ArgoCD",
      organization: "Cloud Native Computing Foundation",
      url: "https://www.credly.com/badges/0e235591-60f0-4dab-af4a-e53077507e86",
      description: "Certified Argo Project Associate (CAPA).",
      date: "",
      category: category.cert,
    },
    {
      title: "Prometheus",
      organization: "Cloud Native Computing Foundation",
      url: "https://www.credly.com/badges/8c3c7072-2673-432d-b9ee-573d5ab5b2fb",
      description: "Prometheus Certified Associate (PCA)",
      date: "",
      category: category.cert,
    },
    {
      title: "GitOps",
      organization: "Cloud Native Computing Foundation",
      url: "https://www.credly.com/badges/c4f1b579-e124-44ae-a615-7a75abd84cde",
      description: "Certified GitOps Associate (CGOA)",
      date: "",
      category: category.cert,
    },
    {
      title: "Scrum",
      organization: "Scrum.org",
      url: "https://www.credly.com/badges/9211ba52-ce36-4256-a0ed-d0d75e85c58e",
      description:
        "Scrum Master 1 & 2, Scrum Product Owner 1, and Scrum Developer.",
      date: "",
      category: category.cert,
    },
    {
      title: "Python",
      organization: "Python Institute",
      url: "https://www.credly.com/badges/a0435098-6741-44b3-b311-01804b5da1a3",
      description: "Associate Python Programmer (PCAP)",
      date: "",
      category: category.cert,
    },
    {
      title: "Databricks",
      organization: "Databricks",
      description: "Data Engineer Associate",
      date: "",
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
        <div className="grid md:grid-cols-3 gap-6">
          {filteredAccomplishments.map((accomplishment, index) => (
            <AccomplishmentCard key={index} {...accomplishment} />
          ))}
        </div>
      </div>
    </section>
  );
}
