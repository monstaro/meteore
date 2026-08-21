import { useMemo } from "react";
import FracturedMeteore from "./FracturedMeteore";
import HomeLink from "./HomeLink";

/**
 * Full-bleed hero shell shared by every route: background image, optional
 * dimming overlay, page content, the météore nav and a footer.
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
    () => ({ backgroundImage: `url(${background})` }),
    [background],
  );

  return (
    <div className={className ? `hero ${className}` : "hero"} style={style}>
      {overlay && <div className="live-overlay" />}
      {children}
      <FracturedMeteore />
      {footer ?? (showHomeLink && <HomeLink />)}
    </div>
  );
}
