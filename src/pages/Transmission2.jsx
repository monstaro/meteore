import bgImage from "../assets/background.jpeg";
import FracturedMeteore from "../components/FracturedMeteore";

export default function Transmission() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <div /> */}
      <div className="flicker-wrapper transmission-text">
        <p>transmission 002 — feb 2029</p>
        <p>something was received here. we are still decoding.</p>
      </div>
      <FracturedMeteore />
    </div>
  );
}
