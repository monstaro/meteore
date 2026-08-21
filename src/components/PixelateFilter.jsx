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
 * Chromatic-ghost filter for the fractured type treatments. Each consumer
 * passes its own `id` so multiple instances can coexist.
 *
 * Three stages:
 *  1. feTurbulence with a near-zero X frequency and a high Y frequency makes
 *     stacked horizontal bands; feDisplacementMap slides each one sideways, so
 *     the glyph tears like a broadcast losing lock.
 *  2. The torn glyph is copied twice and pushed +/- `split` px apart, then
 *     filtered to pure red and to cyan.
 *  3. Screening the two copies back under the original leaves the core white
 *     and the fringes coloured - misregistration, the way a bad signal or a
 *     misaligned CRT gun looks.
 *
 * `scale`, `split` and `baseFrequency` are all measured in px (frequency is
 * 1/px), so none of them can come from a media query - they have to track the
 * type size or the effect is either invisible or total. Rules of thumb:
 * scale ~= 0.2x the font-size, split ~= 0.06x. A breakpoint that changes
 * font-size therefore needs its own filter instance plus a
 * `filter: url(#other-id)` override in App.css.
 *
 * The explicit filter region matters as well - the default reaches only 10%
 * past the bounding box, which would slice the fringes off.
 */
function PixelateFilter({
  id,
  scale = 10,
  split = 3,
  baseFrequency = "0.01 0.5",
}) {
  return (
    <svg style={hiddenSvg} aria-hidden="true" focusable="false">
      <filter
        id={id}
        x="-15%"
        y="-20%"
        width="130%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves="1"
          seed="6"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="A"
          result="warped"
        />

        <feOffset in="warped" dx={-split} dy="0" result="offsetRed" />
        <feOffset in="warped" dx={split} dy="0" result="offsetCyan" />
        <feColorMatrix
          in="offsetRed"
          type="matrix"
          values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
          result="red"
        />
        <feColorMatrix
          in="offsetCyan"
          type="matrix"
          values="0 0 0 0 0  0 0.35 0 0 0  0 0 1 0 0  0 0 0 1 0"
          result="cyan"
        />
        <feBlend in="red" in2="cyan" mode="screen" result="fringe" />
        <feBlend in="warped" in2="fringe" mode="screen" />
      </filter>
    </svg>
  );
}

export default memo(PixelateFilter);
