import AboutHeader from "../components/about/AboutHeader";
import AboutBio from "../components/about/AboutBio";
import FeatureGrid from "../components/about/FeatureGrid";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-20 bg-white text-black dark:bg-surface dark:text-white"
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <AboutHeader />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <AboutBio />
                    <FeatureGrid />
                </div>
            </div>
            <a
                href="#projects"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black/70 dark:text-white/70
             hover:text-brand transition-colors animate-bounce"
                aria-label="Scroll to Projects section"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </section>

    );
}
