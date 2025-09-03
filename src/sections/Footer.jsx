import logoLight from "../assets/logo2.png";
import logoDark from "../assets/logo_dark_new.png";

function SocialLink({ href, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center gap-2 px-2 py-1 rounded-md
                 text-black/70 hover:text-brand
                 dark:text-white/80 dark:hover:text-brand
                 transition-colors"
        >
            {children}
            <span className="text-sm">{label}</span>
        </a>
    );
}

// icons
const InstagramIcon = (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
);

const LinkedInIcon = (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19 0H5A5 5 0 0 0 0 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V9h3v10Zm-1.5-12A2.5 2.5 0 1 1 9 4.5 2.5 2.5 0 0 1 6.5 7ZM20 19h-3v-5.6c0-1.3-.5-2.1-1.6-2.1-1 0-1.5.7-1.7 1.3a2.9 2.9 0 0 0-.1.8V19h-3V9h3v1.4c.5-.8 1.3-1.5 2.9-1.5 2 0 3.5 1.3 3.5 4.1V19Z" />
    </svg>
);

const GithubIcon = (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.74 2 12.43c0 4.6 2.87 8.49 6.85 9.87.5.1.68-.23.68-.5 0-.25-.01-1.07-.02-1.94-2.79.62-3.38-1.22-3.38-1.22-.46-1.2-1.14-1.52-1.14-1.52-.93-.66.07-.65.07-.65 1.03.08 1.57 1.1 1.57 1.1.92 1.62 2.42 1.15 3.01.88.09-.69.36-1.15.65-1.42-2.23-.26-4.57-1.15-4.57-5.11 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.06.81-.23 1.68-.35 2.54-.36.86 0 1.73.12 2.54.36 1.92-1.34 2.77-1.06 2.77-1.06.56 1.4.21 2.44.11 2.7.65.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.84-4.57 5.1.37.33.69.96.69 1.93 0 1.4-.01 2.53-.01 2.87 0 .27.18.61.69.5A10.51 10.51 0 0 0 22 12.43C22 6.74 17.52 2 12 2z" />
    </svg>
);

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-lightsurface text-black dark:bg-surface dark:text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                {/* Logo + email */}
                <div className="flex flex-col items-center gap-3">
                    <img src={logoLight} alt="Logo" className="h-20 dark:hidden" />
                    <img src={logoDark} alt="Logo" className="h-20 hidden dark:block" />

                    <a
                        href="mailto:contact@jovanljusic.com"
                        className="text-sm text-black/80 hover:text-brand dark:text-white/80 dark:hover:text-brand transition"
                    >
                        contact@jovanljusic.com
                    </a>
                </div>

                {/* Divider */}
                <hr className="mt-8 border-t border-black/10 dark:border-white/10" />

                {/* Bottom bar */}
                <div className="mt-6 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
                    <p className="text-xs sm:text-sm text-black/70 dark:text-white/60">
                        Copyright © {year} Jovan Ljusic. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <SocialLink href="https://instagram.com/" label="Instagram">
                            {InstagramIcon}
                        </SocialLink>
                        <SocialLink href="https://linkedin.com/" label="LinkedIn">
                            {LinkedInIcon}
                        </SocialLink>
                        <SocialLink href="https://github.com/" label="GitHub">
                            {GithubIcon}
                        </SocialLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
