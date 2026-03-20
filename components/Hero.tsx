"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Full Stack", "MERN", "SaaS", "Systems"];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIdx((i) => (i + 1) % words.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        {/* Glow effect */}
      </motion.div>
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-blue-500 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-8 bg-violet-500 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-blue-400 border border-blue-400/30 rounded-full px-4 py-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Available for new projects
        </motion.div>

      
 

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[48px]  md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight font-display mb-6"
        >
          Afsal
          <br />
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400">
            Developer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 h-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="block text-white font-semibold"
            >
              {words[wordIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-gray-500 max-w-xl mx-auto text-base mb-12"
        >
          4+ years crafting scalable web systems, SaaS platforms & real-time
          applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform duration-200"
          >
            View Work
          </a>
          <a
            href="mailto:afsalafzz63@gmail.com"
            className="px-8 py-4 border border-white/20 rounded-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-12 mt-20 pt-8 border-t border-white/5"
        >
          {[
            ["3+", "Years Exp."],
            ["12+", "Projects"],
            ["6+", "Clients"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-black text-white">{n}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide">
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
