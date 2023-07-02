import React, { useEffect } from "react";
import { useState } from "react";
import Square from "./components/Square";
import { Patterns } from "./components/Patterns";
import Result from "./Result";

function Home() {
  const [display, setDisplay] = useState("");
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", status: "none" });
  const [currentClass, setCurrentClass] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    checkWin();
    checkTie();
    player === "X" ? setPlayer("O") : setPlayer("X");
  }, [currentClass]);

  useEffect(() => {
    if (result.status !== "none") {
      setDisplay("show");
    }
    // restartGame();
  }, [result]);

  function handleSquareValue(boxId) {
    setCurrentClass(
      currentClass.map((val, idx) => {
        if (idx === boxId && val === "") {
          if (player === "X") return "x";
          return "circle";
        }
        return val;
      })
    );
  }

  const checkWin = () => {
    Patterns.forEach((curPattern) => {
      let firstPlayer;
      if (currentClass[curPattern[0]] === "x") firstPlayer = "X";
      else if (currentClass[curPattern[0]] === "circle") firstPlayer = "O";
      else firstPlayer = "";
      if (firstPlayer === "") return;
      let foundWinner = true,
        curPlayer;
      curPattern.forEach((idx) => {
        if (currentClass[idx] === "x") curPlayer = "X";
        else if (currentClass[idx] === "circle") curPlayer = "O";
        else curPlayer = "";
        if (curPlayer !== firstPlayer) foundWinner = false;
      });
      if (foundWinner) {
        setResult({ winner: player, status: "Won" });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    currentClass.forEach((square) => {
      if (square === "") filled = false;
    });
    if (filled) {
      setResult({ winner: "", status: "Tie" });
    }
  };

  const restartGame = () => {
    setCurrentClass(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setDisplay("");
  };

  return (
    <div>
      <div className={`wrapper ${player === "O" ? "circle" : "x"}`}>
        <Square
          classType={currentClass[0]}
          chooseSquare={() => handleSquareValue(0)}
        />

        <Square
          classType={currentClass[1]}
          chooseSquare={() => handleSquareValue(1)}
        />

        <Square
          classType={currentClass[2]}
          chooseSquare={() => handleSquareValue(2)}
        />

        <Square
          classType={currentClass[3]}
          chooseSquare={() => handleSquareValue(3)}
        />

        <Square
          classType={currentClass[4]}
          chooseSquare={() => handleSquareValue(4)}
        />

        <Square
          classType={currentClass[5]}
          chooseSquare={() => handleSquareValue(5)}
        />

        <Square
          classType={currentClass[6]}
          chooseSquare={() => handleSquareValue(6)}
        />

        <Square
          classType={currentClass[7]}
          chooseSquare={() => handleSquareValue(7)}
        />

        <Square
          classType={currentClass[8]}
          chooseSquare={() => handleSquareValue(8)}
        />
      </div>
      <Result
        classType={display}
        winner={result.winner}
        handleRestart={() => restartGame()}
      />
    </div>
  );
}

export default Home;
