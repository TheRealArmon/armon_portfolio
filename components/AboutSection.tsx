import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/img/armon-hakimi.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4">Armon Hakimi</h1>
          <div className="mb-6">
            <h2 className="text-2xl">
              Engineer at <span className="text-[#2D9CDB]">Sopra Steria</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Certified tech geek! Incredibly fond of learning new tech or just
            learning in general. Currently working mostly with Kubernetes and
            others tools from the CNCF ecosystem.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:armonah2@gmail.com"
              className="text-gray-400 hover:text-[#2D9CDB] transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://github.com/TheRealArmon/"
              className="text-gray-400 hover:text-[#2D9CDB] transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/armon-hakimi"
              className="text-gray-400 hover:text-[#2D9CDB] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
