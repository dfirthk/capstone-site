import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "095768fab18f41019538928c56897873",
  },
});
