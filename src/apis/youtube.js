import axios from "axios";
// export const KEY = "AIzaSyCcUfLw1NK6LAIsnvMj8IdW_Masg2YVJvc";
export const KEY = "";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY
  }
});
