import bgImage from "../assets/background.jpeg";
import FracturedMeteore from "../components/FracturedMeteore";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

export default function Transmission3() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <div /> */}
      <div className="flicker-wrapper transmission-text">
        <p>
          <b>entry 003 — july 14 2026</b>
        </p>
        <br></br>
        <p>
          after 6 months of intense observation, our team has been able to
          confirm the object - dubbed DRACONIS 9 or D9 - is on a clear
          trajectory towards earth. efforts are underway to divert its path
          using an ion beam or through surface ablation however the sheer size
          of D9 has cast serious doubts on our ability to make an impact. every
          recalculation shifts the window by hours, sometimes days, and we
          estimate we only have months left
        </p>
        <br></br>
        <p>
          some are more hopeful than others but it's fair to say it's a coin
          toss. there is certainly more dread than hope in the air now. many of
          us cannot leave this place since we know too much. ironically, there
          is a lot we dont know. we do not fully understand what d9 is made of.
          spectral analysis return inconclusive results and it is pulsating with
          a multi-colored glow on infrared radar.
        </p>
        <br></br>
        let the record show we estimate impact sometime during EARLY OCTOBER
        2026---3 months away during draconoid meteor shower. i do not know if
        people will know what's coming by then but we are instructed to keep all
        intelligence under wraps.
      </div>
      <FracturedMeteore />
      <Link to="/" className="logo-link">
        <img src={home} alt="home" className="logo-icon" />
      </Link>
    </div>
  );
}
