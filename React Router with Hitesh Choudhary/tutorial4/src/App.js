/* ------------------------------------------------------------------------------------------ */

// URL Parameters in React Router

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components";
import { Home, Purchase, Fruits, Vegetables, Fruit, Price } from "./Pages";

const App = () => {
  return (
    <center>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />}>
          <Route path="fruits" element={<Fruits />}>
            <Route path=":fruit" element={<Fruit />} />
          </Route>
          <Route path="vegetables" element={<Vegetables />} />
        </Route>
        <Route path="/price" element={<Price />} />
      </Routes>
    </center>
  );
};

export default App;

/* ------------------------------------------------------------------------------------------ */
