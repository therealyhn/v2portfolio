import { useMemo, useRef, useState } from "react";
import SectionHeader from "../components/projects/SectionHeader";
import ProjectsGrid from "../components/projects/ProjectGrid";
import ProjectModal from "../components/projects/ProjectModal";

// projekti
const projectsData = [
    {
        id: "barber-mane",
        title: "Mane's Barbershop",
        summary: "Website for a local up-and-coming barbershop featuring online booking, service menu, gallery, and customer reviews.",
        longDescription:
            "Developed a modern, responsive website for a local barbershop using React, Vite and Tailwind CSS. "
            + "Designed intuitive navigation and integrated animate.css for smooth animations. "
            + "Implemented a detailed booking form, allowing customers to schedule appointments by selecting services (e.g., classic cut, fade, beard trim), entering their name, phone number, preferred date, and time, with a user-friendly design optimized for all devices."
            + "Created a scalable framework to accommodate client-specific content updates, including text and images.",
        cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        ],
        tags: ["React", "Vite", "TailwindCSS", "Animate.css"],
        links: { demo: "https://manemuskifrizer.com", github: "https://github.com/therealyhn/mane-barbershop" },
    },
    {
        id: "roksped",
        title: "Rok Šped Plus D.O.O",
        summary: "Redesigned a Freight Forwarding and Transport Company website with a modern, responsive layout and interactive features.",
        longDescription:
            "Designed a modern, responsive, and interactive website for a freight forwarding and transport company. "
            + "Developed a mobile-friendly layout optimized for all devices to ensure a seamless user experience."
            + "Integrated a functional contact form to streamline client communication."
            + "Enhanced loading times through optimized code and asset management."
            + "Crafted content and design elements to align with the company’s brand identity and values.",
        cover: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557825835-70d97c4aa06a?q=80&w=1600&auto=format&fit=crop",
        ],
        tags: ["React", "TailwindCSS", "Animate.css", "Photoshop"],
        links: { demo: "https://roksped.rs", github: "https://github.com/therealyhn/rokspedv2" },
    },
    {
        id: "jumpnrun",
        title: "Madara vs Shinobi Alliance",
        summary: "Classic jump-and-run game featuring custom-designed characters, FPS tracking, speed tracking, and score tracking.",
        longDescription:
            "One of my first projects, a classic jump-and-run game. Features custom-designed characters."
            + "Includes tracking for FPS, speed, and score."
            + "Offers smooth controls and challenging tasks."
            + "Showcases a unique visual style, bringing a fresh take to the traditional genre.",
        cover: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
        ],
        tags: ["HTML", "CSS", "JavaScript", "Photoshop"],
        links: { demo: "https://madara-vs-shinobi-alliance.jovanljusic.com/", github: "https://github.com/therealyhn/madara_vs_alliance" },
    },


    // dodatni projekti za Show More
    {
        id: "planner",
        title: "DJ Event Planner",
        summary: "Responsive DJ event planner web app that allows users to track, add, edit, and delete events. Features include a toggleable calendar view, live event updates, and local storage.",
        longDescription:
            "Allows users to track, add, edit, and delete events."
            + "Includes a toggleable calendar view for easier event management."
            + "Provides real-time updates for immediate changes."
            + "Utilizes local storage for persistent data across sessions.",
        cover: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        ],
        tags: ["HTML", "CSS", "JavaScript", "Photoshop"],
        links: { demo: "https://djeventplanner.jovanljusic.com/", github: "https://github.com/therealyhn/djeventplanner" },
    },
    {
        id: "foto",
        title: "Nikola Petković Photography Website",
        summary: "Responsive portfolio website for a photographer, showcasing their work, services, and contact information.",
        longDescription:
            "Responsive portfolio website for a photographer, showcasing their work, services, and contact information."
            + "Lorem ipsum dolor sit amet."
            + "Testing lorem ipsum."
            + "Test Test Test.",
        cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        ],
        tags: ["React", "Vite", "TailwindCSS", "Animate.css"],
        links: { demo: "#", github: "#" },
    },
    {
        id: "foto2",
        title: "Aleksandar Jovanović Photography Website",
        summary: "Responsive portfolio website for a photographer, showcasing their work, services, and contact information.",
        longDescription:
            "Responsive portfolio website for a photographer, showcasing their work, services, and contact information."
            + "Lorem ipsum dolor sit amet."
            + "Testing lorem ipsum."
            + "Test Test Test.",
        cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        ],
        tags: ["React", "Vite", "Tailwind", "Animate.css"],
        links: { demo: "#", github: "#" },
    },
];

export default function ProjectsSection() {
    const [showMore, setShowMore] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [active, setActive] = useState(null);

    const sectionRef = useRef(null);

    const { primary, extra } = useMemo(() => {
        const first = projectsData.slice(0, 3);
        const rest = projectsData.slice(3);
        return { primary: first, extra: rest };
    }, []);

    const openModal = (project) => {
        setActive(project);
        setModalOpen(true);
    };

    const toggleMore = () => {
        if (showMore) {
            setShowMore(false);
            // skroluj nazad na vrh sekcije kad zatvaramo
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

                {/* Prva 3 projekta */}
                <div className="mt-12">
                    <ProjectsGrid projects={primary} onOpen={openModal} />
                </div>

                {/* Dodatni projekti (jedina lokacija!) */}
                {showMore && extra.length > 0 && (
                    <div id="extra-projects" className="mt-8">
                        <ProjectsGrid projects={extra} onOpen={openModal} />
                    </div>
                )}

                {/* Dugme uvek poslednje */}
                {extra.length > 0 && (
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
