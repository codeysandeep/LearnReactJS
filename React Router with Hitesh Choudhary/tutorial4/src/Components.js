/* ------------------------------------------------------------------------------------------ */

// Link in React Router

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container p-3">
      <Link to="/" className="btn btn-success m-1">
        Home
      </Link>
      <Link to="/purchase" className="btn btn-danger m-1">
        Purchase
      </Link>
    </div>
  );
};

export { Navbar };

/* ------------------------------------------------------------------------------------------ */
