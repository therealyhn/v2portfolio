export default function Tag({ children }) {
    return (
        <span
            className="inline-flex items-center rounded-full px-2.5 py-1 text-xs
                 bg-gray-100 text-gray-800 ring-1 ring-black/10
                 dark:bg-white/10 dark:text-white/80 dark:ring-white/10"
        >
            {children}
        </span>
    );
}
