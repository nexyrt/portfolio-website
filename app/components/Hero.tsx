import { Link } from "react-router";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                    Hi, I'm{" "}
                    <span className="text-blue-600 dark:text-blue-400">Your Name</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                    Full Stack Developer | Web Designer | Problem Solver
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    I build modern web applications with clean code and beautiful user
                    interfaces. Passionate about creating solutions that make a difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/projects"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-medium"
                    >
                        Get In Touch
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-20 animate-bounce">
                    <svg
                        className="w-6 h-6 mx-auto text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}