export default function SocialButton({ href, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg
                 bg-white/60 text-black ring-1 ring-black/10
                 hover:bg-brand hover:text-white hover:ring-brand/40
                 transition dark:bg-white/10 dark:text-white
                 dark:ring-white/10"
        >
            {children}
        </a>
    );
}
