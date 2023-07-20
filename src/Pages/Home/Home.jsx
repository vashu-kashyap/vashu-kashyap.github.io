import React from "react";
import "./home.css";
import Circlebtn from "../../components/Circle-button/Circlebtn";


export default function Home() {
  // WhatsApp number and pre-filled message
  const whatsappNumber = "+918287651128"; // Replace with your WhatsApp number (including country code)
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to hire you for a project."
  ); // Pre-filled message
  // WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const cvURL = './Vashu Kasyap Resume.pdf'; //  URL of  CV file

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            HEY! I’m Vashu, <br />
            A FORNT-END DEVELOPER <br />
            Based in INDIA
          </h1>
          <p>"Turning your ideas into reality with front-end development"</p>
          <div className="button-group">
           <Circlebtn btnlink={cvURL} btnvalue={"download resume"}/>
           <Circlebtn btnlink={whatsappURL} btnvalue={"Hire Me"}/>
          </div>
        </div>
        <div className="hero-img">
          <img src="./vashu.png" alt="hero-img" />
          <div className="mask"></div>
        </div>
      </section>
    </>
  );
}
