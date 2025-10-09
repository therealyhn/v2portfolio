import { useMemo, useRef, useState } from "react";
import SectionHeader from "../components/projects/SectionHeader";
import ProjectsGrid from "../components/projects/ProjectGrid";
import ProjectModal from "../components/projects/ProjectModal";
import ComingSoonImg from "../assets/projects/comingsoon.png";
import Project1Thumbnail from "../assets/projects/project1_thumbnail.jpg";
import Project1Slide1 from "../assets/projects/project1_slide1.jpg";
import Project1Slide2 from "../assets/projects/project1_slide2.jpg";
import Project1Slide3 from "../assets/projects/project1_slide3.jpg";
import Project2Thumbnail from "../assets/projects/project2_thumbnail.jpg";
import Project2Slide1 from "../assets/projects/project2_slide1.jpg"
import Project2Slide2 from "../assets/projects/project2_slide2.jpg"
import Project2Slide3 from "../assets/projects/project2_slide3.jpg"
import Project3Thumbnail from "../assets/projects/project3_thumbnail.jpg";
import Project3Slide1 from "../assets/projects/project3_slide1.jpg"
import Project3Slide2 from "../assets/projects/project3_slide2.jpg"
import Project4Thumbnail from "../assets/projects/project4_thumbnail.jpg";
import Project4Slide5 from "../assets/projects/project4_slide5.jpg"
import Project4Slide1 from "../assets/projects/project4_slide1.jpg"
import Project4Slide2 from "../assets/projects/project4_slide2.jpg"
import Project4Slide3 from "../assets/projects/project4_slide3.jpg"
import Project4Slide4 from "../assets/projects/project4_slide4.jpg"
import Project5Thumbnail from "../assets/projects/project5_thumbnail.jpg";
import Project5Slide1 from "../assets/projects/project5_slide1.jpg"
import Project5Slide2 from "../assets/projects/project5_slide2.jpg"
import Project5Slide3 from "../assets/projects/project5_slide3.jpg"
import Project5Slide4 from "../assets/projects/project5_slide4.jpg"
import Project5Slide5 from "../assets/projects/project5_slide5.jpg"

// projekti
const projectsData = [
    {
        id: "barber-mane",
        title: "Mane's Barbershop",
        summary: "Website for a local up-and-coming barbershop featuring online booking, service menu, gallery, and customer reviews.",
        longDescription:
            "Modern, responsive website for a local barbershop using React, Vite and Tailwind CSS. "
            + "Intuitive navigation and integrated animate.css for smooth animations. "
            + "Detailed booking form, allowing customers to schedule appointments by selecting services (e.g., classic cut, fade, beard trim), entering their name, phone number, preferred date, and time, with a user-friendly design optimized for all devices."
            + "Scalable framework to accommodate client-specific content updates, including text and images.",
        cover: Project1Thumbnail,
        images: [Project1Slide1, Project1Slide3, Project1Slide2],
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
        cover: Project2Thumbnail,
        images: [Project2Slide1, Project2Slide3, Project2Slide2],
        tags: ["React", "TailwindCSS", "Animate.css", "Photoshop"],
        links: { demo: "https://roksped.rs", github: "https://github.com/therealyhn/rokspedv2" },
    },
    {
        id: "poki",
        title: "Olja & Andrija - Live Wedding Gallery",
        summary: "React-based photo timeline with guest uploads and private access.",
        longDescription:
            "Built with React, Vite, and Tailwind CSS, using Framer Motion for animations and a lightweight PHP + JSON backend for image upload, edit, delete, and download functionality"
            + "Includes lazy loading, a responsive timeline layout, secure password-protected file managment and automated deployment via GitHub Actions.",
        cover: Project5Thumbnail,
        images: [Project5Slide1, Project5Slide2, Project5Slide3, Project5Slide4, Project5Slide5],
        tags: ["React", "TailwindCSS", "Php", "GitHub Actions"],
        links: { demo: "https://poki-oki.com/", github: "https://github.com/therealyhn/pokiphotogallery" },
    },
    {
        id: "jumpnrunn",
        title: "Madara vs Shinobi Alliance",
        summary: "Classic jump-and-run game featuring custom-designed characters, FPS tracking, speed tracking, and score tracking.",
        longDescription:
            "One of my first projects, a classic jump-and-run game. Features custom-designed characters."
            + "Includes tracking for FPS, speed, and score."
            + "Offers smooth controls and challenging tasks."
            + "Showcases a unique visual style, bringing a fresh take to the traditional genre.",
        cover: Project3Thumbnail,
        images: [Project3Slide1, Project3Slide2],
        tags: ["HTML", "CSS", "JavaScript", "Photoshop"],
        links: { demo: "https://madara-jumpandrun.jovanljusic.com", github: "https://github.com/therealyhn/madara_vs_alliance" },
    },
    {
        id: "planner",
        title: "DJ Event Planner",
        summary: "Responsive DJ event planner web app that allows users to track, add, edit, and delete events. Features include a toggleable calendar view, live event updates, and local storage.",
        longDescription:
            "Allows users to track, add, edit, and delete events."
            + "Includes a toggleable calendar view for easier event management."
            + "Provides real-time updates for immediate changes."
            + "Utilizes local storage for persistent data across sessions.",
        cover: Project4Thumbnail,
        images: [Project4Slide5, Project4Slide1, Project4Slide2, Project4Slide3, Project4Slide4],
        tags: ["HTML", "CSS", "JavaScript", "Photoshop"],
        links: { demo: "https://djplanner.jovanljusic.com/", github: "https://github.com/therealyhn/djeventplanner" },
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
        cover: ComingSoonImg,
        images: [ComingSoonImg, ComingSoonImg],
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
        cover: ComingSoonImg,
        images: [ComingSoonImg, ComingSoonImg],
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
