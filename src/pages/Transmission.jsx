import { useRef, useEffect } from "react";
import bgImage from "../assets/background.jpeg";
import FracturedMeteore from "../components/FracturedMeteore";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

export default function Transmission() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const handleScroll = () => {
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      el.style.setProperty("--scroll-pct", pct);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <FracturedTitle /> */}

      <div className="flicker-wrapper transmission-text" ref={textRef}>
        <p>
          <b>entry 001 — feb 9 2026</b>
        </p>
        <p>something was received here. we are still decoding.</p>
        <br />

        <p></p>
        <br />
      </div>
      <FracturedMeteore />
      <Link to="/" className="logo-link">
        <img src={home} alt="home" className="logo-icon" />
      </Link>
    </div>
  );
}
