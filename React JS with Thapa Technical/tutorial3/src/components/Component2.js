import React, { useContext } from "react";

import { Apple, Banana } from "../context";

const Fruits = () => {
  const apple = useContext(Apple);
  const banana = useContext(Banana);

  return (
    <center>
      <p>A for {apple}</p>
      <p>B for {banana}</p>
    </center>
  );
};

export default Fruits;
