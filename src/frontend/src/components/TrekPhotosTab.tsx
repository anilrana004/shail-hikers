import type { TrekData } from "@/types";
import { useState } from "react";

interface Props {
  trek: TrekData;
}

const PHOTO_FILTERS = [
  "All",
  "Trail",
  "Summit",
  "Camps",
  "Flora",
  "Sunrise",
  "Group",
  "Winter",
  "Monsoon",
];
const CATEGORIES = [
  "Trail",
  "Summit",
  "Camps",
  "Flora",
  "Sunrise",
  "Group",
  "Trail",
  "Winter",
  "Monsoon",
];
const PHOTO_META = [
  {
    location: "Summit Ridge",
    altitude: "12,500 ft",
    photographer: "Deepak Singh",
    date: "Jan 2025",
  },
  {
    location: "Base Camp",
    altitude: "8,200 ft",
    photographer: "Rahul Negi",
    date: "Dec 2024",
  },
  {
    location: "Forest Trail",
    altitude: "7,500 ft",
    photographer: "Priya Rawat",
    date: "Feb 2025",
  },
  {
    location: "Campsite 2",
    altitude: "10,200 ft",
    photographer: "Amit Kumar",
    date: "Mar 2025",
  },
  {
    location: "Meadow Top",
    altitude: "11,800 ft",
    photographer: "Deepak Singh",
    date: "Apr 2025",
  },
  {
    location: "View Point",
    altitude: "12,000 ft",
    photographer: "Rahul Negi",
    date: "Jan 2025",
  },
];

export default function TrekPhotosTab({ trek }: Props) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = trek.galleryImages.slice(0, 9);
  const filtered =
    filter === "All"
      ? photos
      : photos.filter((_, i) => CATEGORIES[i % CATEGORIES.length] === filter);

  return (
    <div className="py-8 space-y-8">
      <section>
        <h2 className="font-display text-2xl mb-4" style={{ color: "#FAD4D8" }}>
          Photo of the Month
        </h2>
        <div className="relative rounded-2xl overflow-hidden h-64">
          <img
            src={photos[0]}
            alt="Featured trek scenery"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{
              background:
                "linear-gradient(to top, rgba(26,14,16,0.9), transparent)",
            }}
          >
            <div className="text-xs mb-1" style={{ color: "#E8A0AA" }}>
              Featured - January 2025
            </div>
            <div className="font-display text-xl" style={{ color: "#FAD4D8" }}>
              First light on the {trek.name} summit ridge
            </div>
            <div className="text-xs mt-1" style={{ color: "#E8A0AA" }}>
              {PHOTO_META[0].location} / {PHOTO_META[0].altitude} / by{" "}
              {PHOTO_META[0].photographer}
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {PHOTO_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className="text-xs px-4 py-2 rounded-full transition-colors"
            style={{
              background: filter === f ? "#B5525E" : "rgba(45,27,30,0.8)",
              color: "#FAD4D8",
              border: `1px solid ${filter === f ? "#B5525E" : "#E8A0AA33"}`,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <button
            type="button"
            key={img}
            className="relative cursor-pointer rounded-xl overflow-hidden break-inside-avoid w-full"
            onClick={() => setLightbox(i)}
            aria-label={`View photo ${i + 1}`}
          >
            <img
              src={img}
              alt={`${trek.name} - ${CATEGORIES[i % CATEGORIES.length]}`}
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
              style={{ minHeight: i % 3 === 0 ? "250px" : "180px" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-2"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,14,16,0.8), transparent)",
              }}
            >
              <div className="text-xs" style={{ color: "#E8A0AA" }}>
                {CATEGORIES[i % CATEGORIES.length]}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="px-5 py-2.5 rounded-xl text-sm border"
        style={{ borderColor: "#E8A0AA44", color: "#E8A0AA" }}
      >
        Submit Your Photo
      </button>

      <section>
        <h2 className="font-display text-2xl mb-4" style={{ color: "#FAD4D8" }}>
          360 Degree Panorama
        </h2>
        <div
          className="rounded-2xl flex items-center justify-center h-48 border"
          style={{ background: "rgba(45,27,30,0.8)", borderColor: "#E8A0AA33" }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">&#127760;</div>
            <div className="font-semibold" style={{ color: "#FAD4D8" }}>
              {trek.name} Summit - 360 Degree View
            </div>
            <div className="text-sm mt-1" style={{ color: "#E8A0AA" }}>
              Interactive panorama viewer
            </div>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center m-0 w-full h-full max-w-none max-h-none border-0 p-0"
          style={{ background: "rgba(26,14,16,0.95)" }}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightbox(null);
          }}
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "#B5525E", color: "#FAD4D8" }}
            >
              x
            </button>
            <button
              type="button"
              onClick={() =>
                setLightbox((l) =>
                  l !== null && l > 0 ? l - 1 : filtered.length - 1,
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(45,27,30,0.8)", color: "#FAD4D8" }}
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={() =>
                setLightbox((l) =>
                  l !== null && l < filtered.length - 1 ? l + 1 : 0,
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(45,27,30,0.8)", color: "#FAD4D8" }}
            >
              &#8250;
            </button>
            <img
              src={filtered[lightbox]}
              alt="Lightbox"
              className="w-full rounded-2xl"
            />
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm" style={{ color: "#E8A0AA" }}>
                {PHOTO_META[lightbox % PHOTO_META.length].location} /{" "}
                {PHOTO_META[lightbox % PHOTO_META.length].altitude}
              </div>
              <div className="text-sm" style={{ color: "#E8A0AA" }}>
                by {PHOTO_META[lightbox % PHOTO_META.length].photographer}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
