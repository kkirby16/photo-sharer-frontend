export const addComment = (text) => {
  // console.log("action fired");
  return {
    type: "ADD_COMMENT",
    payload: text,
  };
};
