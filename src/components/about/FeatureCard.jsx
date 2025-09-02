export default function FeatureCard({ icon, label }) {
    const Icon = icon;

    return (
        <div
            className="rounded-xl 
                 bg-lightsurface-3 dark:bg-surface-2/40
                 ring-1 ring-black/5 dark:ring-white/5
                 p-8 flex flex-col items-center justify-center text-center shadow-glow-sm dark:shadow-none
                 transition-all duration-300 ease-out transform
                 hover:-translate-y-2 hover:shadow-lg
                 hover:bg-gray-50 dark:hover:bg-surface-2/60
                 hover:ring-brand/50"
        >
            <div
                className="w-12 h-12 rounded-lg 
                   bg-lightsurface-4 dark:bg-surface-4 
                   grid place-items-center 
                   ring-1 ring-black/10 dark:ring-white/10 mb-4"
            >
                <Icon className="w-7 h-7 text-brand" />
            </div>
            <div className="text-gray-800 dark:text-white/90 font-medium">
                {label}
            </div>
        </div>
    );
}
