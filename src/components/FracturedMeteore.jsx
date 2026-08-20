import { memo } from "react";
import { Link } from "react-router-dom";
import PixelateFilter from "./PixelateFilter";

// Built once at module scope so the style objects are not re-created per render.
const LINKS = [
  { to: "/transmission", letter: "m", rotate: -10, label: "transmission 001" },
  { to: "/transmission2", letter: "é", rotate: 10, label: "transmission 002" },
  { to: "/transmission3", letter: "t", rotate: 2, label: "transmission 003" },
].map((link) => ({
  ...link,
  style: { transform: `rotate(${link.rotate}deg)` },
}));

const REST = Array.from("éore");

function FracturedMeteore() {
  return (
    <div className="meteore-wrapper">
      <PixelateFilter id="pixelate2" />
      <h2 className="meteore">
        {LINKS.map(({ to, letter, style, label }) => (
          <Link key={to} to={to} style={style} aria-label={label}>
            {letter}
          </Link>
        ))}
        {REST.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </h2>
    </div>
  );
}

export default memo(FracturedMeteore);
