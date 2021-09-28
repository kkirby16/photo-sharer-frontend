//for login forms you can put state for the login into react or into redux.

import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/currentUser.js";
import { updateSignupForm } from "../actions/signupForm.js";
// import { signup } from "../actions/currentUser.js";

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData, //the spreading here of the loginForm keeps the other property not currently being updated in place.
      [name]: value, //why have the brackets around name?
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
    // signup(signupFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        value={signupFormData.name}
        name="name"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="username"
        value={signupFormData.username}
        name="username"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="password"
        value={signupFormData.password} //our value makes this a controlled input.
        name="password"
        type="text"
        onChange={handleInputChange} //<-- when we have a callback to an event we automatically get the event as an argument.
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}; //history object and has a collection of all the links you've been to.

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
//shorthand syntax of simply passing an object, the key is whatever i want to call this object in my component, let's call it updateLoginForm, the value is whatever the value needs to be pointing to usually an action creator. and because key and value are the same, can just use { updateLoginForm }
//connect returns a function that takes a component and then returns a component.
//the updateLoginForm action creator you import simply gets passed into connect.
