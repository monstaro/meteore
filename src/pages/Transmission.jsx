import bgImage from "../assets/background.jpeg";
import FracturedMeteore from "../components/FracturedMeteore";

export default function Transmission() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <div /> */}
      <div className="flicker-wrapper transmission-text">
        <p>
          <b>transmission 001 — feb 9 2029</b>
        </p>
        <p>something was received here. we are still decoding.</p>
        <br></br>
        <p>
          <b>transmission 002 — feb 10 2029</b>
        </p>
        <p>
          yesterday, a periodic, non-terrestrial 11-minute signal was
          intercepted by the ALMA observatory. the source is currently
          positioned at roughly 0.2 light years (12648.17 AU). <br></br>
          while the source remains optically invisible, the radio signature is
          unmistakable. <br></br>
          <br></br>Carrier Frequency: 8.41 GHz (X-band) <br></br>Duration: 11m
          04s non-repeating <br></br>
          Doppler Profile: Significant blueshift (−210 km/s relative to the Sun)
          Direct, non-Keplerian intercept course with inner solar system
          <br></br>
          <br></br>the object's velocity and trajectory indicate a deep-impact
          event timeframe of less than a decade. investigation has been moved to
          a discrete, compartmentalized channel.
        </p>
      </div>
      <FracturedMeteore />
    </div>
  );
}
