import bgImage from "../assets/background.jpeg";
import PageLayout from "./PageLayout";
import TransmissionNav from "./TransmissionNav";
import SoundToggle from "./SoundToggle";
import useScrollProgress from "../hooks/useScrollProgress";

/**
 * Renders one transmission entry from src/data/transmissions.js.
 * Paragraph spacing comes from `.transmission-text p + p` in App.css.
 */
export default function TransmissionPage({ heading, body, images }) {
  const textRef = useScrollProgress();

  return (
    <PageLayout
      background={bgImage}
      className="hero--transmission"
      footer={<TransmissionNav />}
    >
      <SoundToggle />
      {/* The flicker lives on the paragraphs, not on this box: an animated
          opacity on the container applies to its whole subtree, which would
          take the plate imaging with it. */}
      <div className="transmission-text" ref={textRef}>
        <p>
          <b>{heading}</b>
        </p>
        {body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {images?.map((image) => (
          <img
            key={image.src}
            className="transmission-image"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </PageLayout>
  );
}
