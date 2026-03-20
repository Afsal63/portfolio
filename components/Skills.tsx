"use client";
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES2022+)",
        "Vue.js",
        "Angular",
        "Redux",
        "Zustand",
        "Tailwind CSS",
        "Three.js",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "REST API",
        "WebSockets",
        "JWT",
        "OAuth 2.0",
        "Middleware Design",
        "RBAC",
        "Redis",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "AWS (EC2, S3, Lambda)",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Vercel",
        "Render",
        "Nginx",
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "ESLint",
        "Jest",
        "React Testing Library",
        "Postman",
        "Figma",
        "Agile",
        "TDD",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "System Design",
        "Problem Solving",
        "Collaboration",
        "Attention to Detail",
        "Time Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
