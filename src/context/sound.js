import { createContext, useContext } from "react";

/**
 * Global mute state. App owns it (it holds the audio element and the Web Audio
 * graph); anything that wants to toggle or reflect it reads this instead of
 * having it drilled through PageLayout.
 */
export const SoundContext = createContext({
  muted: false,
  toggleMute: () => {},
});

export function useSound() {
  return useContext(SoundContext);
}
