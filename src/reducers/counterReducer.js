//./reducer/counterReaducer

export default (state = 0, action) => {
  switch (action.type) {
    case "ADDBASE":
      return action.input;
    default:
      return state;

    //step 8 handle action in reducer
  }
};

//step 3
