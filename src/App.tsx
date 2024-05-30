import { useState } from "react";
import { Player } from "./components/Player";
import { Lyrics } from "./components/Lyrics";
import lyricText from "./lyrics-lines";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Fools Garden: Lemon Tree</h1>
      <Player src="fools-garden-lemon-tree.mp3" />
      <Lyrics lyrics={lyricText} currentLineIndex={10} />
    </div>
  );
}

export default App;
