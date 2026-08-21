import { Link, useLocation } from "react-router-dom";
import arrow from "../assets/arrow.png";
import homeIcon from "../assets/home2.png";
import { transmissions } from "../data/transmissions";

/**
 * Footer nav for the transmission pages: previous entry, home, next entry.
 *
 * arrow.png points left, so the "next" copy is mirrored in CSS rather than
 * shipping a second asset. At the ends of the run the arrow stays in place but
 * dimmed and inert, which keeps the home icon optically centred.
 */
export default function TransmissionNav() {
  const { pathname } = useLocation();
  const index = transmissions.findIndex((entry) => entry.path === pathname);

  const prev = index > 0 ? transmissions[index - 1] : null;
  const next =
    index >= 0 && index < transmissions.length - 1
      ? transmissions[index + 1]
      : null;

  const step = (entry, direction, label) => {
    const art = (
      <img
        className={`nav-icon nav-icon--${direction}`}
        src={arrow}
        alt=""
        width="540"
        height="500"
        decoding="async"
      />
    );

    return entry ? (
      <Link
        to={entry.path}
        className="nav-step"
        aria-label={`${label}: ${entry.heading}`}
      >
        {art}
      </Link>
    ) : (
      <span className="nav-step is-spent" aria-hidden="true">
        {art}
      </span>
    );
  };

  return (
    <nav className="transmission-nav" aria-label="Transmissions">
      {step(prev, "prev", "Previous transmission")}
      <Link to="/" className="nav-step" aria-label="Home">
        <img
          className="nav-icon nav-icon--home"
          src={homeIcon}
          alt=""
          width="540"
          height="500"
          decoding="async"
        />
      </Link>
      {step(next, "next", "Next transmission")}
    </nav>
  );
}
