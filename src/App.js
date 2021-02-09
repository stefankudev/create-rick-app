import { useState, useEffect } from "react";
import record from "./rick_astley_record.png";

import "./App.css";

function App() {
  var audio = new Audio("/never_gonna_give_you_up.mp3");
  const [playing, setPlaying] = useState(false);

  function toggle() {
    if (!playing) {
      setPlaying(true);
      audio.play();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className={playing ? "forbidden" : "help"} onClick={toggle}>
          <img
            src={record}
            className={playing ? "App-logo animate forbidden" : "App-logo"}
            alt="record"
          />
        </button>
        {/* <audio id="rickroll" src={music} autoPlay /> */}
      </header>
    </div>
  );
}

export default App;
