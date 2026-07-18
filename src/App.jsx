import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Transmission from "./pages/Transmission";
import Transmission2 from "./pages/Transmission2";
import Transmission3 from "./pages/Transmission3";
import Live from "./pages/Live";

import "./App.css";
import shortwave from "./assets/shortwave.mp3";
import { useEffect, useRef } from "react";

export default function App() {
  console.log("[SYS] App||ic4tion ini████ized...");
  const audioRef = useRef(null);
  const location = useLocation();

  // start audio on first user interaction
  useEffect(() => {
    const play = () => {
      // don't start if we're on the live page
      if (location.pathname === "/live") return;
      audioRef.current?.play();
      window.removeEventListener("click", play);
      window.removeEventListener("touchstart", play);
    };
    window.addEventListener("click", play);
    window.addEventListener("touchstart", play);
    return () => {
      window.removeEventListener("click", play);
      window.removeEventListener("touchstart", play);
    };
  }, [location.pathname]);

  // web audio filter setup
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const ctx = new AudioContext();

    ctx.resume().then(() => {
      const source = ctx.createMediaElementSource(audio);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 400;

      source.connect(filter);
      filter.connect(ctx.destination);
    });
  }, []);

  // pause on live page, resume elsewhere
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (location.pathname === "/live") {
      audio.pause();
    } else {
      // only resume if it was already started (avoids autoplay errors)
      if (!audio.paused) return;
      audio.play().catch(() => {});
    }
  }, [location.pathname]);

  return (
    <>
      <audio ref={audioRef} autoPlay loop style={{ display: "none" }}>
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
