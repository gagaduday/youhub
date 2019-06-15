import axios from "axios";
export const KEY = "AIzaSyBeRSxVxw32ygwfsMbUPqiiq6dY3G0bn4I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY
  }
});
