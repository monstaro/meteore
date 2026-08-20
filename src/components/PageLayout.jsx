import { useMemo } from "react";
import FracturedMeteore from "./FracturedMeteore";
import HomeLink from "./HomeLink";

/**
 * Full-bleed hero shell shared by every route: background image, optional
 * dimming overlay, page content, the météore nav and the home link.
 */
export default function PageLayout({
  background,
  overlay = false,
  showHomeLink = true,
  children,
}) {
  const style = useMemo(
    () => ({ backgroundImage: `url(${background})` }),
    [background],
  );

  return (
    <div className="hero" style={style}>
      {overlay && <div className="live-overlay" />}
      {children}
      <FracturedMeteore />
      {showHomeLink && <HomeLink />}
    </div>
  );
}
