import axios from "axios";

export default axios.create({
  baseURL: "http://alien-bebop-191120.rj.r.appspot.com",
  // baseURL: "http://localhost:3001/",
  // baseURL: "https://ppads-goteam-backend.herokuapp.com/",
});
