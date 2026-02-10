const title = "hellocentral";

export default function FracturedTitle() {
  return (
    <div className="flicker-wrapper">
      <svg style={{ display: "none" }}>
        <filter id="pixelate">
          <feTurbulence baseFrequency="0.9" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>
      <h1 className="fractured-title">
        {title.split("").map((letter, i) => (
          <span key={i} className={`letter-${i}`}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
