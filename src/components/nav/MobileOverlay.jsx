import NavLinks from "./NavLinks";

export default function MobileOverlay({
    open,
    onClose,
    logoLight,
    logoDark,
}) {
    if (!open) return null;
    return (
        <div className="md:hidden fixed inset-0 z-[60] bg-white text-black dark:bg-surface dark:text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* prikaži dark ili light logo po temi */}
                <img src={logoDark} alt="Logo" className="hidden dark:block h-12 w-auto" />
                <img src={logoLight} alt="Logo" className="dark:hidden h-12 w-auto" />
                <button
                    onClick={onClose}
                    aria-label="Close menu"
                    className="w-10 h-10 grid place-items-center rounded-lg bg-white text-black dark:bg-surface-2 dark:text-white hover:bg-brand hover:text-white transition-colors"
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>
            </div>

            <div className="px-6">
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
                            className="rounded-lg bg-white text-black dark:bg-surface-2 dark:text-white px-3 py-2 text-center hover:bg-brand hover:text-white transition-colors"
                            onClick={onClose}
                        >
                            v1
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
