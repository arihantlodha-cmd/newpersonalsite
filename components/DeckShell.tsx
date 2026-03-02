"use client";

import { useEffect, useRef, useState } from "react";
import SlideCover from "./SlideCover";
import SlideExperience from "./SlideExperience";
import SlideProjects from "./SlideProjects";
import SlideResearch from "./SlideResearch";
import SlideAwards from "./SlideAwards";
import SlideContact from "./SlideContact";
import MiniTicker from "./MiniTicker";

const SLIDES = 6;

export default function DeckShell() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const onScroll = () => {
      const idx = Math.round(deck.scrollTop / window.innerHeight);
      setCurrent(idx);
    };

    deck.addEventListener("scroll", onScroll, { passive: true });
    return () => deck.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const deck = deckRef.current;
      if (!deck) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        deck.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        deck.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (i: number) => {
    deckRef.current?.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
  };

  const progress = ((current + 1) / SLIDES) * 100;

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Nav dots */}
      <div className="nav-dots">
        {Array.from({ length: SLIDES }).map((_, i) => (
          <div
            key={i}
            className={`nav-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Deck */}
      <div className="deck" ref={deckRef}>
        <SlideCover />
        <SlideExperience />
        <SlideProjects />
        <SlideResearch />
        <SlideAwards />
        <SlideContact />
      </div>

      {/* Mini ticker at bottom */}
      <MiniTicker />
    </>
  );
}
