import React from "react";

import { Apple, Banana } from "../context";

const Fruits = () => {
  return (
    <Apple.Consumer>
      {(apple) => {
        return (
          <Banana.Consumer>
            {(banana) => {
              return (
                <center>
                  <p>A for {apple}</p>
                  <p>B for {banana}</p>
                </center>
              );
            }}
          </Banana.Consumer>
        );
      }}
    </Apple.Consumer>
  );
};

export default Fruits;
