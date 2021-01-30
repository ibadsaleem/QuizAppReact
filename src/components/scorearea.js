import React from "react";
import Totalincorrect from "./totalincorrect";
import Totalcorrect from "./totalcorrect";

function Scorearea(props) {
  return (
    <div className="score">
      <Totalcorrect correct={props.correct} />
      <Totalincorrect incorrect={props.incorrect} />
    </div>
  );
}

export default Scorearea;
