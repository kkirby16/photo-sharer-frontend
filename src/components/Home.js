import React from "react";
import { Link } from "react-router-dom";
import "./myStyles.css";

const Home = ({}) => (
  <div className="backgroundImage">
    <h2 className="greeting">
      <li className="no_bullet_point_lis home_page_title_text ">P h o t o </li>
      <li className="no_bullet_point_lis home_page_title_text ">
        S h a r e r{" "}
      </li>
      <br></br>
      <br></br>
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
      <br></br>
      <br></br>
      <Link
        to="/signup"
        style={{
          fontFamily: "Recoleta Alt",
          color: "white",
          fontSize: "53px",
          textDecoration: "none",
          position: "relative",
          top: "-18px",
        }}
      >
        sign up
      </Link>{" "}
      <span className="or_text">&nbsp;&nbsp; or &nbsp;&nbsp;</span>{" "}
      <Link
        to="/login"
        style={{
          fontFamily: "Recoleta Alt",
          color: "white",
          fontSize: "53px",
          textDecoration: "none",
          position: "relative",
          top: "-18px",
        }}
      >
        log in
      </Link>
    </h2>
  </div>
);

export default Home;
