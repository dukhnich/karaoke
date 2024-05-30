import "./style.css";
import { LyricLine } from "../../lyrics-lines";
import { useRef, useEffect } from "react";

interface LyricsProps {
  lyrics: LyricLine[];
  currentLineIndex: number;
}

export const Lyrics = ({ lyrics, currentLineIndex }: LyricsProps) => {
  const currentLine = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (currentLine.current) {
        currentLine.current.scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth",
        });
    }
  }, [currentLineIndex]);
  return (
    <div className="lyrics">
      {lyrics.map((line, i) => (
        <p
          key={line.time}
          ref={currentLineIndex === i ? currentLine : null}
          className={currentLineIndex === i ? "current-line" : ""}
        >
          {line.text}
        </p>
      ))}
    </div>
  );
};
