
function ExpertiseLabel({ className = "" }) {
  return (
    <div className={className}>
      MY EXPERTISE
      <span className="inline-block align-middle ml-3 w-12 h-[2px] bg-white/70" />
    </div>
  );
}

export function TechIcons({
  tech,
  itemClass = "w-12 h-12 p-2 bg-white/90 rounded-full shadow-md",
}) {
  return tech.map((icon, idx) => (
    <img
      key={idx}
      src={icon}
      alt="Tech logo"
      className={`${itemClass} hover:scale-110 transition`}
      loading="lazy"
    />
  ));
}

/** Mobilna traka – horizontalni strip ikonica (ostaje ispod CTA u levoj koloni) */
export function ExpertiseMobile({ tech }) {
  return (
    <div className="mt-10 lg:hidden flex flex-col items-center">
      <div className="text-xs uppercase tracking-[0.25em] text-black/70 dark:text-white/70 mb-3">
        MY EXPERTISE
      </div>
      <div className="flex items-center gap-3 overflow-x-auto py-2 -mx-2 px-2">
        <TechIcons
          tech={tech}
          itemClass="w-10 h-10 p-2 bg-white/90 dark:bg-white/80 rounded-full shadow-md shrink-0"
        />
      </div>
    </div>
  );
}

/** Desktop – vertikalni label + stub ikonica (u desnom panelu) */
export function ExpertiseDesktop({ tech }) {
  return (
    <>
      {/* vertikalni label */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10">
        <ExpertiseLabel className="-rotate-90 tracking-[0.35em] text-white/90 font-semibold" />
      </div>

      {/* stub ikonica */}
      <div className="hidden lg:flex flex-col gap-4 items-center absolute right-3 top-1/2 -translate-y-1/2">
        <TechIcons tech={tech} />
      </div>
    </>
  );
}
