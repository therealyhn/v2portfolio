// Malo univerzalniji “label + value” blok sa ikonicom
export default function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-3">
            <div className="rounded-lg bg-lightsurface-4 text-brand ring-1 ring-white/10 p-3
                      dark:bg-surface dark:ring-white/10">
                {icon}
            </div>
            <div>
                <div className="text-sm text-surface dark:text-white/70">{label}</div>
                <div className="text-base text-surface dark:text-white">{value}</div>
            </div>
        </div>
    );
}
