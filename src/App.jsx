import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Live from "./pages/Live";
import SignIn from "./pages/SignIn";
import TransmissionPage from "./components/TransmissionPage";
import { transmissions } from "./data/transmissions";
import { SoundContext } from "./context/sound";
import usePageviews from "./hooks/usePageviews";

import "./App.css";
import shortwave from "./assets/shortwave.mp3";

// Safari (and older iOS) still only exposes the prefixed constructor.
const AudioCtx =
  typeof window !== "undefined"
    ? window.AudioContext || window.webkitAudioContext
    : undefined;

const SILENT_PATHS = new Set(["/live"]);

const hiddenAudio = { display: "none" };

export default function App() {
  const audioRef = useRef(null);
  const ctxRef = useRef(null);
  const gainRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const location = useLocation();
  const isSilentPath = SILENT_PATHS.has(location.pathname);

  const toggleMute = useCallback(() => setMuted((m) => !m), []);
  const sound = useMemo(() => ({ muted, toggleMute }), [muted, toggleMute]);

  // Router navigations are invisible to GoatCounter's count.js on their own.
  usePageviews();

  useEffect(() => {
    console.log("[SYS] App||ic4tion ini████ized...");
  }, []);

  // Web Audio lowpass filter. Built once, up front: a context may be created
  // (suspended) without a gesture, and routing the element through the graph
  // before playback avoids an unfiltered blip on the first click.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !AudioCtx || ctxRef.current) return;

    try {
      const ctx = new AudioCtx();
      const source = ctx.createMediaElementSource(audio);
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 400;
      const gain = ctx.createGain();

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      ctxRef.current = ctx;
      gainRef.current = gain;
    } catch {
      // No Web Audio available (or the element is already routed) - the audio
      // element still plays on its own, just without the filter.
    }
  }, []);

  // Mute rides on the graph's gain, not audio.muted: once an element is routed
  // through createMediaElementSource, browsers don't reliably honour the
  // element's own muted/volume. audio.muted is set too, for the fallback path
  // where the graph failed to build. The ramp avoids a click on toggle.
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.muted = muted;

    const gain = gainRef.current;
    const ctx = ctxRef.current;
    if (!gain || !ctx) return;

    const target = muted ? 0 : 1;
    try {
      gain.gain.setTargetAtTime(target, ctx.currentTime, 0.015);
    } catch {
      gain.gain.value = target;
    }
  }, [muted]);

  // Start audio on the first user interaction (mouse or touch).
  useEffect(() => {
    if (isSilentPath) return;

    const stop = () => {
      window.removeEventListener("click", play);
      window.removeEventListener("touchstart", play);
      window.removeEventListener("keydown", play);
    };
    const play = () => {
      ctxRef.current?.resume?.().catch(() => {});
      audioRef.current?.play().catch(() => {});
      stop();
    };

    window.addEventListener("click", play);
    window.addEventListener("touchstart", play, { passive: true });
    window.addEventListener("keydown", play);

    return stop;
  }, [isSilentPath]);

  // Pause on the live page, resume elsewhere.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSilentPath) {
      audio.pause();
    } else if (audio.paused) {
      // Only resume if playback was already unlocked (avoids autoplay errors).
      audio.play().catch(() => {});
    }
  }, [isSilentPath]);

  return (
    <SoundContext.Provider value={sound}>
      <audio ref={audioRef} autoPlay loop preload="auto" style={hiddenAudio}>
        <source src={shortwave} type="audio/mpeg" />
      </audio>
      <Routes>
        <Route path="/" element={<Home />} />
        {transmissions.map((entry) => (
          <Route
            key={entry.path}
            path={entry.path}
            /* key remounts the page per entry, so the scroll box starts at the
               top and the progress rail recalculates on every navigation. */
            element={
              <TransmissionPage
                key={entry.path}
                heading={entry.heading}
                body={entry.body}
                images={entry.images}
              />
            }
          />
        ))}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </SoundContext.Provider>
  );
}
