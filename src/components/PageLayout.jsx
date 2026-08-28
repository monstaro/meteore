import { useMemo } from "react";
import FracturedMeteore from "./FracturedMeteore";
import HomeLink from "./HomeLink";
import InfoLink from "./InfoLink";

/**
 * Full-bleed hero shell shared by every route: background image, optional
 * dimming overlay, page content, the météore nav, a footer and the corner
 * info link.
 *
 * The footer defaults to the plain home link; pass `footer` to replace it
 * (the transmission pages swap in prev/home/next).
 */
export default function PageLayout({
  background,
  overlay = false,
  showHomeLink = true,
  footer,
  className = "",
  children,
}) {
  const style = useMemo(
    () => ({
      // Darkens the background image everywhere except the live page, which
      // already dims itself via its own `.live-overlay` child.
      backgroundImage: overlay
        ? `url(${background})`
        : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
    }),
    [background, overlay],
  );

  return (
    <div className={className ? `hero ${className}` : "hero"} style={style}>
      {overlay && <div className="live-overlay" />}
      {children}
      <FracturedMeteore />
      {footer ?? (showHomeLink && <HomeLink />)}
      {/* Last, so it paints above the live page's overlay. */}
      <InfoLink />
    </div>
  );
}
