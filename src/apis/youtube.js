import axios from "axios";
export const KEY = "AIzaSyDMDDIeIc7QNJTQIF23b-rNT1vGkf1kdXA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY
  }
});
