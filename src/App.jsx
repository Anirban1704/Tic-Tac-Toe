import React from "react";
import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSquareClick(rowIndex, colIndex) {
    // setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const updateTurn = [
        {
          square: { row: rowIndex, col: colIndex },
          player: deriveActivePlayer(prevTurns),
        },
        ...prevTurns,
      ];
      return updateTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />

          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSquareClick} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
