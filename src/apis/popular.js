import axios from "axios";
export const KEY = "AIzaSyDKoWzdHx34-bZWPkSelU2iXqkiavGqoAM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet, contentDetails, statistics",
    chart: "mostPopular",
    regionCode: "US",
    key: KEY
  }
});
