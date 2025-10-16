import { useState, useEffect, useRef } from "react";

const trailers = [
  "EXeTwQWrcwY", // The Dark Knight
  "YoHD9XEInc0", // Inception
  "6ZfuNTqbHE8", // Avengers: Infinity War
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // ✅ Muat YouTube IFrame API sekali saja
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: trailers[current],
        playerVars: {
          autoplay: 0, // ⛔ jangan autoplay
          mute: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    return () => {
      if (playerRef.current) playerRef.current.destroy();
    };
  }, []);

  // ✅ Update status play/pause
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (
      event.data === window.YT.PlayerState.PAUSED ||
      event.data === window.YT.PlayerState.ENDED
    ) {
      setIsPlaying(false);
    }
  };

  // ✅ Jalankan slideshow otomatis (berhenti kalau hover/play)
  useEffect(() => {
    if (isHovered || isPlaying) return;

    const interval = setInterval(() => {
      const next = (current + 1) % trailers.length;
      setCurrent(next);

      // ⛔ Gunakan cueVideoById agar tidak autoplay
      if (playerRef.current?.cueVideoById) {
        playerRef.current.cueVideoById(trailers[next]);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [current, isHovered, isPlaying]);

  // ✅ Ganti video manual lewat tombol (tidak autoplay)
  const handleDotClick = (index) => {
    setCurrent(index);
    if (playerRef.current?.cueVideoById) {
      playerRef.current.cueVideoById(trailers[index]);
    }
  };

  return (
    <div
      className="relative w-full h-[250px] md:h-[400px] bg-black overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Player */}
      <div id="yt-player" className="w-full h-full"></div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {trailers.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-yellow-400 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
