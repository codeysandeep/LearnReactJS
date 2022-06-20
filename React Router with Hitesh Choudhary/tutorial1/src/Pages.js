import React from "react";

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

const About = () => {
  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/bubbles/50/000000/about.png"
        alt="About Page Overview"
      />
      <p>About us</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="container p-3">
      <img
        src="https://img.icons8.com/bubbles/50/000000/contact-card.png"
        alt="Contact Page Overview"
      />
      <p>Contact us</p>
    </div>
  );
};

export { Home, About, Contact };
