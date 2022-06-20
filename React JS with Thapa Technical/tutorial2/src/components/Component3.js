import React from "react";

function Elements(props) {
  return (
    <center>
      <p>{props.fruit}</p>
      <p>{props.animal}</p>
      <p>{props.bird}</p>
      <p>{props.flower}</p>
    </center>
  );
}

export default Elements;
