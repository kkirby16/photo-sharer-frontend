//for login forms you can put state for the login into react or into redux.

import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm.js";
import { login } from "../actions/currentUser.js";
import { Link } from "react-router-dom";
import "./myStyles.css";

//props get passed into a functional component as an argument and they will also come in as an object.
const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData, //the spreading here of the loginForm keeps the other property not currently being updated in place.
      [name]: value, //why have the brackets around name?
    };
    updateLoginForm(updatedFormInfo, history);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history); //need to pass along more than the loginFormData here... need my history to change once successfully logged in the url should go back to like "/" or something else.
  };

  return (
    //the third destructured variable above is a beefed up reduxed version of that action creator
    <div>
      <Link to="/">Back to home</Link>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={loginFormData.username}
          name="username"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="password"
          value={loginFormData.password} //our value makes this a controlled input.
          name="password"
          type="text" //the below is already the event in the () so can pass name and value from the event
          onChange={handleInputChange} //<-- when we have a callback to an event we automatically get the event as an argument.
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}; //name will keep track of this when we change things.

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
//shorthand syntax of simply passing an object, the key is whatever i want to call this object in my component, let's call it updateLoginForm, the value is whatever the value needs to be pointing to usually an action creator. and because key and value are the same, can just use { updateLoginForm }
//connect returns a function that takes a component and then returns a component.
//the updateLoginForm action creator you import simply gets passed into connect.
