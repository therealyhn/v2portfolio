import { Code2, Database, Globe, TabletSmartphone, Smartphone, Palette, Zap } from "lucide-react";
import FeatureCard from "../about/FeatureCard";

const items = [
    { icon: Code2, label: "React & JavaScript" },
    { icon: Smartphone, label: "Mobile Applications" },
    { icon: Globe, label: "Web Development" },
    { icon: TabletSmartphone, label: "Responsive Design" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Zap, label: "Performance Optimization" },
];

export default function FeatureGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {items.map((it) => (
                <FeatureCard key={it.label} icon={it.icon} label={it.label} />
            ))}
        </div>
    );
}
