export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-black font-display">
          Afsal<span className="text-blue-400">.</span>
        </span>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Afsal. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="https://github.com/Afsal63" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/afsal-k-a-a39b561b0/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:afsalafzz63@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}