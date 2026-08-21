import { memo } from "react";
import PixelateFilter from "./PixelateFilter";

// The first three letters keep their hand-tuned tilt from when they were the
// transmission links; navigation now lives in the icon grid and the
// transmission footer, so these are plain type.
const ROTATIONS = [-10, 10, 2];

// Built once at module scope so the style objects are not re-created per render.
const LETTERS = Array.from("météore").map((letter, i) => ({
  letter,
  style:
    ROTATIONS[i] === undefined
      ? undefined
      : { transform: `rotate(${ROTATIONS[i]}deg)` },
}));

function FracturedMeteore() {
  return (
    <div className="meteore-wrapper">
      {/* 2.2rem type: scale ~0.2x and split ~0.06x of the font-size keeps the
          ghosting proportional to the 3.2rem title's. */}
      <PixelateFilter
        id="pixelate2"
        scale={7}
        split={2}
        baseFrequency="0.015 0.7"
      />
      <h2 className="meteore">
        {LETTERS.map(({ letter, style }, i) => (
          <span key={i} style={style}>
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default memo(FracturedMeteore);
