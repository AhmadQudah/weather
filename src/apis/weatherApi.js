import axios from "axios";

const KEY = "787ff13a16304b16a4ddc0e7079";

export default axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  data: {
    maxResults: 5,
    appid: KEY
  }
});
