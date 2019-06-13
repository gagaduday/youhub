const fetchVideosReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};

export default fetchVideosReducer;
