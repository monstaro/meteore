import bgImage from "../assets/background.jpeg";
import PageLayout from "./PageLayout";
import useScrollProgress from "../hooks/useScrollProgress";

/**
 * Shared chrome for every transmission entry. Prose stays in the individual
 * route files (it is content, not data) and is passed through as children.
 */
export default function TransmissionPage({ heading, children }) {
  const textRef = useScrollProgress();

  return (
    <PageLayout background={bgImage}>
      <div className="flicker-wrapper transmission-text" ref={textRef}>
        <p>
          <b>{heading}</b>
        </p>
        {children}
      </div>
    </PageLayout>
  );
}
