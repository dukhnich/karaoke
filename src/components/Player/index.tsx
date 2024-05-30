import "./style.css";
import { useState, useEffect, useRef } from "react";

interface PlayerProps {
  src: string;
  onChangeTime: (time: number) => void;
}

export const Player: React.FC<PlayerProps> = ({ src, onChangeTime }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handleEnding = () => {
    setIsPlaying(false);
    onChangeTime(-1);

  };
  const stateHandler = (ev: React.ChangeEvent<HTMLAudioElement>) => {
    const target = ev.target;
    if (ev.type === "timeupdate") {
      onChangeTime(target.currentTime);
    }
  };

  return (
    <>
      <audio
        src={src}
        ref={audioRef}
        onTimeUpdate={stateHandler}
        onEnded={handleEnding}
      ></audio>
      <div className="player-controls">
        <button
          className={`play-button ${isPlaying ? "pause" : "play"}`}
          onClick={handlePlay}
        ></button>
      </div>
    </>
  );
};
