import { memo } from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

function HomeLink() {
  return (
    <Link to="/" className="logo-link">
      <img
        src={home}
        alt="home"
        className="logo-icon"
        width="50"
        height="50"
        decoding="async"
      />
    </Link>
  );
}

export default memo(HomeLink);
