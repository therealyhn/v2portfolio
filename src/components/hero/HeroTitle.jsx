
export default function HeroTitle({ name = "Jovan Ljusic" }) {
  return (
    <h1 className="font-heading text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] font-extrabold">
      I’m <span className="text-brand">{name}</span>
    </h1>
  );
}
