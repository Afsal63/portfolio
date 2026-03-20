"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: any) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: any) =>
      setHovered(!!e.target.closest("a, button, [data-hover]"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          width: 10,
          height: 10,
          background: "#fff",
          marginLeft: -5,
          marginTop: -5,
        }}
        animate={{ x: pos.x, y: pos.y, scale: hovered ? 3 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30"
        style={{ width: 36, height: 36, marginLeft: -18, marginTop: -18 }}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      />
    </>
  );
}

export default Cursor;
