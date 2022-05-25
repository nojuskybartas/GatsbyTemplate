import axios from "axios";

const instance = axios.create({
  baseURL:
    //   "http://localhost:5001/explored-life-landing-page/us-central1/api",
    "https://us-central1-explored-life-landing-page.cloudfunctions.net/api",
});

export default instance;
