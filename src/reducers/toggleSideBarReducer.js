import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "../actions/types";

const toggleSideBarReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return action.payload;
    case HIDE_SIDEBAR:
      return action.payload;
    default:
      return state;
  }
};

export default toggleSideBarReducer;
