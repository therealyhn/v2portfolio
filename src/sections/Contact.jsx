import InfoItem from "../components/contact/InfoItem";
import SocialButton from "../components/contact/SocialButton";
import ContactForm from "../components/contact/ContactForm";
import SectionHeader from "../components/projects/SectionHeader";

// svg icons
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
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 
           2.239 5 5 5h14c2.761 0 5-2.239 
           5-5V5c0-2.761-2.239-5-5-5zm-11 
           19H5V9h3v10zM6.5 7.7C5.3 
           7.7 4.3 6.7 4.3 5.5S5.3 
           3.3 6.5 3.3c1.2 0 2.2 1 2.2 
           2.2s-1 2.2-2.2 2.2zM20 
           19h-3v-5.6c0-1.3-.5-2.1-1.6-2.1-1 
           0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8V19h-3s.1-9 
           0-10h3v1.4c.4-.6 1.1-1.5 2.7-1.5 
           2 0 3.5 1.3 3.5 4.1V19z"/>
    </svg>

);

const InstagramIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
    >
        {/* Spoljni okvir */}
        <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
        />
        {/* Sočivo */}
        <circle cx="12" cy="12" r="4" />
        {/* Mala tačka gore desno */}
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
);


export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-lightsurface-2 text-black dark:bg-surface-4 dark:text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader lead="Get In" accent="Touch" />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* info */}
                    <div>
                        <h3 className="font-heading text-2xl font-semibold">Let’s work together</h3>
                        <p className="mt-4 text-surface dark:text-white/70 max-w-xl">
                            I'm actively exploring new job opportunities and exciting projects.
                            My inbox is always open, so whether you have a question, a collaboration in mind or just want to say hello, feel free to reach out.
                        </p>

                        <div className="mt-8 space-y-6">
                            <InfoItem icon={MailIcon} label="Email" value="contact@jovanljusic.com" />
                            <InfoItem icon={PinIcon} label="Location" value="Belgrade, Serbia" />
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex items-center gap-3">
                            <SocialButton href="https://github.com/therealyhn" label="GitHub">{GithubIcon}</SocialButton>
                            <SocialButton href="https://linkedin.com/" label="LinkedIn">{LinkedinIcon}</SocialButton>
                            <SocialButton href="https://www.instagram.com/jovanljusic_asdf" label="Instagram">{InstagramIcon}</SocialButton>

                        </div>
                    </div>

                    {/* form */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
