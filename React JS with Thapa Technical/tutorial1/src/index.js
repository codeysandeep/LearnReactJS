/* ------------------------------------------------------------------------------------------ */

// How to render "Hello, World!" in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>Hello, World!</center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// JSX in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>Hello, World!</center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to render multiple elements inside ReactDOM.render() in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>
    <h5>What is React?</h5>
    <p>A JavaScript library for building user interfaces</p>
  </center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to render an array of elements inside ReactDOM.render() in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render([
  <center key={1}>*</center>,
  <center key={3}>***</center>,
  <center key={5}>*****</center>,
  <center key={7}>*******</center>,
  <center key={9}>*********</center>,
]); 

*/

/* ------------------------------------------------------------------------------------------ */

// React.Fragment in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <center>*</center>
    <center>***</center>
    <center>*****</center>
    <center>*******</center>
    <center>*********</center>
  </React.Fragment>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// Syntactical Sugar for Fragments in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <center>*</center>
    <center>***</center>
    <center>*****</center>
    <center>*******</center>
    <center>*********</center>
  </>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// Embedding Expressions in JSX in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

const fruit = "Apple";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>A for {fruit}</center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// Template Literals in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

const fruit = "Apple";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>{`A for ${fruit}`}</center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// How to display Current Date and Time in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

const date = new Date().toLocaleString();

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>{date}</center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// JSX Attributes in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>
    <img src="https://picsum.photos/160/240" alt="Random Image" />
  </center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// Importing CSS File in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center>
    <img src="https://picsum.photos/160/240" alt="Random Image" />
  </center>
); 

*/

/* ------------------------------------------------------------------------------------------ */

// Inline CSS Styling in React JS

/* 

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <center style={{ color: "#0000FF" }}>Hello, World!</center>
); 

*/

/* ------------------------------------------------------------------------------------------ */
