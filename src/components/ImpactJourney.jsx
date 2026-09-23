import { useState } from "react";
import pas1 from "../assets/pas1.jpg";
import pas3 from "../assets/pas3.jpg";
import out1 from "../assets/out1.jpg";
import out2 from "../assets/out2.jpg";
import out3 from "../assets/out3.jpg";
import out4 from "../assets/out4.jpg";
import out5 from "../assets/out5.jpg";
import out6 from "../assets/out6.jpg";
import out7 from "../assets/out7.jpg";
import out8 from "../assets/out8.jpg";

const DEFAULT_JOURNEY = [
  {
    year: "2023",
    title: "Campus Period Poverty Drive",
    description:
      "Placeholder — describe the outreach: where it took place, who it reached, and what changed for them.",
    images: [out7, out8],
  },
  {
    year: "2024",
    title: "Community Health Talk Series",
    description:
      "Placeholder — describe the outreach: where it took place, who it reached, and what changed for them.",
    image: pas3,
  },
  {
    year: "2025",
    title: "School Menstrual Health Workshops",
    description:
      "Placeholder — describe the outreach: where it took place, who it reached, and what changed for them.",
    // Multiple photos for this year: add up to 6, shown as a grid instead of one image.
    images: [out1, out2, out3, out4, out5, out6],
    videoUrl: "https://www.instagram.com/reel/DVoSYyZCjGi/?stkn=c3UzdWkwbjN0eHBk",
  },
  {
    year: "2026",
    title: "Regional Advocacy Campaign",
    description:
      "Placeholder — describe the outreach: where it took place, who it reached, and what changed for them.",
    image: pas1,
    videoUrl: "",
  },
];

function ImageGallery({ images, title, backdropColor, imageOnRight }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative w-full max-w-sm md:w-1/2">
      <div
        className={`absolute -top-6 h-[85%] w-2/3 ${backdropColor} ${
          imageOnRight
            ? "-left-6 rounded-tr-[90px] rounded-br-[90px]"
            : "-right-6 rounded-tl-[90px] rounded-bl-[90px]"
        }`}
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-2 gap-3">
        {images.slice(0, 6).map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group aspect-square overflow-hidden rounded-xl shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B93]"
            aria-label={`Open photo ${i + 1} from ${title}`}
          >
            <img
              src={src}
              alt={`${title} — photo ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close photo"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1EAE0]/10 text-[#F1EAE0] transition-colors hover:bg-[#F1EAE0]/20"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={images[openIndex]}
            alt={`${title} — enlarged photo ${openIndex + 1}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function SingleImage({ image, title, backdropColor, imageOnRight }) {
  return (
    <div className="relative w-full max-w-sm md:w-1/2">
      <div
        className={`absolute -top-6 h-[85%] w-2/3 ${backdropColor} ${
          imageOnRight
            ? "-left-6 rounded-tr-[90px] rounded-br-[90px]"
            : "-right-6 rounded-tl-[90px] rounded-bl-[90px]"
        }`}
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_35%_25%,#D9D2C5_0%,#C9A6A0_60%,#5C1F32_100%)]" />
        )}
      </div>
    </div>
  );
}

function JourneyRow({ item, imageOnRight, isDark }) {
  const headingColor = isDark ? "text-[#F1EAE0]" : "text-[#2E2620]";
  const bodyColor = isDark ? "text-[#F1EAE0]/75" : "text-[#2E2620]/70";
  const ghostColor = isDark ? "text-[#F1EAE0]/15" : "text-[#5C1F32]/25";
  const backdropColor = isDark ? "bg-[#F1EAE0]/20" : "bg-[#6f0827]/70";
  const buttonClasses = isDark
    ? "bg-[#F1EAE0] text-[#6f0827] hover:scale-[1.03]"
    : "bg-[#5C1F32] text-[#F1EAE0] hover:scale-[1.03]";
  const placeholderClasses = isDark
    ? "border-[#F1EAE0]/30 text-[#F1EAE0]/40"
    : "border-[#2E2620]/30 text-[#2E2620]/40";

  const hasGallery = Array.isArray(item.images) && item.images.length > 0;

  return (
    <div className={`w-full ${isDark ? "bg-[#6f0827]" : "bg-[#F1EAE0]"}`}>
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:gap-16 md:px-10 md:py-24 ${
          imageOnRight ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Text */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <span className={`font-[Fraunces] text-6xl font-bold sm:text-7xl ${ghostColor}`}>
            {item.year}
          </span>
          <h3 className={`mt-2 font-[Fraunces] text-3xl font-semibold sm:text-4xl ${headingColor}`}>
            {item.title}
          </h3>
          <p className={`mt-4 font-[Manrope] text-base sm:text-lg ${bodyColor}`}>
            {item.description}
          </p>

          {item.videoUrl ? (
            <a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-[Manrope] text-sm font-semibold transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B93] ${buttonClasses}`}
            >
              Watch the Outreach
            </a>
          ) : (
            <p
              className={`mt-6 hidden rounded-full border border-dashed px-6 py-3 font-[Manrope] text-sm font-medium ${placeholderClasses}`}
            >
              Video link coming soon
            </p>
          )}
        </div>

        {/* Image(s) with decorative backdrop */}
        {hasGallery ? (
          <ImageGallery
            images={item.images}
            title={item.title}
            backdropColor={backdropColor}
            imageOnRight={imageOnRight}
          />
        ) : (
          <SingleImage
            image={item.image}
            title={item.title}
            backdropColor={backdropColor}
            imageOnRight={imageOnRight}
          />
        )}
      </div>
    </div>
  );
}

export default function ImpactJourney({
  heading = "Impact Journey",
  subheading = "A look back at the outreaches organized from 2023 to 2026.",
  journey = DEFAULT_JOURNEY,
}) {
  return (
    <section id="journey">
      <div className="bg-[#F1EAE0] px-6 pt-24 pb-16 text-center md:px-10 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[Fraunces] text-4xl font-bold text-[#2E2620] sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 font-[Manrope] text-base text-[#2E2620]/70 sm:text-lg">
            {subheading}
          </p>
        </div>
      </div>

      {journey.map((item, i) => (
        <JourneyRow
          key={item.year}
          item={item}
          imageOnRight={i % 2 === 0}
          isDark={i % 2 === 1}
        />
      ))}
    </section>
  );
}