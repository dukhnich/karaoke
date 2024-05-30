import { useState } from "react";
import { Player } from "./components/Player";
import { Lyrics } from "./components/Lyrics";
import lyricText from "./lyrics-lines";
import "./App.css";

function App() {
  const [line, setLine] = useState(-1);
  const handleTimeUpdate = (time: number) => {
    const index = lyricText.findIndex((l) => l.time >= time);
    setLine(index === -1 ? lyricText.length - 1 : index - 1);
  };

  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player
        src="fools-garden-lemon-tree.mp3"
        onChangeTime={handleTimeUpdate}
        onEnded={() => setLine(-1)}
      />
      <Lyrics lyrics={lyricText} currentLineIndex={line} />
    </div>
  );
}

export default App;
