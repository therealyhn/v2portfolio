import { useMemo, useRef, useState } from "react";
import SectionHeader from "../components/projects/SectionHeader";
import ProjectsGrid from "../components/projects/ProjectGrid";
import ProjectModal from "../components/projects/ProjectModal";
import useProjects from "../hooks/useProjects";

export default function ProjectsSection() {
    const [showMore, setShowMore] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [active, setActive] = useState(null);

    const sectionRef = useRef(null);
    const { projects, loading, error } = useProjects();

    const { primary, extra } = useMemo(() => {
        const first = projects.slice(0, 3);
        const rest = projects.slice(3);
        return { primary: first, extra: rest };
    }, [projects]);

    const openModal = (project) => {
        setActive(project);
        setModalOpen(true);
    };

    const toggleMore = () => {
        if (showMore) {
            setShowMore(false);
            // scroll back to section top when closing
            requestAnimationFrame(() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        } else {
            setShowMore(true);
        }
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-20 bg-lightsurface text-black dark:bg-surface dark:text-white"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader lead="Featured" accent="Projects" />

                {loading && (
                    <p className="mt-12 text-sm text-gray-700 dark:text-white/70">
                        Loading projects...
                    </p>
                )}

                {error && (
                    <p className="mt-12 text-sm text-red-600 dark:text-red-400">
                        Failed to load projects.
                    </p>
                )}

                {!loading && !error && projects.length === 0 && (
                    <p className="mt-12 text-sm text-gray-700 dark:text-white/70">
                        No projects yet.
                    </p>
                )}

                {!loading && !error && projects.length > 0 && (
                    <>
                        {/* First 3 projects */}
                        <div className="mt-12">
                            <ProjectsGrid projects={primary} onOpen={openModal} />
                        </div>

                        {/* Extra projects (single location) */}
                        {showMore && extra.length > 0 && (
                            <div id="extra-projects" className="mt-8">
                                <ProjectsGrid projects={extra} onOpen={openModal} />
                            </div>
                        )}
                    </>
                )}

                {/* Button always last */}
                {!loading && !error && extra.length > 0 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={toggleMore}
                            className="inline-flex items-center gap-2 rounded-lg
                         bg-brand text-white px-5 py-3 font-semibold
                         hover:bg-brand-600 shadow-glow-sm transition"
                            aria-expanded={showMore}
                            aria-controls="extra-projects"
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>

            <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} project={active} />
        </section>
    );
}
