"use client"
import { motion } from "framer-motion";
import Image from "next/image";

// 1. Define Project type
type Project = {
  title: string;
  desc: string;
  accent: string;
  tech: string[];
  live?: string;
  github?: string;
   image:string;
};

// 2. Define Props type
type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <div
        className="relative h-48 w-full overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}15, transparent)` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${project.accent}20, transparent 70%)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">

          <Image alt={project.accent} width={400} height={400} src={project.image}  />
          <span className="text-5xl opacity-20 font-black font-display">
            {/* {project.title[0]} */}
          </span>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: project.accent, opacity: 0.6 }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-bold">{project.title}</h4>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                ⌥
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-5">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;