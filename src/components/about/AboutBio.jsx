import { User2 } from "lucide-react";

const chips = ["JavaScript", "React", "React Native", "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub", "VS Code"];

export default function AboutBio() {
    return (
        <div className="rounded-2xl bg-surface-2/40 ring-1 ring-white/5 p-8">
            {/* Avatar */}
            <div className="mx-auto w-40 h-40 rounded-full bg-black/20 grid place-items-center ring-1 ring-white/10">
                <User2 className="w-16 h-16 text-brand" />
            </div>

            {/* Bio */}
            <div className="mt-8 space-y-5 text-white/80 leading-7">
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
                        className="rounded-full bg-white/10 text-white/80 px-3 py-1 text-sm ring-1 ring-white/10 hover:ring-white/20"
                    >
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
}
