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
      <Link to="/about" className="btn btn-danger m-1">
        About us
      </Link>
      <Link to="/contact" className="btn btn-warning m-1">
        Contact us
      </Link>
    </div>
  );
};

export { Navbar };

/* ------------------------------------------------------------------------------------------ */
