import { useCallback, useState } from "react";
import liveBg from "../assets/live-bg.jpg";
import PageLayout from "../components/PageLayout";

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
    venue: "Oktoberfest Denverg",
    city: "Denver, CO",
    time: "TBA",
    detail: "Oktoberfest",
  },
  {
    date: "October 2",
    venue: "Album Release Show @ Globe Hall",
    city: "Denver, CO",
    time: "7:00 PM",
    detail: "Album Release Show @ Globe Hall ☄️",
  },
  {
    date: "October 3",
    venue: "Porchfest Denver",
    city: "Denver, CO",
    time: "TBA",
    detail: "[ Denver Porchfest ]",
    detailUrl: "https://www.denverporchfest.com/",
  },
];

export default function Live() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = useCallback((i) => {
    setOpenIndex((current) => (current === i ? null : i));
  }, []);

  return (
    <PageLayout background={liveBg} overlay>
      <div className="live-content">
        <h1 className="live-heading">UPCOMING SHOWS</h1>

        <ul className="show-list">
          {shows.map((show, i) => {
            const isOpen = openIndex === i;
            const panelId = `show-details-${i}`;

            return (
              <li key={`${show.date}-${show.venue}`} className="show-item">
                <button
                  type="button"
                  className="show-row"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="show-date">{show.date}</span>
                  <span className="show-dots" />
                  <span className="show-venue">{show.venue}</span>
                  <span className={`show-toggle ${isOpen ? "open" : ""}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="show-details" id={panelId}>
                    <p>
                      {show.city} · {show.time}
                    </p>
                    <p>
                      {show.detailUrl ? (
                        <a
                          href={show.detailUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {show.detail}
                        </a>
                      ) : (
                        show.detail
                      )}
                    </p>
                    {show.ticketUrl && (
                      <a href={show.ticketUrl} target="_blank" rel="noreferrer">
                        [ tickets ]
                      </a>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </PageLayout>
  );
}
