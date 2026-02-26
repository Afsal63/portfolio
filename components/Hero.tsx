"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" pt-[100px] md:pt-0min-h-screen flex items-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building <span className="text-blue-500">Scalable</span>
            <br />
            Digital Products
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            I'm Afsal — Full Stack Developer & SaaS Builder focused on
            performance, clean architecture, and AI-powered systems.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-medium"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-blue-500 transition rounded-xl"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center "
        >
          {/* Glow */}
          <div className="absolute w-52 h-52 md:w-72 md:h-72 bg-blue-600/20 blur-3xl rounded-full" />

          {/* Image Wrapper */}
          <div
            className="relative 
                  w-70 h-90 
                  sm:w-64 sm:h-80
                  md:w-80 md:h-[420px]
                  lg:w-96 lg:h-[500px]
                  rounded-3xl 
                  overflow-hidden 
                  border border-white/10 
                  shadow-2xl"
          >
            <Image
              src="/afsal1.png"
              alt="Afsal - Full Stack Developer"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 224px,
             (max-width: 768px) 256px,
             (max-width: 1024px) 320px,
             384px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
