import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import generateGrid from "./MineGenerator";
import Minesweeper from "./MineSweeper";

function App() {
  // const grid = generateGrid(5, 4, 9);
  const [grid, setGrid] = useState(generateGrid(6, 5, 8));
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (restart === false) {
      setGrid(generateGrid(6, 5, 8));
    }
  }, [restart]);

  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
        <Minesweeper grid={grid} setRestart={setRestart} restart={restart} />
      </div>
      {restart === true ? (
        <div>
          <h5>You Died :(</h5>
          <button onClick={() => setRestart(false)}>Restart</button>
        </div>
      ) : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
