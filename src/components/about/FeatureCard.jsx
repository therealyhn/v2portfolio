export default function FeatureCard({ icon, label }) {
    const Icon = icon;

    return (
        <div
            className="rounded-xl bg-surface-2/40 ring-1 ring-white/5 p-8
                 flex flex-col items-center justify-center text-center
                 transition transform
                 hover:-translate-y-2 hover:bg-surface-2/60 hover:shadow-lg"
        >
            <div className="w-12 h-12 rounded-lg bg-black/25 grid place-items-center ring-1 ring-white/10 mb-4">
                <Icon className="w-7 h-7 text-brand" />
            </div>
            <div className="text-white/90 font-medium">{label}</div>
        </div>
    );
}
