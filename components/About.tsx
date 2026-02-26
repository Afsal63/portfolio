"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          I am a Full Stack MERN Developer with 3+ years of experience building
          real-time applications, SaaS platforms, and automation systems.
          I focus on writing scalable backend architecture and crafting
          premium user interfaces using Next.js and TypeScript.
        </motion.p>

      </div>
    </section>
  );
}