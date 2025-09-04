export default function HeroBadge({ text = "FRONTEND DEVELOPER" }) {
    return (
        <div
            className="mt-6 inline-flex md:w-2/3 justify-center items-center gap-3 px-5 py-2.5 rounded-md relative
                 bg-brand-100 text-black dark:bg-surface-3 dark:text-white
                 animate__animated animate__fadeInUp"
        >
            <span className="tracking-[0.30em] sm:tracking-[0.35em] font-extrabold text-xs sm:text-sm">
                {text}
            </span>

            {/* corners */}
            <span className="absolute -left-1 -top-1 w-3 h-3 border-l-[4px] border-t-[4px] border-brand" />
            <span className="absolute -right-1 -top-1 w-3 h-3 border-r-[4px] border-t-[4px] border-brand" />
            <span className="absolute -left-1 -bottom-1 w-3 h-3 border-l-[4px] border-b-[4px] border-brand" />
            <span className="absolute -right-1 -bottom-1 w-3 h-3 border-r-[4px] border-b-[4px] border-brand" />
        </div>
    );
}
