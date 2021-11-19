import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/currentUser.js";
import { updateSignupForm } from "../actions/signupForm.js";
import { Link } from "react-router-dom";
import "./myStyles.css";

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div className="backgroundImageForSignup">
      <br></br>
      <br></br>
      <div className="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={signupFormData.name}
            name="name"
            type="text"
            onChange={handleInputChange}
            className="loginAndSignupInputs"
          />
          <br></br>
          <input
            placeholder="Username"
            value={signupFormData.username}
            name="username"
            type="text"
            onChange={handleInputChange}
            className="loginAndSignupInputs"
          />
          <br></br>
          <input
            placeholder="Password"
            value={signupFormData.password} //our value makes this a controlled input.
            name="password"
            type="password"
            onChange={handleInputChange} //<-- when we have a callback to an event we automatically get the event as an argument.
            className="loginAndSignupInputs"
          />
          <br></br>
          <input type="submit" value="Sign Up" />
        </form>
        <hr className="signupHr" />
        <Link to="/" className="styledSignupLink">
          Back to Home
        </Link>
      </div>
    </div>
  );
}; //history object has a collection of all the links you've been to.

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
//shorthand syntax of simply passing an object, the key is whatever i want to call this object in my component, for example { updateSignupForm }, the value is whatever the value needs to be pointing to, usually an action creator. and because key and value are the same, can just use { updateSignupForm }
