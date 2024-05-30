import "./style.css";
import { useState, useEffect, useRef } from "react";

interface PlayerProps {
  src: string;
}

export const Player: React.FC<PlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio src={src} ref={audioRef}></audio>
      <div className="player-controls">
        <button
          className={`play-button ${isPlaying ? "pause" : "play"}`}
          onClick={handlePlay}
        ></button>
      </div>
    </>
  );
};
