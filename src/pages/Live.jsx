import { useState } from "react";
import liveBg from "../assets/live-bg.jpg";
import FracturedMeteore from "../components/FracturedMeteore";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

const shows = [
  {
    date: "September 12",
    venue: "Joyride Brewing",
    city: "Denver, CO",
    time: "1:00 PM",
    detail: "Oktoberfest",
  },
  {
    date: "September 26",
    venue: "NEAR ROCKIES STADIUM (TBA)",
    city: "Denver, CO",
    time: "TBA",
    detail: "Oktoberfest",
  },
  {
    date: "October 2",
    venue: "Globe Hall",
    city: "Denver, CO",
    time: "7:00 PM",
    detail: "ALBUM RELEASE SHOW ☄️",
  },
];

export default function Live() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${liveBg})` }}>
      <div className="live-overlay" />

      <div className="live-content">
        <ul className="show-list">
          {shows.map((show, i) => (
            <li key={i} className="show-item">
              <button className="show-row" onClick={() => toggle(i)}>
                <span className="show-date">{show.date}</span>
                <span className="show-dots" />
                <span className="show-venue">{show.venue}</span>
                <span
                  className={`show-toggle ${openIndex === i ? "open" : ""}`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="show-details">
                  <p>
                    {show.city} · {show.time}
                  </p>
                  <p>{show.detail}</p>
                  {show.ticketUrl && (
                    <a href={show.ticketUrl} target="_blank" rel="noreferrer">
                      [ tickets ]
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <FracturedMeteore />
      <Link to="/" className="logo-link">
        <img src={home} alt="home" className="logo-icon" />
      </Link>
    </div>
  );
}
