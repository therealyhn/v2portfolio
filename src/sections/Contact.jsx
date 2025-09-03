import InfoItem from "../components/contact/InfoItem";
import SocialButton from "../components/contact/SocialButton";
import ContactForm from "../components/contact/ContactForm";
import SectionHeader from "../components/projects/SectionHeader";

// Male SVG ikone bez biblioteka
const MailIcon = (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
    </svg>
);

const PinIcon = (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
        <circle cx="12" cy="11" r="2" />
    </svg>
);

const GithubIcon = (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.74 2 12.43c0 4.6 2.87 8.49 6.85 9.87.5.1.68-.23.68-.5 0-.25-.01-1.07-.02-1.94-2.79.62-3.38-1.22-3.38-1.22-.46-1.2-1.14-1.52-1.14-1.52-.93-.66.07-.65.07-.65 1.03.08 1.57 1.1 1.57 1.1.92 1.62 2.42 1.15 3.01.88.09-.69.36-1.15.65-1.42-2.23-.26-4.57-1.15-4.57-5.11 0-1.13.39-2.05 1.04-2.78-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.06.81-.23 1.68-.35 2.54-.36.86 0 1.73.12 2.54.36 1.92-1.34 2.77-1.06 2.77-1.06.56 1.4.21 2.44.11 2.7.65.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.84-4.57 5.1.37.33.69.96.69 1.93 0 1.4-.01 2.53-.01 2.87 0 .27.18.61.69.5A10.51 10.51 0 0 0 22 12.43C22 6.74 17.52 2 12 2z" />
    </svg>
);

const LinkedinIcon = (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M6.94 6.5A2.44 2.44 0 014.5 4.06 2.44 2.44 0 016.94 1.6a2.44 2.44 0 012.44 2.44A2.44 2.44 0 016.94 6.5zM2.5 8.5h8.9V22H2.5zM13.9 8.5h8.1V22h-8.1z" />
    </svg>
);

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-lightsurface-2 text-black dark:bg-surface dark:text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader lead="Get In" accent="Touch" />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Leva kolona */}
                    <div>
                        <h3 className="font-heading text-2xl font-semibold">Let’s work together</h3>
                        <p className="mt-4 text-surface dark:text-white/70 max-w-xl">
                            I’m always open to discussing new opportunities, interesting projects, or just having a chat
                            about technology and development.
                        </p>

                        <div className="mt-8 space-y-6">
                            <InfoItem icon={MailIcon} label="Email" value="john.doe@example.com" />
                            <InfoItem icon={PinIcon} label="Location" value="San Francisco, CA" />
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex items-center gap-3">
                            <SocialButton href="https://github.com/" label="GitHub">{GithubIcon}</SocialButton>
                            <SocialButton href="https://linkedin.com/" label="LinkedIn">{LinkedinIcon}</SocialButton>
                            {/* Dodaj još po potrebi */}
                        </div>
                    </div>

                    {/* Desna kolona – Forma */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
