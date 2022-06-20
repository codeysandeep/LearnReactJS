/* ------------------------------------------------------------------------------------------ */

// Link and Outlet in React Router

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-homepage-web-design-and-development-flatart-icons-flat-flatarticons.png"
        alt="Home Page Overview"
      />
      <p>Home</p>
    </div>
  );
};

const Purchase = () => {
  return (
    <>
      <div className="container p-3">
        <img
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-purchase-tools-and-material-ecommerce-flaticons-flat-flat-icons.png"
          alt="Purchase Page Overview"
        />
        <p>Purchase</p>
        <Link to="/purchase/fruits" className="btn btn-warning m-1">
          Fruits
        </Link>
        <Link to="/purchase/vegetables" className="btn btn-primary m-1">
          Vegetables
        </Link>
      </div>
      <Outlet />
    </>
  );
};

const Fruits = () => {
  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-fruits-farm-flaticons-flat-flat-icons-2.png"
        alt="Fruits Page Overview"
      />
      <p>Fruits</p>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-vegetables-healthy-food-and-vegan-justicon-flat-justicon.png"
        alt="Vegetables Page Overview"
      />
      <p>Vegetables</p>
    </div>
  );
};

export { Home, Purchase, Fruits, Vegetables };

/* ------------------------------------------------------------------------------------------ */
