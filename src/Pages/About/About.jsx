import React from "react";
import "./about.css";
import Subheading from "../../components/subheading/Subheading";
const About = () => {
  return (
    <section className="about-section padding_x" id="about">
      <Subheading subheading={"#About Me"} />
      <p> I just find myself happy with the simple things. </p>
      <div className="about-container">
        <div className="about-img">
          <img src="./aboutme.webp" alt="about-img" />
        </div>
        <div className="about-content">
          <h3>
            I'm Vashu  & Front-End Web Developer
          </h3>
          <p>
            I live in Delhi (India). I describe
            myself as a passionate Web Developer who loves coding and using the
            open-source library. In my free time, I watch coding tutorial videos
            on youtube and online surfing about coding. That helps me to learn
            new skills(like - Html, CSS, Javascript, Tailwind CSS), React and
            Sass and grow as a Web Developer. I want to become a great Full
            Stack Developer.
          </p>


           <div className="my-skills">
            <h4>SKills</h4>
            <ul>
                <li><img src="./icons8-html.svg" alt="html  icon" />  HTML 5</li>
                <li><img src="./icons8-css.svg" alt="css icon" /> CSS 3</li>
                <li><img src="./icons8-javascript.svg" alt="Javascript icon" /> JAVASCRIPT</li>
                <li><img src="./icons8-tailwindcss.svg" alt="Tailwind css icon" /> TAILWIND CSS</li>
                <li><img src="./icons8-sass.svg" alt="sass icon" /> SASS</li>
                <li><img src="./icons8-react-native.svg" alt="react  icon" /> REACT</li>
                <li><img src="./icons8-git.svg" alt="git icon" /> GIT</li>
            </ul>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;
