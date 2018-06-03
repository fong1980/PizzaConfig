export default (state = 0, action) => {
  switch (action.type) {
    case "ADDDRONE":
      return action.input;
    default:
      return state;
  }
};
