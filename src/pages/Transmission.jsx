import bgImage from "../assets/background.jpeg";
import FracturedMeteore from "../components/FracturedMeteore";

export default function Transmission() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <div /> */}
      <div className="flicker-wrapper transmission-text">
        <p>
          <b>transmission 001 — feb 9 2026</b>
        </p>
        <p>something was received here. we are still decoding.</p>
        <br></br>
        <p>
          <b>transmission 002 — feb 10 2026</b>
        </p>
        <p>
          yesterday, a non-repeating, non-terrestrial 11-minute signal was
          intercepted by the ALMA observatory. the source is currently
          positioned at roughly 22.40 AU. <br></br> <br></br>
          spectral return indicates a high-density metallic core, suggesting a
          massive anomalous body. the doppler profile indicates a significant
          blueshift (−210 km/s relative to the Sun) suggesting a direct
          intercept course with inner solar system. while the object has no
          visual confirmation, the radio signature is certain.
          <br></br>
          <br></br>the object's velocity and trajectory indicate a potential
          deep-impact event timeframe of less than a 365 days. further
          communications will remain on this secure NASA intranet channel.
        </p>
      </div>
      <FracturedMeteore />
    </div>
  );
}
