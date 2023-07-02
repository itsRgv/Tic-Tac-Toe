import React from "react";

function Result({ classType, winner, handleRestart }) {
  let displayText;
  `${winner}` === ""
    ? (displayText = "Tie!")
    : (displayText = `${winner}` + " Wins!");
  return (
    <div className={`resultPage ${classType}`}>
      <div className="resultMessage">{displayText}</div>
      <button className="restartbtn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}

export default Result;
