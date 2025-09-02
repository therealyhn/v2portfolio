export default function ThemeToggle({ darkMode, setDarkMode, className = "" }) {
    return (
        <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle theme"
            className={[
                "inline-flex items-center justify-center w-10 h-10 rounded-lg",
                "bg-white text-black dark:bg-surface-2 dark:text-white",
                "shadow-sm hover:shadow-md transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60",
                "active:scale-[0.98]",
                className,
            ].join(" ")}
        >
            {darkMode ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
                </svg>
            )}
        </button>
    );
}
