export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        <h3 className="text-2xl font-semibold mb-4">
          Let's Build Something Exceptional
        </h3>

        <p className="text-gray-500 mb-6">
          Open to product roles, SaaS collaborations, and AI automation projects.
        </p>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Email</a>
        </div>

        <p className="text-gray-600 text-sm mt-10">
          © {new Date().getFullYear()} Afsal. All rights reserved.
        </p>

      </div>
    </footer>
  );
}