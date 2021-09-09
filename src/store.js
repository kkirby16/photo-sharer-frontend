import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import usersReducer from "./reducers/users.js"; //because default export we can choose to name it whatever we want.
import currentUser from "./reducers/currentUser.js";
import thunk from "redux-thunk"; //i imported this without the curly braces to get it to work. is that okay?
import loginForm from "./reducers/loginForm.js";

const reducer = combineReducers({
  users: usersReducer, //shorthand syntax that is the same as saying "users: users". QUESTION: howard said this is a good way to fake having a reducer and after these steps he checked the redux state in redux devtools and it showed "users: []" but mine is showing undefined...?
  currentUser,
  loginForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //**this line and the composeEnhancer part below is kind of a newer version of how we have to put our middleware together. and this is probably the way you're going to need to do this if you are building everything from scratch now. so it is just a minor change in the syntax of what redux needs.

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
