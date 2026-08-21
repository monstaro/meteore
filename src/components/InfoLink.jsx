import { memo } from "react";
import infoIcon from "../assets/info.png";

const LINKTREE = "https://linktr.ee/hellocentral";

/**
 * Persistent corner link out to the linktree. Rendered by PageLayout, so it
 * appears on every route. Absolutely positioned, so it costs the hero layout
 * nothing.
 */
function InfoLink() {
  return (
    <a
      className="info-link"
      href={LINKTREE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Links and info (opens in a new tab)"
      title="Links and info"
    >
      <img
        className="nav-icon"
        src={infoIcon}
        alt=""
        width="540"
        height="500"
        decoding="async"
      />
    </a>
  );
}

export default memo(InfoLink);
