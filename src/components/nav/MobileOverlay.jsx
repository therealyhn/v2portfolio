// src/components/nav/MobileOverlay.jsx
import useScrollLock from "../../hooks/useScrollLock";
import NavLinks from "./NavLinks";

export default function MobileOverlay({ open, onClose, logoLight, logoDark }) {
    // Lock/unlock page scroll while overlay is open
    useScrollLock(open, onClose);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[2000]
                 bg-white text-black dark:bg-surface dark:text-white
                 overflow-y-auto overscroll-contain touch-pan-y
                 min-h-screen"
            role="dialog"
            aria-modal="true"
        >
            {/* Sticky header (logo + close) */}
            <div className="sticky top-0 z-[2001]
                      bg-white/95 dark:bg-surface/95 backdrop-blur-sm
                      border-b border-black/5 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Show correct logo by theme */}
                    <img src={logoDark} alt="Logo" className="hidden dark:block h-14 w-auto" />
                    <img src={logoLight} alt="Logo" className="dark:hidden h-14 w-auto" />
                    <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="w-10 h-10 grid place-items-center rounded-lg
                       bg-white text-black dark:bg-surface-2 dark:text-white
                       hover:text-brand transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Content (links + extras) */}
            <div className="max-w-7xl mx-auto px-6 pb-10 pt-4 min-h-[calc(100vh-64px)]">
                <NavLinks onClick={onClose} />

                {/* Old Versions */}
                <div className="mt-6">
                    <div className="text-xs uppercase text-black/60 dark:text-white/60 mb-2">
                        Old Versions
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <a
                            href="https://v1.jovanljusic.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-lightsurface-4 text-black dark:bg-surface-2 dark:text-white
                         px-3 py-2 text-center transition-colors"
                            onClick={onClose}
                        >
                            v1
                        </a>
                        {/* Dodaj još stavki po potrebi */}
                    </div>
                </div>
            </div>
        </div>
    );
}
