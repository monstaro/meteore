import { memo } from "react";
import PixelateFilter from "./PixelateFilter";

// Split once at module scope instead of on every render.
const LETTERS = Array.from("hellocentral");

function FracturedTitle() {
  return (
    <div className="flicker-wrapper">
      {/* 3.2rem type - the filter defaults are tuned for it. */}
      <PixelateFilter id="pixelate" />
      {/* The title drops to ~1rem below 768px, where the desktop displacement
          is wider than the glyphs themselves. App.css swaps to this one there. */}
      <PixelateFilter
        id="pixelate-sm"
        scale={3}
        split={1}
        baseFrequency="0.02 1"
      />
      <h1 className="fractured-title">
        {LETTERS.map((letter, i) => (
          <span key={i} className={`letter-${i}`}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default memo(FracturedTitle);
