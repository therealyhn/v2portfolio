export const pricingPlans = [
    {
      name: "Basic",
      color: "border-brand-200 bg-white dark:bg-surface-2",
      priceRange: "150€ – 300€",
      badge: "Za male firme, salone, osnovne prezentacije",
      description:
        "Idealno za male firme, barbere, kafiće i početnike kojima je potreban moderan, jednostavan sajt.",
      features: [
        "1–3 stranice (Home, O nama, Kontakt)",
        "Moderan responsive dizajn (telefon, tablet, desktop)",
        "Brza izrada",
        "Kontakt forma ili WhatsApp dugme",
        "Hosting i domen obezbeđuje klijent",
        "1 mesec besplatnog održavanja nakon puštanja sajta",
      ],
    },
    {
      name: "Standard",
      color: "border-brand-700 bg-brand-700 text-white shadow-glow",
      priceRange: "350€ – 600€",
      badge: "Najbolji odnos cene i kvaliteta",
      popular: true,
      description:
        "Profesionalan poslovni web sa više stranica, animacijama i boljim korisničkim iskustvom.",
      features: [
        "Sve iz BASIC plana",
        "4–7 stranica (Home, Usluge, Portfolio, Galerija, Booking, Kontakt…)",
        "Animacije (Animate.css / custom micro interactions)",
        "Napredna galerija ili slider (Swiper)",
        "Booking forma sa validacijom",
        "Google Maps integracija",
        "Osnovna optimizacija performansi (lazy-loading slika, kompresija)",
        "Integracija sa email servisima (Web3Forms, FormSubmit, Nodemailer…)",
        "6 meseci besplatnog održavanja nakon puštanja sajta",
      ],
    },
    {
      name: "Premium",
      color: "border-brand-300 bg-white dark:bg-surface-2",
      priceRange: "700€ – 1200€",
      badge: "Za ozbiljne i premium brendove",
      description:
        "Potpuno custom rešenje sa CMS-om, višestranim jezikom i naprednim funkcionalnostima.",
      features: [
        "Sve iz STANDARD plana",
        "CMS (Admin Dashboard) – klijent sam menja sadržaj sajta",
        "Napredan dizajn i custom animacije",
        "Napredna SEO optimizacija",
        "Napredni booking sa slanjem maila + kalkulacija cena",
        "Upozorenja za slab internet, loading screen, skeleton loaderi",
        "12 mesec besplatnog održavanja nakon puštanja sajta",
      ],
    },
  ];
  
  export const pricingAddOns = [
    { label: "Održavanje sajta (mesečno)", price: "20€ – 70€" },
    { label: "Promena sadržaja (po satu)", price: "10€ – 20€" },
    { label: "Novi dizajn stranice (1 strana)", price: "30€ – 80€" },
    { label: "Galerija + modal carousel", price: "50€ – 120€" },
    { label: "Booking sistem sa logikom", price: "50€ – 150€" },
  ];
  