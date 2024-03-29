import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuopen, setMenuopen] = useState("./menuopen.svg");
  const [showmenu, setShowmenu] = useState(
    "nav-menu-container scale-up-center"
  );
  const [activeLink, setActiveLink] = useState("home");

  const handletoggle = () => {
    if (menuopen === "./menuopen.svg") {
      setMenuopen("./menuclose.svg");
      setShowmenu("nav-menu-container scale-up-center open-menu");
    } else {
      setMenuopen("./menuopen.svg");
      setShowmenu("nav-menu-container scale-up-center");
    }
  };

  const handleclick = (link) => {
    setActiveLink(link);

    // Close the mobile menu when a menu item is clicked
    if (showmenu.includes("open-menu")) {
      handletoggle();
    }
  };

  const handleScroll = () => {
    // Close the mobile menu when scrolling occurs
    if (showmenu.includes("open-menu")) {
      handletoggle();
    }

    // Update the active link based on scroll position
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 100 &&
        scrollPosition < sectionTop + sectionHeight - 100
      ) {
        setActiveLink(section.id);
        setShowmenu("nav-menu-container scale-up-center");
        setMenuopen("./menuopen.svg");

      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#home">Vashu</a>
        </div>
        <div className={showmenu}>
          <ul className="nav-menu">
            <li className="nav-link">
              <a
                className={activeLink === "home" ? "active" : ""}
                href="#home"
                onClick={() => handleclick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-link">
              <a
                className={activeLink === "about" ? "active" : ""}
                href="#about"
                onClick={() => handleclick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-link">
              <a
                className={activeLink === "work" ? "active" : ""}
                href="#work"
                onClick={() => handleclick("work")}
              >
                Work
              </a>
            </li>
            <li className="nav-link">
              <a
                className={activeLink === "contact" ? "active" : ""}
                href="#contact"
                onClick={() => handleclick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="social-menu-container">
          <ul className="social-menu">
            <li className="social-link">
              <a
                href="https://www.instagram.com/im.vashukashyap/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram" title="Instagram"></i>
              </a>
            </li>
            <li className="social-link">
              <a href="https://github.com/vashu-kashyap" target="_blank">
                <i className="fa-brands fa-github" title="Github"></i>
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/im-vashukashyap/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in" title="Linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="menu-btn">
          <button onClick={handletoggle}>
            <img src={menuopen} alt="humberger-menu" />
          </button>
        </div>
      </nav>
    </>
  );
}
