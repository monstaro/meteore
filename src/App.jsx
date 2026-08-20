import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Transmission from "./pages/Transmission";
import Transmission2 from "./pages/Transmission2";
import Transmission3 from "./pages/Transmission3";
import Live from "./pages/Live";

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
  const location = useLocation();
  const isSilentPath = SILENT_PATHS.has(location.pathname);

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

      source.connect(filter);
      filter.connect(ctx.destination);
      ctxRef.current = ctx;
    } catch {
      // No Web Audio available (or the element is already routed) - the audio
      // element still plays on its own, just without the filter.
    }
  }, []);

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
    <>
      <audio ref={audioRef} autoPlay loop preload="auto" style={hiddenAudio}>
        <source src={shortwave} type="audio/mpeg" />
      </audio>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/transmission2" element={<Transmission2 />} />
        <Route path="/transmission3" element={<Transmission3 />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </>
  );
}
