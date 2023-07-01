import React from "react";

function Square({ style, val, chooseSquare }) {
  return (
    <div style={style} className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}
export default Square;
