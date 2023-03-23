import axios from "axios";

const API_URL = "https://demo-api.pritamdas.com/api/";

const register = (username:string, email:string, password:string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username:string, password:string) => {
  return axios.post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
        // check cookies if logged in
      return response.data;
    });
};

const logout = () => {
  // TODO: logout using endpoint
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
