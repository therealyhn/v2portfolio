
function ExpertiseLabel({ className = "" }) {
  return (
    <div
      className={`${className} animate__animated animate__fadeInLeft animate__slow`}
    >
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
      className={`${itemClass} animate__animated animate__fadeInUp hover:scale-110 hover:animate__pulse transition`}
      loading="lazy"
    />
  ));
}


export function ExpertiseMobile({ tech }) {
  return (
    <div className="mt-10 lg:hidden flex flex-col items-center animate__animated animate__fadeInUp">
      <div className="text-xs uppercase tracking-[0.25em] text-black/70 dark:text-white/70 mb-3">
        MY EXPERTISE
      </div>
      <div className="flex items-center gap-3 overflow-x-auto py-2 -mx-2 px-2">
        <TechIcons
          tech={tech}
          itemClass="w-10 h-10 p-2 bg-white/90 dark:bg-white/80 rounded-full shadow-md shrink-0 animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
}


export function ExpertiseDesktop({ tech }) {
  return (
    <>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10">
        <div className="-rotate-90">
          <ExpertiseLabel className="tracking-[0.35em] text-white/90 font-semibold animate__animated animate__fadeInLeft" />
        </div>
      </div>


      <div className="hidden lg:flex flex-col gap-4 items-center absolute right-3 top-[37%] -translate-y-1/2 animate__animated animate__fadeInUp animate__slow">
        <TechIcons tech={tech} />
      </div>
    </>
  );
}

