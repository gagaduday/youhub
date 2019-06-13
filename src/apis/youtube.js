import axios from "axios";

const KEY = "AIzaSyDKoWzdHx34-bZWPkSelU2iXqkiavGqoAM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "10",
    key: KEY
  }
});
