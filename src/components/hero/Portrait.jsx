import person from "../../assets/hero.png";

export default function Portrait() {
    return (
        <img
            src={person}
            alt="Portrait"
            className="
        absolute bottom-[-100px] md:bottom-0
        left-1/2 -translate-x-1/2 w-[300px] sm:w-[420px] lg:w-[520px]
        max-w-full select-none
        lg:left-1 lg:-translate-x-1/2
        animate__animated animate__fadeIn animate__delay-1s
      "
            loading="lazy"
        />
    );
}
