import { Link } from "react-router-dom";

const title = "méteoré";

export default function FracturedMeteore() {
  return (
    <div className="meteore-wrapper">
      <svg style={{ display: "none" }}>
        <filter id="pixelate2">
          <feTurbulence baseFrequency="0.9" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>
      <h2 className="meteore">
        <Link
          to="/transmission"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          m
        </Link>
        {title
          .slice(1)
          .split("")
          .map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
      </h2>
    </div>
  );
}
