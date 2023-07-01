import React, { useEffect } from "react";
import { useState } from "react";
import Square from "./components/Square";
import { Patterns } from "./components/Patterns";

function Home() {
  const [state, setState] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", status: "none" });

  useEffect(() => {
    checkWin();
    checkTie();
    player === "X" ? setPlayer("O") : setPlayer("X");
  }, [state]);

  useEffect(() => {
    if (result.status != "none")
      alert("Game finished! winner :" + result.winner);
    restartGame();
  }, [result]);

  function handleSquareValue(boxId) {
    // console.log(boxId);
    setState(
      state.map((val, idx) => {
        if (idx === boxId && val === "") return player;
        return val;
      })
    );
  }

  const checkWin = () => {
    Patterns.forEach((curPattern) => {
      let firstPlayer = state[curPattern[0]];
      if (firstPlayer === "") return;
      let foundWinner = true;
      curPattern.forEach((idx) => {
        if (state[idx] != firstPlayer) foundWinner = false;
      });
      if (foundWinner) {
        setResult({ winner: player, status: "Won" });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    state.forEach((square) => {
      if (square === "") filled = false;
    });
    if (filled) {
      setResult({ winner: "No one", status: "Tie" });
    }
  };

  const restartGame = () => {
    setState(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  const style1 = {
    border: 0,
  };
  const style2 = {
    borderLeft: 0,
  };
  const style3 = {
    borderTop: 0,
  };
  return (
    <div className="wrapper">
      <Square
        style={style1}
        val={state[0]}
        chooseSquare={() => handleSquareValue(0)}
      />

      <Square
        style={style3}
        val={state[1]}
        chooseSquare={() => handleSquareValue(1)}
      />

      <Square
        style={style3}
        val={state[2]}
        chooseSquare={() => handleSquareValue(2)}
      />

      <Square
        style={style2}
        val={state[3]}
        chooseSquare={() => handleSquareValue(3)}
      />

      <Square val={state[4]} chooseSquare={() => handleSquareValue(4)} />

      <Square val={state[5]} chooseSquare={() => handleSquareValue(5)} />

      <Square
        val={state[6]}
        style={style2}
        chooseSquare={() => handleSquareValue(6)}
      />

      <Square val={state[7]} chooseSquare={() => handleSquareValue(7)} />

      <Square val={state[8]} chooseSquare={() => handleSquareValue(8)} />
    </div>
  );
}

export default Home;
