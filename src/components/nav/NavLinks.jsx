export default function NavLinks({ onClick }) {
  const links = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT ME" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <ul className="flex flex-col md:flex-row items-start md:items-center md:gap-8 gap-4 text-black dark:text-white/80 font-heading text-md md:text-md tracking-wide">
      {links.map((item) => (
        <li key={item.href} onClick={onClick}>
          <a
            href={item.href}
            className="group relative px-1 py-2 hover:text-black dark:hover:text-white transition"
          >
            {item.label}
            <span
              className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-0
                bg-gradient-to-r from-brand to-brand-600 rounded-full
                transition-all duration-300 group-hover:w-full"
            />
          </a>
        </li>
      ))}

      {/* CV */}
      <li onClick={onClick}>
        <a
          href="/Jovan_Ljusic_CV_eng.pdf"
          download
          className="group relative px-1 py-2 hover:text-black dark:hover:text-white transition"
        >
          RESUME
          <span
            className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-0
              bg-gradient-to-r from-brand to-brand-600 rounded-full
              transition-all duration-300 group-hover:w-full"
          />
        </a>
      </li>
    </ul>
  );
}
