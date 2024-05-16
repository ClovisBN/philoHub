import Axios from "./caller.service";
import { jwtDecode } from "jwt-decode";

let login = (credential) => {
  return Axios.post("/api/login", credential);
};

let signup = (credential) => {
  return Axios.post("/api/signup", credential);
};

let getUserById = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodeJwt = jwtDecode(token);

    return Axios.get(`/api/users/${decodeJwt.userId}`);
  }
};

let logout = () => {
  localStorage.removeItem("token");
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

let jwtDecodeInfo = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodeJwt = jwtDecode(token);
    return decodeJwt;
  } else {
    return null;
  }
};

let jwtRoleId = (token) => {
  if (token) {
    const user = jwtDecode(token);
    return user;
  }
  return null;
};

export const accountService = {
  login,
  signup,
  logout,
  saveToken,
  isLogged,
  getUserById,
  jwtDecodeInfo,
  jwtRoleId,
};
