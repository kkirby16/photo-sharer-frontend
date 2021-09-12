export default (state = null, action) => {
  //can be more specific with your initial state depending on what it is... if it is an object you can be more specific by having an iniital state variable set to an object.
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user;
    case "CLEAR_CURRENT_USER":
      return null;
    default:
      return state;
  }
}; //since this is users reducer, it will return an array of users.
//need a current user reducer so this app has a current user in our state.
//wanting to be able to login and when the application loads, grab the current user.
//we're starting with redux outside of the box. the actions and fetch request we'll make will come from redux rather than like inside of functions. putting everything in redux for now.
