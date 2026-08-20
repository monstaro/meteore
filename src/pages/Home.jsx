import bgImage from "../assets/background.jpeg";
import PageLayout from "../components/PageLayout";
import FracturedTitle from "../components/FracturedTitle";

export default function Home() {
  return (
    <PageLayout background={bgImage} showHomeLink={false}>
      <FracturedTitle />
    </PageLayout>
  );
}
