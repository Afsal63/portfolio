"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {

  const skillCategories = [
  {
    label: "Frontend",
    color: "#60a5fa",
    icon: "◈",
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES2022+)",
      "Vue.js", "Angular", "Redux", "Zustand",
      "Tailwind CSS", "Three.js", "HTML5", "CSS3",
    ],
  },
  {
    label: "Backend",
    color: "#34d399",
    icon: "◉",
    skills: [
      "Node.js", "Express.js", "GraphQL", "REST API",
      "WebSockets", "JWT", "OAuth 2.0", "Middleware Design",
      "RBAC", "Redis",
    ],
  },
  {
    label: "Databases",
    color: "#a78bfa",
    icon: "◫",
    skills: [
      "MongoDB", "Mongoose", "Aggregation",
      "PostgreSQL", "MySQL", "Redis (caching & queues)",
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "#fb923c",
    icon: "◎",
    skills: [
      "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes",
      "GitHub Actions (CI/CD)", "Vercel", "Render", "Nginx",
    ],
  },
  {
    label: "Tools & Practices",
    color: "#f472b6",
    icon: "◇",
    skills: [
      "Git / GitHub / GitLab", "ESLint", "Jest",
      "React Testing Library", "Postman", "Figma",
      "Agile / Scrum", "TDD",
    ],
  },
  {
    label: "Soft Skills",
    color: "#facc15",
    icon: "◌",
    skills: [
      "System Design", "Problem Solving",
      "Cross-functional Collaboration", "Attention to Detail",
      "Time Management",
    ],
  },
];

  const [active, setActive] = useState(0);
  const cat = skillCategories[active];
 
  return (


<section id="skills" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-blue-400 mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black font-display">Tech Stack</h2>
        </motion.div>
 
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            {skillCategories.map((c, i) => (
              <button
                key={c.label}
                data-hover
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                  active === i
                    ? "border-white/20 bg-white/5"
                    : "border-transparent hover:border-white/10"
                }`}
              >
                <span className="text-xl" style={{ color: active === i ? c.color : "#555" }}>{c.icon}</span>
                <span className={`font-semibold text-sm ${active === i ? "text-white" : "text-gray-500"}`}>
                  {c.label}
                </span>
                {active === i && (
                  <span className="ml-auto text-xs" style={{ color: c.color }}>
                    {c.skills.length}
                  </span>
                )}
              </button>
            ))}
          </div>
 
          {/* Pills panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="text-xl font-black">{cat.label}</h3>
                  <p className="text-xs text-gray-500">{cat.skills.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 cursor-default hover:scale-105"
                    style={{
                      borderColor: `${cat.color}30`,
                      background: `${cat.color}10`,
                      color: cat.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}