import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    imageUrl: "/projects/project1.svg",
    projectUrl: "https://project-one.com",
    githubUrl: "https://github.com/user/project-one",
    tags: ["React", "Node.js", "CSS"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    imageUrl: "/projects/project2.svg",
    projectUrl: "https://project-two.com",
    githubUrl: "https://github.com/user/project-two",
    tags: ["Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    imageUrl: "/projects/project3.svg",
    projectUrl: "https://project-three.com",
    githubUrl: "https://github.com/user/project-three",
    tags: ["Vue", "Firebase", "Sass"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projects <span className="text-primary">Showcase</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                      {" "}
                      {tag}{" "}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/NgYaoDong"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center gap-2 mx-auto"
          >
            View More on GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
