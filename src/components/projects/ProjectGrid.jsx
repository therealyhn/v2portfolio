import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, onOpen }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
                <ProjectCard key={p.id} project={p} onOpen={onOpen} />
            ))}
        </div>
    );
}
