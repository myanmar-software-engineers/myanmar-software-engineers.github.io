/* eslint-disable @next/next/no-img-element */
"use-client";
import React from "react";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="projects__heading section-heading">Projects</h2>
        <div className="project project-left">
          <a
            href="https://github.com/peterlianpi/Tedim-Chin-Bible-2010-for-macOS"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project__image-container weather">
              <div className="project__image-image">
                <img
                  src="https://raw.githubusercontent.com/peterlianpi/Tedim-Chin-Bible-2010-for-macOS/main/Screenshot%20(143).png"
                  alt=""
                />
              </div>
            </div>
          </a>
          <div className="project__info">
            <h3 className="project__title">
              Tedim (Chin) Bible
              <br />
              2010 for macOS
            </h3>
            <p className="project__description">
              This is the Bible translation in Tedim (Chin) 2010, Lai Siangtho
              to use with Propresenter 7.
            </p>

            <a
              href="https://github.com/peterlianpi/Tedim-Chin-Bible-2010-for-macOS"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__live-2">learn more</div>
            </a>
          </div>
        </div>
        <div className="project project-right">
          <div className="project__info">
            <h3 className="project__title">
              Tedim (Chin) Bible
              <br />
              2010 for Windows 10/11
            </h3>
            <p className="project__description">
              This is the Bible translation in Tedim (Chin) 2010, Lai Siangtho
              to use with Propresenter 7.
            </p>
            <a
              href="https://github.com/peterlianpi/Tedim-Chin-Bible"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__live-2">live app</div>
            </a>
            <a
              href="https://github.com/peterlianpi/Tedim-Chin-Bible"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__live-2">learn more</div>
            </a>
          </div>
          <a
            href="https://github.com/peterlianpi/Tedim-Chin-Bible"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project__image-container todo">
              <div className="project__image-image">
                <img
                  src="https://camo.githubusercontent.com/bba857fbaae20cbc1f35857ca7e1c056269bb6d8b28a4afa4dd2592ea6ea5858/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f746e694365784c757a56382f302e6a7067"
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
        <div className="project project-left">
          <a
            href="https://github.com/peterlianpi/Praise-And-Worship-Collective"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project__image-container retro">
              <div className="project__image-image">
                <img
                  src="https://camo.githubusercontent.com/bba857fbaae20cbc1f35857ca7e1c056269bb6d8b28a4afa4dd2592ea6ea5858/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f746e694365784c757a56382f302e6a7067"
                  alt=""
                />
              </div>
            </div>
          </a>
          <div className="project__info">
            <h3 className="project__title">
              Praise And Worship
              <br />
              Songs Collective
            </h3>
            <p className="project__description">
              Praise-And-Worship-Songs-Collective
            </p>
            <a
              href="https://github.com/peterlianpi/Praise-And-Worship-Collective"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__live-2">Live app</div>
            </a>
            <a
              href="https://github.com/peterlianpi/Praise-And-Worship-Collective"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__live-2">learn more</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
