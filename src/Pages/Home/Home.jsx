import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>HEY! I’m Vashu, <br />
           A FORNT-END DEVELOPER <br />
            Based in INDIA</h1>
          <p>"Turning your ideas into reality with front-end development"</p>
          <div className="button-group">
            <a href="/">Download Resume</a>
            <a href="/">Hire Me</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="./pngwing.com.png" alt="hero-img" />
          <div className="mask"></div>
        </div>
      </section>
    </>
  );
}
