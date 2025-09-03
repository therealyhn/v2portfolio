export default function HeroTitle({ name = "Jovan Ljusic" }) {
  return (
    <h1
      className="font-heading text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] 
                 leading-[0.95] font-extrabold
                 animate__animated animate__fadeInUp animate__delay-1s"
    >
      I’m{" "}
      <span
        className="text-brand drop-shadow-[0_2px_2px_rgba(0,0,0,1)] sm:drop-shadow-none"
      >
        {name}
      </span>
    </h1>
  );
}
