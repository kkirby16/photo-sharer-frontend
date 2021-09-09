//for login forms you can put state for the login into react or into redux.

import React from "react";
import { connect } from "react-redux";

const Login = () => {
  return (
    <form onSubmit={undefined}>
      <input
        placeholder="username"
        value={undefined}
        name="username"
        type="text"
        onChange={undefined}
      />
      <input
        placeholder="password"
        value={undefined}
        name="password"
        type="text"
        onChange={undefined}
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

export default connect()(Login);

//connect returns a function that takes a component and then returns a component.
