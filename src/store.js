import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import usersReducer from "./reducers/users.js";
import currentUser from "./reducers/currentUser.js";
import allPosts from "./reducers/allPosts.js";
import signupForm from "./reducers/signupForm.js";
import thunk from "redux-thunk";
import loginForm from "./reducers/loginForm.js";

const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  allPosts,
  signupForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //**this line and the composeEnhancer part below is kind of a newer version of how we have to put our middleware together. and this is probably the way i'm going to need to do this if building everything from scratch now. so it is just a minor change in the syntax of what redux needs.

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
