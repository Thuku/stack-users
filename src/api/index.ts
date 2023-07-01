import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "https://api.stackexchange.com/2.2",
});

export default axiosClient;
