export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-white/10 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}