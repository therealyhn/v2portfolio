import person from "../assets/logo2.png"; // ubaci svoju PNG sliku

export default function Home() {
    return (
        <section id="home" className="relative min-h-screen bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-0 min-h-screen">
                {/* Leva strana */}
                <div className="relative flex items-center">
                    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-28 pb-20">
                        <h1 className="text-[46px] sm:text-[64px] md:text-[88px] leading-[0.95] font-extrabold">
                            I’m <span className="text-blue-500">Jovan Ljusic</span>
                        </h1>

                        {/* Badge */}
                        <div className="mt-8 inline-flex items-center gap-3 bg-blue-100 text-black px-6 py-3 rounded-md relative">
                            <span className="tracking-[0.35em] font-extrabold">I’M A FRONTEND DEVELOPER</span>
                            {/* plavi ugaoni nosači */}
                            <span className="absolute -left-1 -top-1 w-3 h-3 border-l-[4px] border-t-[4px] border-blue-500" />
                            <span className="absolute -right-1 -top-1 w-3 h-3 border-r-[4px] border-t-[4px] border-blue-500" />
                            <span className="absolute -left-1 -bottom-1 w-3 h-3 border-l-[4px] border-b-[4px] border-blue-500" />
                            <span className="absolute -right-1 -bottom-1 w-3 h-3 border-r-[4px] border-b-[4px] border-blue-500" />
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 text-white px-5 py-3 font-semibold
                           hover:bg-blue-600 hover:-translate-y-0.5 transition transform"
                            >
                                My Work <span className="text-lg">💼 </span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 text-white px-5 py-3 font-semibold
                           hover:bg-blue-600 hover:-translate-y-0.5 transition transform"
                            >
                                Get in touch <span className="text-lg">✉</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desna strana */}
                <div className="relative bg-blue-500">
                    <img
                        src={person}
                        alt="Portrait"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] max-w-none select-none"
                        loading="lazy"
                    />

                    {/* Vertikalni tekst */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-10 hidden lg:block">
                        <div className="-rotate-90 tracking-[0.35em] text-white/90 font-semibold">
                            MY EXPERTISE
                            <span className="inline-block align-middle ml-3 w-12 h-[2px] bg-white/70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({ k, v }) {
    return (
        <div>
            <div className="text-4xl font-extrabold text-white">
                {k}
                <span className="text-blue-300 ml-1">+</span>
            </div>
            <div className="text-white/70 text-sm mt-1">{v}</div>
        </div>
    );
}
