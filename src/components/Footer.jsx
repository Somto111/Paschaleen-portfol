const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/paschaleennwachukwu?stkn=eGZkOG4wZDB1Ymxk&utm_source=qr" },
  { label: "Tiktok", href: "https://www.tiktok.com/@themedicalstoryteller?_r=1&_t=ZS-99wYdoQhCGy" },
  { label: "YouTube", href: "https://youtube.com/@themedicalstoryteller-p?si=LwmVcpFrGMyXTcrM" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paschaleen-nwachukwu?utm_source=share_via&utm_content=profile&utm_medium=member_ios"},
];

export default function Footer({
  name = "Paschaleen",
  tagline = "Health educator and medical storyteller, helping girls and women understand their bodies.",
  email = "nwachukwupaschaleen@gmail.com",
  navLinks = NAV_LINKS,
  socialLinks = SOCIAL_LINKS,
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="bg-[#6f0827] px-6 pt-16 pb-8 sm:px-8 md:px-10 md:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 text-center sm:grid-cols-2 sm:text-left md:grid-cols-[1.3fr_1fr_1fr] md:gap-10">
        {/* Brand */}
        <div className="mx-auto max-w-sm sm:col-span-2 sm:mx-0 md:col-span-1">
          <a
            href="#home"
            className="font-[Fraunces] text-2xl font-semibold text-[#F1EAE0]"
          >
            {name}
            <span className="text-[#C97B93]">.</span>
          </a>
          <p className="mt-3 font-[Manrope] text-sm text-[#F1EAE0]/70">
            {tagline}
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#C97B93]">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-[Manrope] text-sm text-[#F1EAE0]/80 transition-colors duration-200 hover:text-[#F1EAE0]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div>
          <p className="font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#C97B93]">
            Connect
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-4 block break-words font-[Manrope] text-sm text-[#F1EAE0]/80 transition-colors duration-200 hover:text-[#F1EAE0]"
          >
            {email}
          </a>
          <ul className="mt-3 flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[Manrope] text-sm text-[#F1EAE0]/80 transition-colors duration-200 hover:text-[#F1EAE0]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-[#F1EAE0]/15 pt-6">
        <p className="text-center font-[Manrope] text-xs text-[#F1EAE0]/50">
          © {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}