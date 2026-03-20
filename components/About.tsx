"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Building Scalable Products 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          I'm a Full Stack Developer specializing in MERN, SaaS platforms,
          and AI-driven automation systems. I design scalable backend
          architectures and craft high-performance user interfaces using
          modern technologies like Next.js and TypeScript.
        </motion.p>

      </div>
    </section>
  );
}