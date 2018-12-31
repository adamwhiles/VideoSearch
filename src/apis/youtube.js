import axios from "axios";

const KEY = "AIzaSyBfk7MFvvdg93mDeDEm7UfxBMU_gC-s2HM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
