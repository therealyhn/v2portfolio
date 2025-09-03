import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ ok: false, msg: "" });

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setStatus({ ok: false, msg: "" });

        const form = e.currentTarget;
        const fd = new FormData(form);

        // honeypot (anti-bot).
        if (fd.get("botcheck")) {
            setLoading(false);
            setStatus({ ok: false, msg: "Spam detected." });
            return;
        }

        // access key
        fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);


        fd.append("subject", "New message from portfolio");
        fd.append("from_name", "Portfolio Contact");
        console.log(import.meta.env.VITE_WEB3FORMS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: fd,
            });

            const data = await res.json();

            if (data.success) {
                setStatus({ ok: true, msg: "Message sent. Thanks! ✅" });
                form.reset();
            } else {
                setStatus({ ok: false, msg: data.message || "Something went wrong." });
            }
        } catch (err) {
            console.error("Greška pri slanju forme:", err);
            setStatus({ ok: false, msg: "Network error. Try again later." });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white/80 dark:bg-surface-2/40 text-black ring-1 ring-black/10 p-6 md:p-8
                 dark:bg-surface-1 dark:text-white dark:ring-white/10"
        >
            {/* honeypot field (hidden)*/}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-5">
                <div>
                    <label className="block text-sm mb-2 text-black/70 dark:text-white/70">Name *</label>
                    <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg bg-white text-black ring-1 ring-black/10
                       px-4 py-3 placeholder:text-black/50
                       focus:outline-none focus:ring-2 focus:ring-brand
                       dark:bg-surface dark:text-white dark:ring-white/10
                       dark:placeholder:text-white/50"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-black/70 dark:text-white/70">Email *</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full rounded-lg bg-white text-black ring-1 ring-black/10
                       px-4 py-3 placeholder:text-black/50
                       focus:outline-none focus:ring-2 focus:ring-brand
                       dark:bg-surface dark:text-white dark:ring-white/10
                       dark:placeholder:text-white/50"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-black/70 dark:text-white/70">Message *</label>
                    <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project or just say hello!"
                        className="w-full rounded-lg bg-white text-black ring-1 ring-black/10
                       px-4 py-3 placeholder:text-black/50
                       focus:outline-none focus:ring-2 focus:ring-brand
                       dark:bg-surface dark:text-white dark:ring-white/10
                       dark:placeholder:text-white/50"
                    />
                </div>

                {/* status message */}
                {status.msg && (
                    <div
                        className={`text-sm rounded-md px-3 py-2 ${status.ok
                            ? "bg-green-500/10 text-green-700 ring-1 ring-green-500/20 dark:text-green-300"
                            : "bg-red-500/10 text-red-700 ring-1 ring-red-500/20 dark:text-red-300"
                            }`}
                    >
                        {status.msg}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg
                     bg-brand text-white px-5 py-3 font-semibold
                     hover:bg-brand-600 shadow-glow-sm transition
                     disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M22 2L11 13"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M22 2L15 22l-4-9-9-4 20-7z"
                        />
                    </svg>

                    {loading ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
}
