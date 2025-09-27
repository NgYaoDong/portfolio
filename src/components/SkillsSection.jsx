const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Terraform", level: 80 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Skills <span className="text-primary">Overview</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="border-2 border-primary p-6 rounded-lg shadow-xs"
            >
              <h3 className="text-lg font-semibold mb-3">
                {skillCategory.category}
              </h3>
              {skillCategory.items.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-3 rounded-md shadow-xs card-hover mb-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.2s_ease-out]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
