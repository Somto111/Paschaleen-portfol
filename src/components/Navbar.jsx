import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 pt-6 md:px-10 md:pt-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleClick("Home")}
          className="font-[Fraunces] text-lg font-semibold tracking-tight text-[#F1EAE0] md:text-xl"
        >
          The Medical Storyteller<span className="text-[#C97B93]">.</span>
        </a>

        {/* Pill nav — desktop */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-[#F1EAE0]/10 bg-[#2E1620]/40 px-2 py-2 backdrop-blur-md md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleClick(link.label)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-[Manrope] text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#F1EAE0] text-[#2E2620]"
                    : "text-[#F1EAE0]/80 hover:text-[#F1EAE0]"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2E2620]" aria-hidden="true" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA — desktop */}
        <a
          href="#contact"
          onClick={() => handleClick("Contact")}
          className="hidden rounded-full bg-[#F1EAE0] px-5 py-2.5 font-[Manrope] text-sm font-semibold text-[#2E2620] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B93] md:inline-block"
        >
          Let's Talk
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F1EAE0]/15 text-[#F1EAE0] md:hidden"
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav
          aria-label="Primary mobile"
          className="mx-auto mt-3 flex max-w-6xl flex-col gap-1 rounded-3xl border border-[#F1EAE0]/10 bg-[#2E1620]/95 p-3 backdrop-blur-md md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleClick(link.label)}
              className={`rounded-2xl px-4 py-3 font-[Manrope] text-sm font-medium ${
                active === link.label
                  ? "bg-[#F1EAE0] text-[#2E2620]"
                  : "text-[#F1EAE0]/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleClick("Contact")}
            className="mt-1 rounded-2xl bg-[#C97B93] px-4 py-3 text-center font-[Manrope] text-sm font-semibold text-[#2E2620]"
          >
            Let's Talk
          </a>
        </nav>
      )}
    </header>
  );
}