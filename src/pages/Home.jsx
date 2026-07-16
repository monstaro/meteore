import bgImage from "../assets/background.jpeg";
import FracturedTitle from "../components/FracturedTitle";
import FracturedMeteore from "../components/FracturedMeteore";
import home from "../assets/home.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <FracturedTitle />
      <FracturedMeteore />
    </div>
  );
}
