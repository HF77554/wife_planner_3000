import axios from "axios";
import authHeader from "./auth-header";

const DATABASE_URL = "http://localhost:4000/";

const getUserInfo = async () => {
  try {
    const res = await axios.get(DATABASE_URL + "users", { headers: {"Authorization" : authHeader()} })
    const data = res.data[0]
    return data
  } catch (err) {
    console.log({err:err})
  }
};


export default {
  getUserInfo
};