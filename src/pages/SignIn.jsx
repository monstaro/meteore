import bgImage from "../assets/background.jpeg";
import PageLayout from "../components/PageLayout";

/**
 * PLACEHOLDER. Exists so the sign-in icon has somewhere to land instead of
 * rendering a blank route. Replace wholesale with the real login page.
 */
export default function SignIn() {
  return (
    <PageLayout background={bgImage} className="hero--transmission">
      <div className="transmission-text">
        <p>
          <b>authentication</b>
        </p>
        <p>terminal locked. credentials have not been issued.</p>
      </div>
    </PageLayout>
  );
}
