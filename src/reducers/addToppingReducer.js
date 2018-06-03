//./reducer/counterReaducer

export default (state = 0, action) => {
  switch (action.type) {
    case "ADDTOPPING":
      return action.input;
    default:
      return state;
  }
};
