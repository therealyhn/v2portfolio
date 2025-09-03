import AboutHeader from "../components/about/AboutHeader";
import AboutBio from "../components/about/AboutBio";
import FeatureGrid from "../components/about/FeatureGrid";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-20 bg-lightsurface-2 text-black dark:bg-surface-4 dark:text-white"
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <AboutHeader />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <AboutBio />
                    <FeatureGrid />
                </div>
            </div>
        </section>

    );
}
