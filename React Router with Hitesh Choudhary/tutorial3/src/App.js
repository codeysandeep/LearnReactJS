/* ------------------------------------------------------------------------------------------ */

// Nested Route in React Router

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components";
import { Home, Purchase, Fruits, Vegetables } from "./Pages";

const App = () => {
  return (
    <center>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/purchase" element={<Purchase />}>
          <Route exact path="fruits" element={<Fruits />} />
          <Route exact path="vegetables" element={<Vegetables />} />
        </Route>
      </Routes>
    </center>
  );
};

export default App;

/* ------------------------------------------------------------------------------------------ */
