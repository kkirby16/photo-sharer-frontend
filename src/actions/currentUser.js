import { resetLoginForm } from "./loginForm.js";
import { resetSignupForm } from "./signupForm.js";

import { getAllPosts } from "./allPosts.js";
import { clearAllPosts } from "./allPosts.js";

//should build action creators files around each piece of state.

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
}; //getting rid of the current user that was sitting in our redux store.

export const login = (credentials, history) => {
  return (dispatch) => {
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/login", {
      credentials: "include", //put credentials: "include" in every fetch when you need to send an authenticated or authorized request of some sort.
      method: "POST",
      mode: "no-cors",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":
          "https://photo-sharer-kkirby16.netlify.app",
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
        } //history is a mutable object that we are allowed to change on the fly. changes the url once successfully logged in.
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
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/signup", {
      credentials: "include",
      method: "POST",
      mode: "no-cors",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":
          "https://photo-sharer-kkirby16.netlify.app",
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
  //we can return a function from async action creators using thunk
  return (dispatch) => {
    dispatch(clearCurrentUser()); //if user clicked log out, we should go ahead and log them out right away on the frontend.
    dispatch(clearAllPosts());
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/logout", {
      credentials: "include", //sends our cookies back.
      method: "DELETE",
      mode: "no-cors",

      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":
          "https://photo-sharer-kkirby16.netlify.app",
      },
    });
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch(
      "https://photo-sharer-backend.herokuapp.com/api/v1/get_current_user",
      {
        credentials: "include", //say this for when you need to send an authenticated or authorized request of some sort.
        method: "GET",
        mode: "no-cors",

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
      }
    )
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
