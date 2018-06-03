export default (state = 1, action) => {
  switch (action.type) {
    case "ADDDRONE":
      return action.input;
    default:
      return state;
  }
};
