export type Song = {
  title: string;
  artist: string;
  /** Path to the MP3 file, e.g. "/audio/track.mp3" (served from `public/audio/`). */
  src: string;
  /** Path to the album cover image, e.g. "/images/covers/track.jpg" (served from `public/images/covers/`). */
  cover: string;
};

// Add your songs here — drop MP3 files in `public/audio/` and cover art in
// `public/images/covers/`, then reference them below. A random song from
// this list is picked each time the music is started.
export const songs: Song[] = [
  {
    title: "Michiteku Tauon",
    artist: "BLU-SWING",
    src: "/audio/BLU-SWING.mp3",
    cover: "/images/covers/BLU-SWING.jpeg",
  },
  {
    title: "Soul Shadow",
    artist: "The Crusader",
    src: "/audio/the-crusaders.mp3",
    cover: "/images/covers/the-crusaders.jpeg",
  },
  {
    title: "Leaf and Stream",
    artist: "Wishbone Ash",
    src: "/audio/wishbone-ash.mp3",
    cover: "/images/covers/wishbone-ash.jpeg",
  },
];
