import React from "react";
import "./home.css";

export default function Home() {
  // WhatsApp number and pre-filled message
  const whatsappNumber = "+918287651128"; // Replace with your WhatsApp number (including country code)
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to hire you for a project."
  ); // Pre-filled message
  // WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const cvURL = './Resume-Vashu-Kashyap.pdf'; //  URL of  CV file

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            HEY! I’m Vashu, <br />
            A FORNT-END DEVELOPER <br />
            Based in INDIA
          </h1>
          <p>"Turning your ideas into reality with front-end development"</p>
          <div className="button-group">
            <a href={cvURL} download='Resume-Vashu-Kashyap'>Download Resume</a>
            <a href={whatsappURL} target="_blank">
              Hire Me
            </a>
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
