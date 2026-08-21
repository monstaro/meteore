import { useMemo } from "react";
import bgImage from "../assets/background.jpeg";
import soundIcon from "../assets/sound-off.png";
import logsIcon from "../assets/logs.png";
import signinIcon from "../assets/signin.png";
import PageLayout from "../components/PageLayout";
import FracturedTitle from "../components/FracturedTitle";
import IconGrid from "../components/IconGrid";
import { transmissions } from "../data/transmissions";
import { useSound } from "../context/sound";

export default function Home() {
  const { muted, toggleMute } = useSound();

  const items = useMemo(
    () => [
      {
        id: "sound",
        icon: soundIcon,
        label: muted ? "sound off" : "sound on",
        actionLabel: muted ? "Unmute sound" : "Mute sound",
        pressed: muted,
        onSelect: toggleMute,
      },
      {
        id: "logs",
        icon: logsIcon,
        label: "logs",
        to: transmissions[0].path,
      },
      {
        id: "signin",
        icon: signinIcon,
        label: "sign in",
        to: "/signin",
      },
    ],
    [muted, toggleMute],
  );

  return (
    <PageLayout background={bgImage} showHomeLink={false}>
      <FracturedTitle />
      <IconGrid items={items} />
    </PageLayout>
  );
}
