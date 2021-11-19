export default (state = [], action) => {
  //can be more specific with your initial state depending on what it is... if it is an object you can be more specific by having an initial state variable set to an object.
  switch (action.type) {
    default:
      return state;
  }
}; //since this is the users reducer, it will return an array of users.

//when @@INIT gets fired it is going to return the default state of all of your reducers.
//default state should be an empty version of whatever this reducer is responsible for returning.
//if have a property in your reducer that is returning undefined, redux is like you don't need to know about that/there won't be state for that.
