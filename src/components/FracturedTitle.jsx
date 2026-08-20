import { memo } from "react";
import PixelateFilter from "./PixelateFilter";

// Split once at module scope instead of on every render.
const LETTERS = Array.from("hellocentral");

function FracturedTitle() {
  return (
    <div className="flicker-wrapper">
      <PixelateFilter id="pixelate" />
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
