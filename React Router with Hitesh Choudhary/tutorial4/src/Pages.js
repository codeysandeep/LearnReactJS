/* ------------------------------------------------------------------------------------------ */

// Link, NavLink, Outlet, useParams(), useNavigate() and useLocation() in React Router

import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
  const fruits = ["apple", "banana", "coconut", "date"];
  const fruit = fruits[Math.floor(Math.random() * fruits.length)];

  return (
    <>
      <div className="container p-3">
        <img
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-fruits-farm-flaticons-flat-flat-icons-2.png"
          alt="Fruits Page Overview"
        />
        <p>Fruits</p>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#b23cfd" : "#39c0ed",
            };
          }}
          to={`/purchase/fruits/${fruit}`}
          className="btn btn-info"
        >
          {fruit}
        </NavLink>
      </div>
      <Outlet />
    </>
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

const Fruit = () => {
  const { fruit } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/external-flat-andi-nur-abdillah/64/000000/external-Fruit-nutrition-(flat)-flat-andi-nur-abdillah.png"
        alt="Fruit Page Overview"
      />
      <p className="text-capitalize">{fruit}</p>
      <button
        onClick={() => {
          navigate("/price", { state: "$5" });
        }}
        className="btn btn-light m-1"
      >
        Price
      </button>
      <Link to="/price" state={"$59"} className="btn btn-light m-1">
        Cost
      </Link>
    </div>
  );
};

const Price = () => {
  const location = useLocation();
  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/external-ddara-flat-ddara/64/000000/external-price-real-estate-ddara-flat-ddara.png"
        alt="Price Page Overview"
      />
      <p>{location.state}</p>
    </div>
  );
};

export { Home, Purchase, Fruits, Vegetables, Fruit, Price };

/* ------------------------------------------------------------------------------------------ */
