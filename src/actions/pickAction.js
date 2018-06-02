//.actions/counter.js
//step 6
export const addBase = input => {
  return {
    type: "ADDBASE",
    input
  };
};

export const addSauce = () => {
  return {
    type: "ADDSAUCE"
  };
};

export const addTopping = () => {
  return {
    type: "ADDTOPPING"
  };
};

export const addDrone = () => {
  return {
    type: "ADDDRONE"
  };
};
