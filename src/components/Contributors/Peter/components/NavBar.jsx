"use-client";
import React, { useState, useEffect } from "react";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = ["hero", "about", "contact"];
    const scrollPosition = window.scrollY;

    // Determine the active section based on the scroll position
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && scrollPosition >= section.offsetTop - 200) {
        setActiveSection(sections[i]);
        break;
      }
    }

    // Show/hide the navigation bar based on the scroll position
    if (scrollPosition > 250) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  const handleItemClick = (sectionId) => {
    // Scroll to the selected section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`navigation-bar container mx-auto ${
          showNavBar ? "show" : "hide"
        }`}
      >
        <div className="navigation">
          <div
            className={`navigation__item ${
              activeSection === "hero" ? "navigation__item--active" : ""
            }`}
          >
            <a href="#hero" onClick={() => handleItemClick("hero")}>
              Home
            </a>
          </div>
          <div
            className={`navigation__item ${
              activeSection === "about" ? "navigation__item--active" : ""
            }`}
          >
            <a href="#about" onClick={() => handleItemClick("about")}>
              About
            </a>
          </div>
          <div
            className={`navigation__item ${
              activeSection === "contact" ? "navigation__item--active" : ""
            }`}
          >
            <a href="#contact" onClick={() => handleItemClick("contact")}>
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
