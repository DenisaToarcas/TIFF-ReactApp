import axios from "axios";

const BASE_URL = "http://localhost:8080/api/authentication";

async function login(user) {
  const response = await axios.post(`${BASE_URL}/login`, user);
  return response.data;
}

async function signUp(user) {
  const response = await axios.post(`${BASE_URL}/signup`, user);
  return response.data;
}

function getTokenFromUser(user) {
  return user.token;
}

function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function setToken(token) {
  localStorage.setItem("token", token);
  console.log("Token set in local storage");
  console.log(localStorage.getItem("token"));
}

export { login, signUp, getTokenFromUser, setUser, setToken };