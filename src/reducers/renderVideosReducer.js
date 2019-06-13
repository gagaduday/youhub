const renderVideosReducer = (state = [], action) => {
  switch (action.type) {
    case "RENDER_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};

export default renderVideosReducer;
