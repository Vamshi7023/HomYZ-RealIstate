import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-container">
        {/* Left side */}
        <div className="f-left">
          <img src="./logo.jpg" alt="Logo" className="f-logo" />
          <span className="f-text">
            Our vision is to help you by providing you the best properties.
          </span>
        </div>

        {/* Right side */}
        <div className="f-right">
          <span className="f-heading">Information</span>
          <span className="f-location">Bangalore, Karnataka</span>
          <div className="f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
