import { User2 } from "lucide-react";

const chips = ["JavaScript", "React", "React Native", "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub", "VS Code"];

export default function AboutBio() {
    return (
        <div className="rounded-2xl bg-white/70 dark:bg-surface ring-black/5 dark:ring-white/5 p-8">
            <div className="w-40 h-40 rounded-full bg-gray-100 dark:bg-black/20 grid place-items-center
            transition-all duration-300 ease-out transform hover:-translate-y-2 dark:hover:shadow-lg shadow-glow-sm ring-1 ring-black/10 dark:ring-white/10">
                <User2 className="w-16 h-16 text-brand" />
            </div>

            {/* Bio */}
            <div className="mt-8 space-y-5 text-gray-800 dark:text-white/80 leading-7">
                <p>
                    I'm a certified Front-End Developer from ITAcademy, LinkGroup, Serbia with specialization in crafting responsive, user-centered web applications.
                    With React, Tailwind CSS, and more modern JavaScript/CSS frameworks, I create interactive interfaces and dynamic user experiences.
                    An innovator at heart, I thrive on projects that push the boundaries of web development and design value-added, leading-edge solutions.
                </p>
                <p>
                    Working currently as an IT Engineer,
                    I soon upgraded to the role of managing the entire IT infrastructure of a 200+ employee-strong company
                    with 20+ retail stores across several countries, in the wake of a veteran IT Manager's departure.
                </p>
            </div>

            {/* Chips */}
            <div className="mt-8 flex flex-wrap gap-3">
                {chips.map((c) => (
                    <span
                        key={c}
                        className="rounded-full bg-gray-100 text-gray-800 ring-1 ring-black/10
                       dark:bg-white/10 dark:text-white/80 dark:ring-white/10
                       px-3 py-1 text-sm hover:ring-brand/40 dark:hover:ring-brand/40
                       transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg transition"
                    >
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
}
