export default (state = 0, action) => {
  switch (action.type) {
    case "ADDBASE":
      return action.input;
    default:
      return state;
  }
};
