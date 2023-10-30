import React from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Bg from "./Popup";
function PageLayout() {
  return (
    <>
      <Home />
      <NavBar />
      <Bg />
      <About />
      <Footer />
    </>
  );
}

export default PageLayout;
