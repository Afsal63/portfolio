"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl font-bold">Afsal.</h1>

        <div className="space-x-6 hidden md:flex">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}