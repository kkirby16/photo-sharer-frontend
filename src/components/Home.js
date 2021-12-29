import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./myStyles.css";

import { gsap } from "gsap";

function Home() {
  let headingFirst = useRef(null);
  let headingSecond = useRef(null);
  let descriptiveText = useRef(null);
  let signupText = useRef(null);
  let loginText = useRef(null);

  useEffect(() => {
    gsap.to(headingFirst, {
      duration: 0.9,
      opacity: 1,
      y: -20,
      ease: "power3",
    });
    gsap.to(headingSecond, {
      duration: 0.9,
      opacity: 1,
      y: -20,
      ease: "power3",
      delay: 0.1,
    });
    gsap.from(descriptiveText, {
      duration: 0.6,
      x: "-100vw",
      delay: 0.15,
      ease: "power2.in",
    });
    gsap.to(signupText, {
      duration: 0.9,
      opacity: 1,
      y: -20,
      ease: "power3",
      delay: 0.1,
    });
    gsap.to(loginText, {
      duration: 0.9,
      opacity: 1,
      y: -20,
      ease: "power3",
      delay: 0.1,
    });
  }, []);

  return (
    <div className="backgroundImage">
      <h2 className="greeting">
        <li
          ref={(el) => {
            headingFirst = el;
          }}
          className="no_bullet_point_lis home_page_title_text "
        >
          P h o t o{" "}
        </li>
        <li
          ref={(el) => {
            headingSecond = el;
          }}
          className="no_bullet_point_lis home_page_title_text "
        >
          S h a r e r{" "}
        </li>
        <br></br>
        <br></br>
        <div
          ref={(el) => {
            descriptiveText = el;
          }}
          className="descriptive_home_page_text"
        >
          <li className="no_bullet_point_lis home_page_text">
            Post photos with captions for others to see
          </li>
          <li className="no_bullet_point_lis home_page_text">
            See photos others have posted
          </li>
          <li className="no_bullet_point_lis home_page_text">
            Comment on and like posts to{" "}
            <span className="interact_word">interact</span>{" "}
          </li>
        </div>
        <br></br>
        <br></br>
        <Link
          to="/signup"
          ref={(el) => {
            signupText = el;
          }}
          style={{
            fontFamily: "Recoleta Alt",
            color: "white",
            fontSize: "53px",
            textDecoration: "none",
            position: "relative",
            top: "-18px",
          }}
          className="signupAndLoginText"
        >
          sign up
        </Link>{" "}
        <span className="or_text">&nbsp;&nbsp; or &nbsp;&nbsp;</span>{" "}
        <Link
          to="/login"
          ref={(el) => {
            loginText = el;
          }}
          style={{
            fontFamily: "Recoleta Alt",
            color: "white",
            fontSize: "53px",
            textDecoration: "none",
            position: "relative",
            top: "-18px",
          }}
          className="signupAndLoginText"
        >
          log in
        </Link>
      </h2>
    </div>
  );
}

export default Home;
