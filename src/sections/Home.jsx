import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import cssLogo from "../assets/css.svg";
import htmlLogo from "../assets/html5.svg";
import jsLogo from "../assets/javascript.svg";

import HeroTitle from "../components/hero/HeroTitle";
import HeroBadge from "../components/hero/HeroBadge";
import HeroButtons from "../components/hero/HeroButtons";
import Portrait from "../components/hero/Portrait";
import { ExpertiseMobile, ExpertiseDesktop } from "../components/hero/Expertise";

export default function Home() {
    const tech = [reactLogo, tailwindLogo, jsLogo, cssLogo, htmlLogo];

    return (
        <section id="home" className="relative min-h-screen bg-lightsurface text-black dark:bg-surface dark:text-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-0 min-h-screen">
                {/* Left */}
                <div className="relative flex items-center order-2 lg:order-1">
                    <div className="flex flex-col items-center mx-auto px-6 lg:px-8 pt-10 lg:pt-28 pb-14 lg:pb-20">
                        <HeroTitle name="Jovan Ljusic" />
                        <HeroBadge text="I’M A FRONTEND DEVELOPER" />
                        <HeroButtons />

                        {/* Mobile expertise label */}
                        <ExpertiseMobile tech={tech} />
                    </div>
                </div>

                {/* Right */}
                <div className="relative bg-brand dark:bg-brand-600 order-1 lg:order-2 min-h-[48vh] lg:min-h-full">
                    <Portrait />

                    {/* Desktop expertise label + icons */}
                    <ExpertiseDesktop tech={tech} />
                </div>
            </div>
            
            <a
                href="#about"
                className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 text-black/70 dark:text-white/70
             hover:text-brand transition-colors animate-bounce"
                aria-label="Scroll to About section"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </section>
    );
}
