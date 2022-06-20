/* ------------------------------------------------------------------------------------------ */

// Routes, Route and Navigate in React Router

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./Components";
import { Home, About, Contact } from "./Pages";

const App = () => {
  return (
    <center>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </center>
  );
};

export default App;

/* ------------------------------------------------------------------------------------------ */
