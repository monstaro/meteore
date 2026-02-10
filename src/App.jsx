import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transmission from "./pages/transmission";
import "./App.css";
import shortwave from "./assets/shortwave.mp3";
import { useEffect, useRef } from "react";

export default function App() {
  console.log("[SYS] App||ic4tion ini████ized...");
  const audioRef = useRef(null);
  useEffect(() => {
    const play = () => {
      audioRef.current?.play();
      window.removeEventListener("click", play);
    };
    window.addEventListener("click", play);
    return () => window.removeEventListener("click", play);
  }, []);
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
  return (
    <>
      <audio ref={audioRef} autoPlay loop style={{ display: "none" }}>
        <source src={shortwave} type="audio/mpeg" />
      </audio>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transmission" element={<Transmission />} />
      </Routes>
    </>
  );
}
