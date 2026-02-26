"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const dynamicApps = [
  {
    title: "ERP System",
    slug: "erp-system",
    desc: "Complete enterprise management system with inventory, HR & billing.",
    image: "/projects/Erp.png",
    live: "https://erp-next.vercel.app/dashboard",
    github: "https://github.com/Afsal63/erp-next",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Docurator",
    slug: "docurator",
    desc: "Document automation and management SaaS platform.",
    image: "/projects/docurator.png",
    live: "",
    github: "",
    tech: ["Next.js", "Express", "PostgreSQL"],
  },
  {
    title: "Trade Analyzer",
    slug: "trade-analyzer",
    desc: "Advanced trading analytics dashboard with real-time insights.",
    image: "/projects/trade.png",
    live: "https://trading-journal-red-chi.vercel.app/backtested",
    github: "https://github.com/Afsal63/Trading-Journal",
    tech: ["React", "Node.js", "WebSocket", "Chart.js"],
  },
  {
    title: "Granny Wonders",
    slug: "business-analyzer",
    desc: "Data-driven reporting system for enterprises.",
    image: "/projects/b.png",
    live: "https://granny-frontend.vercel.app/dashboard",
    github: "",
    tech: ["Next.js", "MongoDB", "Recharts"],
  },
];

const businessProjects = [
  {
    title: "Haris & Co",
    slug: "haris-and-co",
    desc: "Corporate website for construction business.",
    image: "/projects/haris.png",
    live: "https://haris-co-git-remaining-pages-jumairajs-projects.vercel.app",
    github: "https://github.com/yourname/harisnco",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Momo Buggy",
    slug: "momo-buggy",
    desc: "Restaurant landing page with ordering integration.",
    image: "/projects/momo.png",
    live: "https://momo-buggy.vercel.app/",
    github: "https://github.com/yourname/momobuggy",
    tech: ["React", "Firebase"],
  },
  {
    title: "Sugaroo",
    slug: "Qr code scaning order page",
   desc: "High converting landing pages for product launches.",
    image: "/projects/sugaroo.png",
    live: "https://landing-demo.com",
    github: "https://github.com/yourname/landing-pages",
    tech: ["Next.js", "Framer Motion"],
  },
];

export default function Projects() {
  const [showAllDynamic, setShowAllDynamic] = useState(false);
  const [showAllBusiness, setShowAllBusiness] = useState(false);

  const visibleDynamic = showAllDynamic
    ? dynamicApps
    : dynamicApps.slice(0, 3);

  const visibleBusiness = showAllBusiness
    ? businessProjects
    : businessProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        Projects
      </h2>

      {/* ================= DYNAMIC APPS ================= */}
      <div className="mb-24">
        <h3 className="text-2xl font-semibold mb-10 text-blue-500">
          Dynamic Applications
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDynamic.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition hover:border-blue-500"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold">{project.title}</h4>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-white/20 rounded-lg hover:border-blue-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAllDynamic && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllDynamic(true)}
              className="px-6 py-3 border border-white/20 rounded-xl hover:border-blue-500 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* ================= BUSINESS PROJECTS ================= */}
      <div>
        <h3 className="text-2xl font-semibold mb-10 text-blue-500">
          Business & Landing Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBusiness.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition hover:border-blue-500"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold">{project.title}</h4>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-white/20 rounded-lg hover:border-blue-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAllBusiness && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllBusiness(true)}
              className="px-6 py-3 border border-white/20 rounded-xl hover:border-blue-500 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}