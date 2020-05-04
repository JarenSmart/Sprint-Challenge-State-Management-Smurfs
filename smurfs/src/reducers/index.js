import { FETCH_SUCCESS } from "../actions/index";

const initialState = {
  smurf: {
    name: "",
    age: "",
    height: "",
  },

  smurfs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
