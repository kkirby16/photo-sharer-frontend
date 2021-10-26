import { resetLoginForm } from "./loginForm.js";
import { resetSignupForm } from "./signupForm.js";

import { getAllPosts } from "./allPosts.js";
import { clearAllPosts } from "./allPosts.js";

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user, //shorthand syntax (really user: user)
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};
//getting rid of the current user that was sitting in our redux store.

export const login = (credentials, history) => {
  return (dispatch) => {
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("http://localhost:4500/api/v1/login", {
      credentials: "include", //put credentials: "include" in every fetch.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      //can dispatch as needed in this fetch.
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response));
          dispatch(resetLoginForm());
          dispatch(getAllPosts());
          history.push("/");
        } //history is a mutable object that we are allowed to change on the fly.
      })
      .catch(console.log);
  };
};

export const signup = (credentials, history) => {
  //passing credentials along as an object

  return (dispatch) => {
    const userInfo = {
      user: credentials, //this credentials should have all those top level keys under user.
    };
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("http://localhost:4500/api/v1/signup", {
      credentials: "include", //put credentials: "include" in every fetch.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response));
          dispatch(resetSignupForm());
          dispatch(getAllPosts());
          history.push("/"); //changes the url once successfully logged in
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  //this action creator is just clearing our session.
  //return a function from async action creators using thunk
  //if user clicked log out, we should go ahead and log them out right away on the frontend.
  return (dispatch) => {
    dispatch(clearCurrentUser());
    dispatch(clearAllPosts());
    return fetch("http://localhost:4500/api/v1/logout", {
      credentials: "include", //sends our cookies back.
      method: "DELETE",
    });
  };
};

export const getCurrentUser = () => {
  console.log("DISPATCHING GET CURRENT USER");
  return (dispatch) => {
    return fetch("http://localhost:4500/api/v1/get_current_user", {
      credentials: "include", //say this for when you need to send an authenticated or authorized request of some sort.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          dispatch(setCurrentUser(response));
        }
      })
      .catch(console.log);
  };
};
