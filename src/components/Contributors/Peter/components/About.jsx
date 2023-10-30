"use-client";
import React from "react";

function About() {
  return (
    <>
      <section className="container mx-auto about" id="about">
        <h2 className="about__heading section-heading">About</h2>
        <div className="about__content">
          <div className="profile profile__fade-in">
            <div className="profile__picture ">
              <img
                className="trn-4 rounded-full hover:w-[45%] hover:mt-[-150px] hover:h-[45%] w-[100%] h-[50%] hover:rounded-full"
                src="https://avatars.githubusercontent.com/u/36624809?v=4"
                alt="peter"
              />
            </div>
            <p className="profile__blurb">
              Fully committed to the philosophy of life-long learning, I’m a
              full stack developer with a deep passion for JavaScript, React and
              all things web development. The unique combination of creativity,
              logic, technology and never running out of new things to discover,
              drives my excitement and passion for web development. When I’m not
              at my computer I like to spend my time reading, keeping fit and
              playing piano.
            </p>
          </div>
          <div className="skills">
            <div className="skills__row">
              <div className="skills__item skills__item--html skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/html.6aa56206be02cf6404844871df1d2da6.png"
                  alt=""
                />
                <div className="skills__item-name">HTML</div>
              </div>
              <div className="skills__item skills__item--react skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png"
                  alt=""
                />
                <div className="skills__item-name skills__item-fade-in">
                  REACT
                </div>
              </div>
              {/* <div className="skills__item skills__item--npm skills__item-fade-in">
              <img src="./img/expressjs.png" alt="" />
              <div className="skills__item-name skills__item-fade-in">EXPRESS.JS</div>
            </div> */}
            </div>
            <div className="skills__row">
              <div className="skills__item skills__item--js skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png"
                  alt=""
                />
                <div className="skills__item-name">JAVASCRIPT</div>
              </div>
              <div className="skills__item skills__item--css skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png"
                  alt=""
                />
                <div className="skills__item-name">CSS</div>
              </div>
              {/* <div className="skills__item skills__item--python skills__item-fade-in">
              <img src="./img/mongo.png" alt="" />
              <div className="skills__item-name">MONGODB</div>
            </div> */}
              <div className="skills__item skills__item--git skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/git.3092b5991e8accb9e7c36817c048a8d5.png"
                  alt=""
                />
                <div className="skills__item-name">GIT</div>
              </div>
            </div>
            <div className="skills__row">
              {/* <div className="skills__item skills__item--sass skills__item-fade-in">
              <img src="./img/sass.png" alt="" />
              <div className="skills__item-name">SASS</div>
            </div> */}
              <div className="skills__item skills__item--webpack skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/nextjs.ff373e2ef4f7fdf152425a8c5c30816c.png"
                  alt=""
                />
                <div className="skills__item-name">NEXT.JS</div>
              </div>

              <div className="skills__item skills__item--r skills__item-fade-in">
                <img
                  src="https://benscott.dev/imgs/node.94a06c4b9dd29e984501e6407e77a918.png"
                  alt=""
                />
                <div className="skills__item-name">NODE.JS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
