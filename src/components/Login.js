//for login forms you can put state for the login into react or into redux.

import React from "react";
import { connect } from "react-redux";
import {updateLoginForm} from "../actions/loginForm.js"
//props get passed into a functional component as an argument and they will also come in as an object.
const Login = ({username, password, updateLoginForm}) => {
  return ( //the third destructured variable above is a beefed up reduxed version of that action creator
    <form onSubmit={undefined}>
      <input
        placeholder="username"
        value={username}}
        name="username"
        type="text"
        onChange={updateLoginForm}
      />
      <input
        placeholder="password"
        value={password} //our value makes this a controlled input.
        name="password"
        type="text" //the below is already the event in the () so can pass name and value from the event
        onChange={({name, value}) => updateLoginForm({name, value})} //<-- when we have a callback to an event we automatically get the event as an argument.
      /> 
      <input type="submit" value="Log In" />
    </form>
  );
}; //name will keep track of this when we change things.

const mapStateToProps = (state) => {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password,
  };
};


export default connect(mapStateToProps, {updateLoginForm})(Login);
//shorthand syntax of simply passing an object, the key is whatever i want to call this object in my component, let's call it updateLoginForm, the value is whatever the value needs to be pointing to usually an action creator. and because key and value are the same, can just use { updateLoginForm }
//connect returns a function that takes a component and then returns a component.
//the updateLoginForm action creator you import simply gets passed into connect.