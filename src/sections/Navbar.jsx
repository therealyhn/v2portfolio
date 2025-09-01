import { useEffect, useState } from "react";
import logoDark from "../assets/logo_dark_new.png";
import logoLight from "../assets/logo2.png";
import Logo from "../components/nav/Logo";
import NavLinks from "../components/nav/NavLinks";
import ThemeToggle from "../components/nav/ThemeToggle";
import VersionsDropdown from "../components/nav/VersionsDropdown";
import MobileOverlay from "../components/nav/MobileOverlay";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);

    // dark / light state
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window === "undefined") return true;
        if ("theme" in localStorage) return localStorage.theme === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    // blur on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-surface/80 dark:bg-surface-2/80 backdrop-blur-sm" : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Logo logoLight={logoLight} logoDark={logoDark} />

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLinks />
                    <div className="flex items-center gap-3">
                        <VersionsDropdown />
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </div>

                {/* Mobile actions */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    <button
                        onClick={() => setOpenMobile(true)}
                        aria-label="Open menu"
                        className="w-10 h-10 grid place-items-center rounded-lg bg-white text-black dark:bg-surface-2 dark:text-white transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile overlay */}
            <MobileOverlay
                open={openMobile}
                onClose={() => setOpenMobile(false)}
                logoLight={logoLight}
                logoDark={logoDark}
            />
        </nav>
    );
}
