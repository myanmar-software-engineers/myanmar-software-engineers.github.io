"use-client";
import React from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Bg from "./Popup";
function PageLayout() {
  return (
    <>
      <Home />
      <NavBar />
      <Bg />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default PageLayout;
