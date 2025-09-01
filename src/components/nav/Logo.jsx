export default function Logo({ href = "#home", logoLight, logoDark }) {
    return (
        <a href={href} className="flex items-center gap-2" aria-label="Home">
            <img src={logoLight} alt="Logo" className="dark:hidden h-14 md:h-16 w-auto" />
            <img src={logoDark} alt="Logo" className="hidden dark:block h-14 md:h-16 w-auto" />
        </a>
    );
}
