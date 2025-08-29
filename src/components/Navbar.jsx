import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo_dark_new.png";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all
        ${scrolled
                    ? "bg-black/30 backdrop-blur-md border-b border-white/5"
                    : "bg-transparent border-b-0"}`}
        >
            <div className="mx-auto max-w-6xl px-5 md:px-10 py-3 flex items-center justify-between">
                {/* Logo - levo */}
                <a href="#home" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10 md:h-16" />
                </a>

                {/* Navigacija + toggle - desno */}
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex space-x-8 text-gray-300">
                        <li><a href="#home" className="hover:text-blue-400 text-lg">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400 text-lg">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-400 text-lg">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 text-lg">Contact</a></li>
                    </ul>

                    {/* Mode switch */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-gray-300 hover:text-blue-400"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
