import React from "react";

function Square({ classType, chooseSquare }) {
  return <div className={`square ${classType}`} onClick={chooseSquare}></div>;
}
export default Square;
