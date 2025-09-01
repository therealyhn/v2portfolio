import person from "../assets/hero.png";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import cssLogo from "../assets/css.svg";
import htmlLogo from "../assets/html5.svg";
import jsLogo from "../assets/javascript.svg";

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-white text-black dark:bg-surface dark:text-white"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-0 min-h-screen">
                {/* left side */}
                <div className="relative flex items-center">
                    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-28 pb-20">
                        <h1 className="font-heading text-[46px] sm:text-[64px] md:text-[88px] leading-[0.95] font-extrabold">
                            I’m <span className="text-brand">Jovan Ljusic</span>
                        </h1>

                        {/* Badge */}
                        <div
                            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-md relative
                         bg-brand-100 text-black dark:bg-white/10 dark:text-white"
                        >
                            <span className="tracking-[0.35em] font-extrabold">
                                I’M A FRONTEND DEVELOPER
                            </span>
                            {/* corners */}
                            <span className="absolute -left-1 -top-1 w-3 h-3 border-l-[4px] border-t-[4px] border-brand" />
                            <span className="absolute -right-1 -top-1 w-3 h-3 border-r-[4px] border-t-[4px] border-brand" />
                            <span className="absolute -left-1 -bottom-1 w-3 h-3 border-l-[4px] border-b-[4px] border-brand" />
                            <span className="absolute -right-1 -bottom-1 w-3 h-3 border-r-[4px] border-b-[4px] border-brand" />
                        </div>

                        {/* buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-lg bg-brand text-white px-5 py-3 font-semibold
                           hover:bg-brand-600 hover:-translate-y-0.5 transition transform shadow-glow-sm"
                            >
                                My Work <span className="text-lg">💼</span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-brand text-white px-5 py-3 font-semibold
                           hover:bg-brand-600 hover:-translate-y-0.5 transition transform shadow-glow-sm"
                            >
                                Get in touch <span className="text-lg">✉</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="relative bg-brand dark:bg-brand-600">
                    <img
                        src={person}
                        alt="Portrait"
                        className="absolute bottom-0 left-1 -translate-x-1/2 w-[520px] max-w-full select-none"
                        loading="lazy"
                    />

                    {/* vertical label */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full hidden lg:block">
                        <div className="-rotate-90 tracking-[0.35em] text-black/80 dark:text-white/90 font-semibold">
                            MY EXPERTISE
                            <span className="inline-block align-middle ml-3 w-12 h-[2px] bg-black/70 dark:bg-white/70" />
                        </div>
                    </div>

                    {/* tech icons */}
                    <div className="hidden lg:flex flex-col gap-4 items-center absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                        {[reactLogo, tailwindLogo, jsLogo, cssLogo, htmlLogo].map((icon, idx) => (
                            <img
                                key={idx}
                                src={icon}
                                alt="Tech logo"
                                className="w-12 h-12 p-2 bg-white/90 dark:bg-white/80 rounded-full shadow-md hover:scale-110 transition"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
