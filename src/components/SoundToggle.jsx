import soundIcon from "../assets/sound-off.png";
import { useSound } from "../context/sound";

/**
 * Corner mute toggle. Absolutely positioned, so it can be dropped in as a
 * child of any hero without disturbing the flex layout.
 */
export default function SoundToggle() {
  const { muted, toggleMute } = useSound();

  return (
    <button
      type="button"
      className="sound-toggle"
      onClick={toggleMute}
      aria-pressed={muted}
      aria-label={muted ? "Unmute sound" : "Mute sound"}
    >
      <img
        className="nav-icon"
        src={soundIcon}
        alt=""
        width="540"
        height="500"
        decoding="async"
      />
    </button>
  );
}
