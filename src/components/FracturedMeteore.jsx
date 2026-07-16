import { Link } from "react-router-dom";

const title = "éore";

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
          style={{
            color: "inherit",
            textDecoration: "none",
            transform: "rotate(-10deg)",
          }}
        >
          m
        </Link>
        <Link
          to="/transmission2"
          style={{
            color: "inherit",
            textDecoration: "none",
            transform: "rotate(10deg)",
          }}
        >
          é
        </Link>
        <Link
          to="/transmission3"
          style={{
            color: "inherit",
            textDecoration: "none",
            transform: "rotate(2deg)",
          }}
        >
          t
        </Link>
        {title
          .slice(0)
          .split("")
          .map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
      </h2>
    </div>
  );
}
