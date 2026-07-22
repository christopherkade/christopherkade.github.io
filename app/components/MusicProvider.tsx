"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { songs, type Song } from "../data/songs";

type MusicContextValue = {
  isPlaying: boolean;
  currentSong: Song | null;
  toggleMusic: () => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    // Reflect the audio element's actual playback state rather than only
    // the state we set from `toggleMusic` — this keeps the icon in sync
    // when playback is paused/resumed from outside our own button, e.g. a
    // laptop's hardware media keys or a headset's play/pause control (the
    // browser's Media Session integration calls `play()`/`pause()`
    // directly on the active media element, which fires these native
    // events regardless of how playback was toggled).
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const pickRandomSong = useCallback((): Song | null => {
    if (songs.length === 0) return null;
    if (songs.length === 1) return songs[0];

    let candidate: Song;
    do {
      candidate = songs[Math.floor(Math.random() * songs.length)];
    } while (candidate === currentSong);

    return candidate;
  }, [currentSong]);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    const song = pickRandomSong();
    if (!song) {
      console.warn("No songs available in `app/data/songs.ts`.");
      return;
    }

    audio.src = song.src;
    audio
      .play()
      .then(() => {
        setCurrentSong(song);
      })
      .catch((error) => {
        console.error("Unable to play track:", error);
      });
  }, [isPlaying, pickRandomSong]);

  return (
    <MusicContext.Provider value={{ isPlaying, currentSong, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
