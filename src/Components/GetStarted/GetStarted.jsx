import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Real Estate</span>
          <span className="secondaryText">
            Subscribe and find the attractive quotes from us
            <br />
            Find your property soon
          </span>

          <a href="mailto:arfainsabasaba@gmail.com">
            <button className="button">Get Started</button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default GetStarted;
