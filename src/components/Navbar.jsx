import { useEffect, useState } from "react";
import logo from "../assets/logo_dark_new.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-surface/80 backdrop-blur-sm" : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-14 md:h-16 w-auto" />
                </a>

                {/* linkovi */}
                <ul className="hidden md:flex items-center gap-8 text-white/80 font-heading text-md tracking-wide">
                    {[
                        { href: "#home", label: "HOME" },
                        { href: "#services", label: "SERVICES" },
                        { href: "#projects", label: "PROJECTS" },
                        { href: "#about", label: "ABOUT ME" },
                        { href: "#contact", label: "CONTACT" },
                    ].map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="group relative px-1 py-2 hover:text-white transition"
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

                {/* Desno: CTA */}
                <a
                    href="#contact"
                    className="ml-6 rounded-lg bg-black text-white font-semibold px-4 py-2
                     hover:bg-brand-600 shadow-glow-sm transition"
                >
                    Let’s Talk
                </a>
            </div>
        </nav>
    );
}
