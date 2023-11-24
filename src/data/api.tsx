import axios from "axios";

export default axios.create({
  baseURL: "http://0.0.0.0:5555",
  headers: {
    "Content-type": "application/json",
  },
});
