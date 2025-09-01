
export default function HeroButtons() {
  return (
    <div className="mt-5 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
      <a
        href="#projects"
        className="inline-flex items-center gap-2 rounded-lg bg-brand text-white px-5 py-3 font-semibold
                   hover:bg-brand-600 hover:-translate-y-0.5 transition transform shadow-glow-sm">
        My Work <span className="text-lg">💼</span>
      </a>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-lg bg-brand text-white px-5 py-3 font-semibold
                   hover:bg-brand-600 hover:-translate-y-0.5 transition transform shadow-glow-sm">
        Get in touch <span className="text-lg">✉</span>
      </a>
    </div>
  );
}
