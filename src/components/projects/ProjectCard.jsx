import Tag from "./Tag";
import { urlFor } from "../../lib/sanityImage";

function IconExternal({ className = "w-4 h-4" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
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

export default function ProjectCard({ project, onOpen }) {
    return (
        <article
            onClick={() => onOpen(project)}
            className="group overflow-hidden rounded-xl
                 bg-lightsurface-4 shadow-lg text-black ring-1 ring-black/5
                 dark:bg-surface-2/40 dark:text-white dark:ring-white/5
                 hover:shadow-lg hover:ring-brand/40 transition-all duration-300 ease-out"
        >
            <button
                type="button"
                className="relative block w-full overflow-hidden"
                aria-label={`Open details for ${project.title}`}
            >
                {project.coverImage ? (
                    <img
                        src={urlFor(project.coverImage).width(720).height(480).fit("crop").auto("format").url()}
                        srcSet={[
                            urlFor(project.coverImage).width(480).height(320).fit("crop").auto("format").url() + " 480w",
                            urlFor(project.coverImage).width(720).height(480).fit("crop").auto("format").url() + " 720w",
                            urlFor(project.coverImage).width(960).height(640).fit("crop").auto("format").url() + " 960w",
                        ].join(", ")}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-black/5 text-xs text-gray-600 dark:bg-white/5 dark:text-white/60">
                        No image
                    </div>
                )}
            </button>

            <div className="p-6">
                <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-white/70">
                    {project.summary}
                </p>

                {project.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div>
                )}

                <div className="mt-5 flex items-center justify-between text-sm">

                    {project.links?.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-brand hover:text-brand-600"
                        >
                            <IconExternal />
                            Check the project
                        </a>
                    )}
                    <p className="text-gray-700 dark:text-white/70 cursor-pointer">Click for details</p>
                </div>
            </div>
        </article>
    );
}
