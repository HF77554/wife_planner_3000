import axios from "axios";
import authHeader from "./auth-header";

const DATABASE_URL = "http://localhost:4000/";

const getUserInfo = () => {
  return axios.get(DATABASE_URL + "users", { Authorization: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(DATABASE_URL + "admin", { headers: authHeader() });
};

export default {
  getUserInfo
};