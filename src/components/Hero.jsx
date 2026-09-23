import pas1 from "../assets/pas1.jpg";

export default function Hero({
  backgroundImage = pas1,
  eyebrow = "Health Educator / Menstrual Health Advocate / Medical Laboratory Scientist",
  subtext = "Using health education, storytelling nad community engagement to help girls and women understand their bodies and make informed decisions about their health.",
  primaryCta = { label: "View My Work", href: "#work" },
  secondaryCta = { label: "About Me", href: "#about" },
  stats = [
    { value: "3+", label: "Outreach Programs" },
    { value: "1", label: "Crafts, one vision" },
  ],
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#2E1620] px-6 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#5C1F32_0%,#2E1620_55%)]" />
        )}
        <div className="absolute inset-0 bg-[#2E1620]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="mb-5 max-w-2xl font-[Manrope] text-xs font-semibold uppercase tracking-[0.1em] text-[#C97B93] sm:tracking-[0.2em] sm:text-sm">
          {eyebrow}
        </p>
        <p className="mt-6 max-w-xl font-[Manrope] text-base text-[#F1EAE0]/70 sm:text-lg">
          {subtext}
        </p>

        <div className="mt-9 flex w-full max-w-xs flex-col items-center gap-4 sm:max-w-none sm:w-auto sm:flex-row sm:justify-center">
          <a
            href={primaryCta.href}
            className="w-full rounded-full bg-[#F1EAE0] px-7 py-3 text-center font-[Manrope] text-sm font-semibold text-[#2E2620] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B93] sm:w-auto"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="w-full rounded-full border border-[#F1EAE0]/40 px-7 py-3 text-center font-[Manrope] text-sm font-semibold text-[#F1EAE0] transition-colors duration-200 hover:border-[#F1EAE0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B93] sm:w-auto"
          >
            {secondaryCta.label}
          </a>
        </div>

        {/* Stats — stacked inline on mobile/tablet */}
        {(stats[0] || stats[1]) && (
          <div className="mt-10 flex items-center justify-center gap-10 md:hidden">
            {stats[0] && (
              <div className="text-center">
                <p className="font-[Fraunces] text-2xl font-semibold text-[#F1EAE0]">{stats[0].value}</p>
                <p className="font-[Manrope] text-xs text-[#F1EAE0]/60">{stats[0].label}</p>
              </div>
            )}
            {stats[1] && (
              <div className="text-center">
                <p className="font-[Fraunces] text-2xl font-semibold text-[#F1EAE0]">{stats[1].value}</p>
                <p className="font-[Manrope] text-xs text-[#F1EAE0]/60">{stats[1].label}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats — corners on larger screens */}
      {stats[0] && (
        <div className="absolute bottom-10 left-6 z-10 hidden md:block md:left-10">
          <p className="font-[Fraunces] text-3xl font-semibold text-[#F1EAE0]">{stats[0].value}</p>
          <p className="font-[Manrope] text-xs text-[#F1EAE0]/60">{stats[0].label}</p>
        </div>
      )}
      {stats[1] && (
        <div className="absolute bottom-10 right-6 z-10 hidden text-right md:block md:right-10">
          <p className="font-[Fraunces] text-3xl font-semibold text-[#F1EAE0]">{stats[1].value}</p>
          <p className="font-[Manrope] text-xs text-[#F1EAE0]/60">{stats[1].label}</p>
        </div>
      )}
    </section>
  );
}