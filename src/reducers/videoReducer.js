import { SELECT_VIDEO } from "../actions/types";

const videoReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

export default videoReducer;
