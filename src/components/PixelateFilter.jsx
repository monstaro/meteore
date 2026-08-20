import { memo } from "react";

// Rendered off-screen rather than with `display: none`, which some browsers
// (notably older Safari) treat as a reason to skip resolving `filter: url(#id)`.
const hiddenSvg = {
  position: "absolute",
  width: 0,
  height: 0,
  overflow: "hidden",
  pointerEvents: "none",
};

/**
 * Shared SVG displacement filter used by the fractured type treatments.
 * Each consumer passes its own `id` so multiple instances can coexist.
 */
function PixelateFilter({ id }) {
  return (
    <svg style={hiddenSvg} aria-hidden="true" focusable="false">
      <filter id={id}>
        <feTurbulence baseFrequency="0.9" numOctaves="1" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
    </svg>
  );
}

export default memo(PixelateFilter);
