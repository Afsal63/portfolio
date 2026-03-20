"use client"
import { useState, useEffect, } from "react";
import { motion,  AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
 
  const links = ["About", "Projects", "Skills", "Contact"];
 
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#080808]/90 border-b border-white/5 backdrop-blur-xl" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <a href="#" className="text-xl font-black tracking-tight font-display">
          Afsal<span className="text-blue-400">.</span>
        </a>
 
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="mailto:afsalafzz64@gmail.com"
            className="text-sm px-4 py-2 border border-white/20 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
 
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-px bg-white mb-1" />
          <span className="block w-3 h-px bg-white mb-1 ml-auto" />
          <span className="block w-5 h-px bg-white" />
        </button>
      </div>
 
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080808] border-t border-white/5 px-6 pb-6"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-400 hover:text-white transition-colors border-b border-white/5"
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar