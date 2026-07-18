import { useState } from "react";
import liveBg from "../assets/live-bg.jpg";
import FracturedMeteore from "../components/FracturedMeteore";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

const shows = [
  {
    date: "July 26",
    venue: "Bluecifers First Rodeo",
    city: "Denver, CO (Baker neighborhood)",
    time: "3:00 PM",
    detail: "FREE House show. Address TBA (Check instagram for details).",
  },
  {
    date: "Aug 2",
    venue: "Oskar Blues Brewery",
    city: "Denver, CO",
    time: "TBA (Evening)",
    detail:
      "Supporting Geena Fontanella, Turning Jane, and Blue Mesa. Message us on Instagram for tickets.",
  },
  {
    date: "Aug 15",
    venue: "Meow Wolf Denver",
    city: "Denver, CO",
    time: "TBA (Evening)",
    detail:
      "Supporting HOLDFAST. for their album release show. Message us on Instagram for tickets.",
  },
  {
    date: "September 12",
    venue: "Joyride Brewing",
    city: "Denver, CO",
    time: "1:00 PM",
    detail: "Oktoberfest celebration.",
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
