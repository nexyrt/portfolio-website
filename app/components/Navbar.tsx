import { Link } from "react-router";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                        Portfolio
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 dark:text-gray-300"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <Link
                            to="/"
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}