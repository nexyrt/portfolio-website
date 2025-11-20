import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Portfolio" },
    { name: "description", content: "My recent projects and work" },
  ];
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with forecasts, maps, and historical data visualization using external APIs.",
    tech: ["React", "Tailwind CSS", "Chart.js", "OpenWeather API"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Modern blog platform with markdown support, SEO optimization, and content management system.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization and reporting features.",
    tech: ["React", "Express", "MongoDB", "D3.js"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React Router v7 and modern web technologies.",
    tech: ["React Router", "Tailwind CSS", "Vite"],
    image: "https://via.placeholder.com/400x300",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Here are some of my recent projects and work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}