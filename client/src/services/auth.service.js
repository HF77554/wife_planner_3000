import axios from "axios";

const SERVER_URL = "http://localhost:4000/";

const register = (username, userpassword, email) => {
  return axios.post(SERVER_URL + "register", {
    username,
    userpassword,
    email
  });
};

const login = (username, userpassword) => {
  return axios
    .post(SERVER_URL + "login", {
      username,
      userpassword,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const exportedObject = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default exportedObject;