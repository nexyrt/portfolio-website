import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Portfolio" },
    { name: "description", content: "Learn more about me" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Profile Image Placeholder */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Your Photo</span>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Hello, I'm a Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate full stack developer with experience in building web
              applications. I love creating clean, efficient, and user-friendly
              solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With a strong foundation in both frontend and backend technologies,
              I enjoy working on projects that challenge me to learn and grow as a
              developer.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• React / Next.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 / CSS3</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Node.js / Express</li>
                <li>• PHP / Laravel</li>
                <li>• MySQL / PostgreSQL</li>
                <li>• REST APIs</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tools
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Git / GitHub</li>
                <li>• VS Code</li>
                <li>• Docker</li>
                <li>• Linux</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Full Stack Developer
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Company Name • 2023 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Developing and maintaining web applications using modern
                technologies. Working with cross-functional teams to deliver
                high-quality solutions.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Junior Developer
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Previous Company • 2021 - 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Started career as a junior developer, learning best practices and
                contributing to various projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}