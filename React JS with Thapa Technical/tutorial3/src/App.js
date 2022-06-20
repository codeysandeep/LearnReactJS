/* ------------------------------------------------------------------------------------------ */

// Context API in React JS

/* 

import React from "react";

import Fruits from "./components/Component1";
import { Apple, Banana } from "./context";

const App = () => {
  return (
    <Apple.Provider value={"Apple"}>
      <Banana.Provider value={"Banana"}>
        <Fruits />
      </Banana.Provider>
    </Apple.Provider>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// useContext() Hook in React JS

/* 

import React from "react";

import Fruits from "./components/Component2";
import { Apple, Banana } from "./context";

const App = () => {
  return (
    <Apple.Provider value={"Apple"}>
      <Banana.Provider value={"Banana"}>
        <Fruits />
      </Banana.Provider>
    </Apple.Provider>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// useEffect() Hook in React JS

/* 

import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <center>
      <h6 className="display-6">{count}</h6>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </center>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */
