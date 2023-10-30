import React from "react";
import Canvas from "./Canvas";

function Home() {
  return (
    <div className="container mx-auto hero" id="hero">
      <Canvas />
      <div className="container heading">
        <div className="heading__line-1">
          Hello, I&apos;m <span>Peter</span>
        </div>
        <div className="heading__line-2">
          I&apos;m evolving into a full stack web developer.
        </div>
        <a href="#about" className="heading__link">
          <div className="heading-cta">
            View my work
            <svg
              className="heading__arrow"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>arrow-right</title>
              <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Home;
