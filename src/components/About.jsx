import pas6 from "../assets/pas6.jpg";

export default function About({
  photo = pas6,
  greeting = "Hello, I'm Paschaleen,",
  roleLines = ["Medical", "Storyteller"],
  location = "based in Nigeria.",
  cta = { label: "My Story", href: "#journey" },
}) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F1EAE0] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Text */}
        <div>
          <p className="font-[Manrope] text-base font-medium text-[#5C1F32] sm:text-lg">
            {greeting}
          </p>
          <h2 className="mt-2 font-[Fraunces] text-5xl font-bold leading-[1.05] text-[#2E2620] sm:text-6xl md:text-7xl">
            {roleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 font-[Manrope] text-base font-medium text-[#2E2620]/70 sm:text-lg">
            {location}
          </p>

          <a
            href={cta.href}
            className="mt-8 inline-block rounded-md border-2 border-[#2E2620] bg-[#6f0827] px-6 py-3 font-[Manrope] text-sm font-semibold text-white shadow-[3px_3px_0_#2E2620] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#2E2620] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C1F32]"
          >
            {cta.label}
          </a>
        </div>

        {/* Photo with decorative accents */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          {/* Plus marks */}
          <div className="absolute -top-2 right-6 z-10 grid grid-cols-2 gap-1.5 font-[Manrope] text-2xl font-bold leading-none text-[#2E2620] sm:right-10">
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>

          {/* Diagonal strokes */}
          <div className="absolute bottom-10 -left-2 z-10 flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-10 w-0.5 rotate-[20deg] bg-[#2E2620]"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Photo frame */}
          <div className="h-full w-full overflow-hidden rounded-[45%] border-2 border-[#2E2620]/80 shadow-[0_0_0_10px_#F1EAE0,0_0_0_11px_#2E2620/20]">
            {photo ? (
              <img
                src={photo}
                alt="Paschaleen"
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(circle_at_35%_25%,#D9D2C5_0%,#C9A6A0_60%,#5C1F32_100%)]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}