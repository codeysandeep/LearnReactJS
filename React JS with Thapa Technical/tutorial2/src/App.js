/* ------------------------------------------------------------------------------------------ */

// Components in React JS

/* 

import React from "react";
import Greeting from "./components/Component1";

function App() {
  return <Greeting />;
}

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Import Export in React JS

/* 

import React from "react";

import {
  addition,
  subtraction,
  multiplication,
  division,
  Addition,
  Subtraction,
  Multiplication,
  Division,
} from "./components/Component2";

function App() {
  return (
    <>
      <center>{addition}</center>
      <center>10 + 5 = {Addition(10, 5)}</center>
      <center>{subtraction}</center>
      <center>10 - 5 = {Subtraction(10, 5)}</center>
      <center>{multiplication}</center>
      <center>10 * 5 = {Multiplication(10, 5)}</center>
      <center>{division}</center>
      <center>10 / 5 = {Division(10, 5)}</center>
    </>
  );
}

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Props in React JS

/* 

import React from "react";
import Elements from "./components/Component3";

function App() {
  return <Elements fruit="Apple" animal="Beaver" bird="Crow" flower="Daisy" />;
}

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Arrays in React JS

/* 

import React from "react";
import { fruits, List } from "./components/Component4";

function App() {
  return (
    <center>
      <List key={fruits[0].id} name={fruits[0].name} price={fruits[0].price} />
      <List key={fruits[1].id} name={fruits[1].name} price={fruits[1].price} />
      <List key={fruits[2].id} name={fruits[2].name} price={fruits[2].price} />
      <List key={fruits[3].id} name={fruits[3].name} price={fruits[3].price} />
    </center>
  );
}

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Map Method in React JS

/* 

import React from "react";
import { fruits, List } from "./components/Component4";

const App = () => {
  return (
    <center>
      {fruits.map((fruit) => {
        return <List key={fruit.id} name={fruit.name} price={fruit.price} />;
      })}
    </center>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Conditional Rendering in React JS

/* 

import React from "react";
import { Amazon, Netflix } from "./components/Component5";

const platform = "Amazon";

const App = () => {
  if (platform === "Amazon") {
    return <Amazon />;
  } else {
    return <Netflix />;
  }
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Conditional Rendering using Ternary Operator in React JS

/* 

import React from "react";
import { Amazon, Netflix } from "./components/Component5";

const platform = "Amazon";

const App = () => (platform === "Amazon" ? <Amazon /> : <Netflix />);

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Hooks in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  return (
    <center>
      <h1 className="display-1">{count}</h1>
      <button className="btn btn-danger" onClick={increaseCount}>
        Increase
      </button>
    </center>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Display Current Time using Hooks in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const updatedTime = new Date().toLocaleTimeString();
    setCurrentTime(updatedTime);
  };

  return (
    <center>
      <h6 className="display-6">{currentTime}</h6>
      <button className="btn btn-danger" onClick={updateTime}>
        Update Time
      </button>
    </center>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Events in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#FFFFFF");

  const changeColor = () => setColor("#FF0000");

  return (
    <center>
      <h6 className="display-6" style={{ color: color }}>
        Hello, World!
      </h6>
      <button className="btn btn-danger" onClick={changeColor}>
        Change Color
      </button>
    </center>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Controlled Components in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const getText = (event) => setText(event.target.value);
  const showName = () => setName(text);

  return (
    <center>
      <p className="text-capitalize">Hello, {name}</p>
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="What is your name?"
        value={text}
        onChange={getText}
      />
      <button className="btn btn-primary" onClick={showName}>
        Submit
      </button>
    </center>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Form in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const getText = (event) => {
    setText(event.target.value);
  };

  const showName = (event) => {
    event.preventDefault();
    setName(text);
  };

  return (
    <form className="text-center" onSubmit={showName}>
      <p className="text-capitalize">Hello, {name}</p>
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="What is your name?"
        value={text}
        onChange={getText}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Multiple Form Fields in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [firstNameText, setFirstNameText] = useState("");
  const [lastNameText, setLastNameText] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getFirstNameText = (event) => setFirstNameText(event.target.value);
  const getLastNameText = (event) => setLastNameText(event.target.value);

  const showName = (event) => {
    event.preventDefault();
    setFirstName(firstNameText);
    setLastName(lastNameText);
  };

  return (
    <form className="text-center" onSubmit={showName}>
      <p className="text-capitalize">{`Hello, ${firstName} ${lastName}`}</p>
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="First name"
        value={firstNameText}
        onChange={getFirstNameText}
      />
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="Last name"
        value={lastNameText}
        onChange={getLastNameText}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Multiple Form Fields States in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState({ firstName: "", lastName: "" });

  const getText = (event) => {
    const { name, value } = event.target;

    setText((object) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: object.lastName,
        };
      } else if (name === "lastName") {
        return {
          firstName: object.firstName,
          lastName: value,
        };
      }
    });
  };

  const showName = (event) => {
    event.preventDefault();
    alert(`Hello ${text.firstName}, Form has been submitted successfully.`);
  };

  return (
    <form className="text-center" onSubmit={showName}>
      <p className="text-capitalize">{`Hello, ${text.firstName} ${text.lastName}`}</p>
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="First name"
        name="firstName"
        value={text.firstName}
        onChange={getText}
      />
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="Last name"
        name="lastName"
        value={text.lastName}
        onChange={getText}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */

// Spread Operator in React JS

/* 

import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState({ firstName: "", lastName: "" });

  const getText = (event) => {
    const { name, value } = event.target;

    setText((object) => {
      return {
        ...object,
        [name]: value,
      };
    });
  };

  const showName = (event) => {
    event.preventDefault();
    alert(`Hello ${text.firstName}, Form has been submitted successfully.`);
  };

  return (
    <form className="text-center" onSubmit={showName}>
      <p className="text-capitalize">{`Hello, ${text.firstName} ${text.lastName}`}</p>
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="First name"
        name="firstName"
        value={text.firstName}
        onChange={getText}
      />
      <input
        style={{ width: "20rem", textAlign: "center", margin: "1rem auto" }}
        type="text"
        className="form-control"
        placeholder="Last name"
        name="lastName"
        value={text.lastName}
        onChange={getText}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default App; 

*/

/* ------------------------------------------------------------------------------------------ */
