import { useEffect, useRef, useState } from "react";

export default function VersionsDropdown() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // click-outside & esc
    useEffect(() => {
        function onDocClick(e) {
            if (!open) return;
            const t = e.target;
            if (
                menuRef.current && !menuRef.current.contains(t) &&
                buttonRef.current && !buttonRef.current.contains(t)
            ) setOpen(false);
        }
        function onKey(e) { if (e.key === "Escape") setOpen(false); }
        document.addEventListener("click", onDocClick);
        document.addEventListener("keydown", onKey);
        return () => { document.removeEventListener("click", onDocClick); document.removeEventListener("keydown", onKey); };
    }, [open]);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={open}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg
                   bg-white text-black dark:bg-surface dark:text-white
                   shadow-sm hover:shadow-md transition-colors duration-200
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60
                   active:scale-[0.98]"
            >
                Old Ver.
                <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <ul
                    ref={menuRef}
                    role="menu"
                    className="absolute right-0 mt-2 w-24 overflow-hidden rounded-lg
                     bg-white text-black dark:bg-surface dark:text-white
                     shadow-lg ring-1 ring-black/10"
                >
                    <li role="none">
                        <a
                            role="menuitem"
                            href="https://v1.jovanljusic.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-center text-sm hover:bg-brand-800 hover:text-white transition-colors"
                        >
                            v1
                        </a>
                    </li>
                    {/* dodaj v2/v3 po potrebi */}
                </ul>
            )}
        </div>
    );
}
