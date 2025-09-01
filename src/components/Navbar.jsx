import { useEffect, useRef, useState } from "react";
import logoDark from "../assets/logo_dark_new.png";
import logo from "../assets/logo2.png"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // ---- Dark / Light mode  ----
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

    // ---- Navbar blur on scroll ----
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ---- Close dropdown ----
    useEffect(() => {
        function onDocClick(e) {
            if (!open) return;
            const target = e.target;
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setOpen(false);
            }
        }
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("click", onDocClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", onDocClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-surface/80 dark:bg-surface-2/80 backdrop-blur-sm" : "bg-transparent"
                }`}
            role="navigation"
            aria-label="Main"
        >
            <div className="mx-auto max-w-8xl px-6 lg:px-8 py-4 flex items-center justify-evenly">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2" aria-label="Go to Home">
                    <img src={logo} alt="Logo" className="block dark:hidden h-14 md:h-16 w-auto" />
                    <img src={logoDark} alt="Logo" className="hidden dark:block h-14 md:h-16 w-auto" />
                </a>

                {/* Linkovi */}
                <ul className="hidden md:flex items-center gap-8 text-black/80 dark:text-white/80 font-heading text-sm md:text-lg tracking-wide">
                    {[
                        { href: "#home", label: "HOME" },
                        { href: "#about", label: "ABOUT ME" },
                        { href: "#projects", label: "PROJECTS" },
                        { href: "#contact", label: "CONTACT" },
                        { href: "/resume.pdf", label: "RESUME" },
                    ].map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="group relative px-1 py-2 hover:text-black dark:hover:text-white transition"
                            >
                                {item.label}
                                <span
                                    className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-0
                             bg-gradient-to-r from-brand to-brand-600 rounded-full
                             transition-all duration-300 group-hover:w-full"
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Dropdown + Theme toggle */}
                <div className="flex items-center gap-5">
                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            ref={buttonRef}
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-haspopup="menu"
                            aria-expanded={open}
                            className="rounded-lg bg-surface-2 dark:bg-black text-white font-semibold px-4 py-2
                         hover:bg-brand hover:text-white transition duration-300
                         flex items-center gap-2"
                        >
                            Old Ver.
                            {/* caret */}
                            <svg
                                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {open && (
                            <ul
                                ref={menuRef}
                                role="menu"
                                className="absolute right-0 mt-2 w-20 rounded-md bg-white dark:bg-surface-2
                           text-black dark:text-white shadow-lg ring-1 ring-black/10 overflow-hidden"
                            >
                                <li role="none">
                                    <a
                                        role="menuitem"
                                        href="https://v1.jovanljusic.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-center hover:bg-brand hover:text-white transition border-b border-b-white/20"
                                        onClick={() => setOpen(false)}
                                    >
                                        v1
                                    </a>
                                </li>

                                {/* <li role="none">
                                    <a
                                        role="menuitem"
                                        href="https://v2.jovanljusic.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-center hover:bg-brand hover:text-white transition border-b border-b-white/20"
                                        onClick={() => setOpen(false)}
                                    >
                                        v2
                                    </a>
                                </li> */}

                            </ul>
                        )}
                    </div>

                    {/* Theme toggle (SVG, bez dodatnih biblioteka) */}
                    <button
                        type="button"
                        onClick={() => setDarkMode((d) => !d)}
                        className="p-2 rounded-lg bg-surface-2 text-black dark:bg-surface text-white
                       hover:bg-brand hover:text-white transition"
                        aria-label="Toggle theme"
                        title="Toggle light/dark mode"
                    >
                        {darkMode ? (
                            // Sun (light icon)
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        ) : (
                            // Moon (dark icon)
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
