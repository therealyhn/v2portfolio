const chips = ["JavaScript", "React", "React Native", "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub", "VS Code"];

export default function AboutBio() {
    return (
        <div className="rounded-2xl bg-lightsurface-2 dark:bg-surface-4 ring-black/5 dark:ring-white/5 px-10">
            {/* Bio */}
            <div className="space-y-5 text-gray-800 dark:text-white/80 leading-7 text-center md:text-left">
                <p>
                    I'm a certified Front-End Developer from ITAcademy, LinkGroup, Serbia with specialization in crafting responsive, user-centered web applications.
                    With React, Tailwind CSS and more modern JavaScript/CSS frameworks, I create interactive interfaces and dynamic user experiences.
                    An innovator at heart, I thrive on projects that push the boundaries of web development and design value-added, leading-edge solutions.
                </p>
                <p>
                    Working currently as an IT Engineer,
                    I soon upgraded to the role of managing the entire IT infrastructure of a 200+ employee-strong company
                    with 20+ retail stores across several countries, in the wake of a veteran IT Manager's departure.
                </p>
            </div>

            {/* Chips */}
            <div className="mt-14 flex flex-wrap justify-center  gap-3">
                {chips.map((c) => (
                    <span
                        key={c}
                        className="rounded-full bg-lightsurface-3 text-gray-800 ring-1 ring-black/10
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
