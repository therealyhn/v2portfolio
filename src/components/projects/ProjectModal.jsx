import { useEffect, useState } from "react";
import Tag from "./Tag";

function IconExternal({ className = "w-4 h-4" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14V5" />
        </svg>
    );
}
function IconGithub({ className = "w-4 h-4" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 2C6.48 2 2 6.74 2 12.43c0 4.6 2.87 8.49 6.85 9.87.5.1.68-.23.68-.5 0-.25-.01-1.07-.02-1.94-2.79.62-3.38-1.22-3.38-1.22-.46-1.2-1.14-1.52-1.14-1.52-.93-.66.07-.65.07-.65 1.03.08 1.57 1.1 1.57 1.1.92 1.62 2.42 1.15 3.01.88.09-.69.36-1.15.65-1.42-2.23-.26-4.57-1.15-4.57-5.11 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.06.81-.23 1.68-.35 2.54-.36.86 0 1.73.12 2.54.36 1.92-1.34 2.77-1.06 2.77-1.06.56 1.4.21 2.44.11 2.7.65.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.84-4.57 5.1.37.33.69.96.69 1.93 0 1.4-.01 2.53-.01 2.87 0 .27.18.61.69.5A10.51 10.51 0 0 0 22 12.43C22 6.74 17.52 2 12 2z" />
        </svg>
    );
}

export default function ProjectModal({ open, onClose, project }) {
    const [index, setIndex] = useState(0);
    const slides = project?.images || [];

    useEffect(() => {
        if (!open) return;
        const prevHtml = document.documentElement.style.overflow;
        const prevBody = document.body.style.overflow;
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        const onEsc = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onEsc);
        return () => {
            document.documentElement.style.overflow = prevHtml;
            document.body.style.overflow = prevBody;
            document.removeEventListener("keydown", onEsc);
        };
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;
        setIndex(0);
    }, [open, project]);

    if (!open || !project) return null;

    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    return (
        <div
            className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl
                   bg-lightsurface dark:bg-surface-1 text-black dark:text-white
                   ring-1 ring-black/10 dark:ring-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 rounded-md bg-white/70 dark:bg-surface/70
                     p-2 hover:bg-brand hover:text-white transition"
                    aria-label="Close details"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>

                {/* Slider */}
                <div className="relative">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {slides.map((src, i) => (
                            <div key={i} className="w-full shrink-0">
                                <img src={src} alt="" className="w-full h-[360px] object-cover" />
                            </div>
                        ))}
                    </div>
                    {slides.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-lg
                           bg-white/80 dark:bg-surface/80 p-2 hover:bg-brand hover:text-white"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg
                           bg-white/80 dark:bg-surface/80 p-2 hover:bg-brand hover:text-white"
                                aria-label="Next image"
                            >
                                ›
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/10 dark:ring-white/10 ${i === index ? "bg-brand" : "bg-white/70 dark:bg-white/20"
                                            }`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Details */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-[1.3fr_.7fr] gap-6">
                    <div>
                        <h3 className="font-heading text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-white/80">
                            {project.longDescription || project.summary}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            {project.links?.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-brand hover:text-brand-600"
                                >
                                    <IconExternal />
                                    Live Demo
                                </a>
                            )}
                            {project.links?.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-gray-700 hover:text-black
                             dark:text-white/70 dark:hover:text-white"
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.74 2 12.43c0 4.6 2.87 8.49 6.85 9.87.5.1.68-.23.68-.5 0-.25-.01-1.07-.02-1.94-2.79.62-3.38-1.22-3.38-1.22-.46-1.2-1.14-1.52-1.14-1.52-.93-.66.07-.65.07-.65 1.03.08 1.57 1.1 1.57 1.1.92 1.62 2.42 1.15 3.01.88.09-.69.36-1.15.65-1.42-2.23-.26-4.57-1.15-4.57-5.11 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.06.81-.23 1.68-.35 2.54-.36.86 0 1.73.12 2.54.36 1.92-1.34 2.77-1.06 2.77-1.06.56 1.4.21 2.44.11 2.7.65.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.84-4.57 5.1.37.33.69.96.69 1.93 0 1.4-.01 2.53-.01 2.87 0 .27.18.61.69.5A10.51 10.51 0 0 0 22 12.43C22 6.74 17.52 2 12 2z" />
                                    </svg>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
