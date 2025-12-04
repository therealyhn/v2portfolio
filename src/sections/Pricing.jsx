import { pricingPlans, pricingAddOns } from "../components/data/priceData";

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-24 px-6 lg:px-10 bg-lightsurface dark:bg-surface text-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto">
                {/* Naslov */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                        Freelance Pricing Plans
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-muted-2 dark:text-white/70 max-w-2xl mx-auto">
                        Cene zavise od obima i kompleksnosti projekta. Ovi paketi su
                        orijentiri – svaka ponuda se dodatno prilagođava tvom biznisu.
                    </p>
                </div>

                {/* Planovi */}
                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative p-8 rounded-xl border ${plan.color} 
              hover:-translate-y-2 transition-transform duration-300`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-brand shadow-glow-sm">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
                            <p className="text-sm text-muted-2 dark:text-white/70 mb-3">
                                {plan.badge}
                            </p>

                            <p className="text-3xl font-bold mb-4">{plan.priceRange}</p>

                            <p className="text-sm mb-6 text-muted-2 dark:text-white/80">
                                {plan.description}
                            </p>

                            <ul className="text-sm mb-6 space-y-2">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-[2px]">-</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

                {/* Add-ons / dodatne usluge */}
                <div className="mt-16">
                    <h3 className="text-2xl font-heading  font-semibold mb-4 text-center md:text-left">
                        Dodatne usluge (Add-ons)
                    </h3>
                    <p className="text-sm text-muted-2 dark:text-white/70 mb-4 text-center md:text-left">
                        Ove usluge se mogu dodati na bilo koji paket i često donose
                        najveću dodatnu vrednost klijentima.
                    </p>

                    <div className="mt-4 rounded-xl border border-gray-200 dark:border-surface-3 bg-white dark:bg-surface-2 overflow-hidden">
                        <div className="grid grid-cols-[2fr_1fr] text-xs sm:text-sm font-semibold bg-lightsurface dark:bg-surface-3 px-4 py-3">
                            <span>Usluga</span>
                            <span className="text-right">Cena</span>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-surface-3">
                            {pricingAddOns.map((item) => (
                                <div
                                    key={item.label}
                                    className="grid grid-cols-[2fr_1fr] px-4 py-3 text-xs sm:text-sm"
                                >
                                    <span>{item.label}</span>
                                    <span className="text-right font-medium">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-muted-2 dark:text-white/60 text-center md:text-left">
                        * Sve cene su okvirne i zavise od konkretnih zahteva, obima
                        sadržaja i rokova izrade.
                    </p>
                </div>
                <div className="mt-14 flex justify-center">
                    <p className="text-sm sm:text-xl text-center text-muted-2 dark:text-white/80 max-w-xl">
                        Popunite formu ispod ili me kontaktirajte putem{" "}
                        <a
                            href="https://www.instagram.com/jovanljusic_asdf/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-brand hover:text-brand/80 underline underline-offset-4"
                        >
                            Instagrama
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
