import { ArrowDown } from "lucide-react";
import background from "../assets/background.png";

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden text-center"
        >

            <div className="absolute inset-0 -z-10 opcity-80">
                <img src={background} alt="" />
            </div>
            {/* BG slojevi
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0a23,#0f0f3d)]" />
            <div aria-hidden className="absolute inset-0 hero-dot-pattern opacity-20" />
            <div aria-hidden className="absolute -left-40 -bottom-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_60%)]" />
            <div aria-hidden className="absolute -right-56 top-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.22),transparent_60%)]" /> */}

            {/* Sadržaj */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-28 flex flex-col items-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-400">
                    Jovan Ljusic
                </h1>
                <h2 className="text-xl md:text-2xl mt-3 text-gray-300">Front End Developer</h2>
                <p className="mt-4 max-w-2xl text-gray-300/80 leading-relaxed">
                    Crafting beautiful, functional web experiences with modern technologies.
                    Passionate about clean code and innovative solutions.
                </p>

                {/* Dugmad – savršeno centrirana */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold
                       bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition"
                    >
                        View My Work
                        <ArrowDown size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-md font-semibold border border-blue-400 text-blue-400
                       hover:bg-blue-400 hover:text-white transition"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Tanka linija + strelica ispod dugmadi */}
                <div className="mt-6 h-px w-6 bg-gray-400/40" />
            </div>

            {/* Scroll hint – apsolutno centriran na dnu */}
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-200 transition"
            >
                <ArrowDown className="animate-bounce" />
            </a>
        </section>
    );
}
