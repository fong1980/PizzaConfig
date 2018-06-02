//./reducer/counterReaducer

export default (state = 0, { type }) => {
  switch (type) {
    case "ADDBASE":
      return state + 1;
    default:
      return state;

    //step 8 handle action in reducer
  }
};

//step 3
