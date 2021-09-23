export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return action.posts;
    case "CLEAR_ALL_POSTS":
      return [];
    case "ADD_POST":
      return [...state, action.post];
    case "SET_NEW_POST":
      return [...state, action.post];
    default:
      return state; //should I have a different default here since I always want posts to be returned?
  }
};
