"use client";

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
  image: string;
};

// 2. Define Props type
type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const projectLink = project.live || project.github;

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
      {/* IMAGE SECTION */}
      <div
        className="relative h-48 w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent}15, transparent)`,
        }}
      >
        {/* CLICKABLE OVERLAY */}
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer"
          />
        )}

        {/* HOVER GLOW */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${project.accent}20, transparent 70%)`,
          }}
        />

        {/* IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-45">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* ACCENT LINE */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: project.accent, opacity: 0.6 }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-bold">{project.title}</h4>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                ⌥
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-5">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;