export default function SectionHeader({ lead = "Featured", accent = "Projects" }) {
    return (
        <h2 className="text-center font-heading text-4xl sm:text-5xl font-extrabold">
            <span className="text-gray-900 dark:text-white">{lead}</span>{" "}
            <span className="text-brand">{accent}</span>
        </h2>
    );
}
