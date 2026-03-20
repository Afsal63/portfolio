"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// ✅ 1. Define type
export type Project = {
  title: string;
  slug: string;
  desc: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
  accent: string; // required (used in ProjectCard)
};

// ✅ 2. Typed data
const dynamicApps: Project[] = [
  {
    title: "ERP System",
    slug: "erp-system",
    desc: "Complete enterprise management system with inventory, HR & billing.",
    image: "/projects/Erp.png",
    live: "https://erp-next.vercel.app/dashboard",
    github: "https://github.com/Afsal63/erp-next",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    accent: "#3b82f6",
  },
  {
    title: "Docurator",
    slug: "docurator",
    desc: "Document automation and management SaaS platform.",
    image: "/projects/docurator.png",
    tech: ["Next.js", "Express", "PostgreSQL"],
    accent: "#8b5cf6",
  },
  {
    title: "Trade Analyzer",
    slug: "trade-analyzer",
    desc: "Advanced trading analytics dashboard with real-time insights.",
    image: "/projects/trade.png",
    live: "https://trading-journal-red-chi.vercel.app/backtested",
    github: "https://github.com/Afsal63/Trading-Journal",
    tech: ["React", "Node.js", "WebSocket", "Chart.js"],
    accent: "#f59e0b",
  },
  {
    title: "Granny Wonders",
    slug: "business-analyzer",
    desc: "Data-driven reporting system for enterprises.",
    image: "/projects/b.png",
    live: "https://granny-frontend.vercel.app/dashboard",
    github: "https://github.com/Afsal63",
    tech: ["Next.js", "MongoDB", "Recharts"],
    accent: "#22c55e",
  },
];

const businessProjects: Project[] = [
  {
    title: "Haris & Co",
    slug: "haris-and-co",
    desc: "Corporate website for construction business.",
    image: "/projects/haris.png",
    live: "https://haris-co-git-remaining-pages-jumairajs-projects.vercel.app",
    github: "https://github.com/Afsal63",
    tech: ["Next.js", "Tailwind CSS"],
    accent: "#22c55e",
  },
  {
    title: "Momo Buggy",
    slug: "momo-buggy",
    desc: "Restaurant landing page with ordering integration.",
    image: "/projects/momo.png",
    live: "https://www.momobuggy.com/",
    github: "https://github.com/Afsal63/momo-buggy",
    tech: ["React", "Firebase"],
    accent: "#ef4444",
  },
  {
    title: "Sugaroo",
    slug: "qr-code-order",
    desc: "High converting landing pages for product launches.",
    image: "/projects/sugaroo.png",
    live: "https://landing-demo.com",
    github: "https://github.com/Afsal63/",
    tech: ["Next.js", "Framer Motion"],
    accent: "#eab308",
  },
];

export default function Projects() {
  const [showAllDynamic, setShowAllDynamic] = useState(false);
  const [showAllBusiness, setShowAllBusiness] = useState(false);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-blue-400 mb-4">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Selected Projects
          </h2>
        </motion.div>

        {/* Dynamic Apps */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <h3 className="text-sm font-semibold tracking-widest uppercase text-blue-400">
              Dynamic Applications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllDynamic
              ? dynamicApps
              : dynamicApps.slice(0, 3)
            ).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {!showAllDynamic && dynamicApps.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllDynamic(true)}
                className="px-6 py-3 text-sm border border-white/10 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
              >
                Show {dynamicApps.length - 3} more
              </button>
            </div>
          )}
        </div>

        {/* Business Projects */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <h3 className="text-sm font-semibold tracking-widest uppercase text-green-400">
              Business & Landing
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllBusiness
              ? businessProjects
              : businessProjects.slice(0, 3)
            ).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {!showAllBusiness && businessProjects.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllBusiness(true)}
                className="px-6 py-3 text-sm border border-white/10 rounded-xl hover:border-green-400 hover:text-green-400 transition-all duration-200"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}