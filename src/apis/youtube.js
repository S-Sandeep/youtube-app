import axios from "axios";

const KEY = "AIzaSyCFCG50POyoALxaiSfCxiu2OEIIf2B2rD4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
