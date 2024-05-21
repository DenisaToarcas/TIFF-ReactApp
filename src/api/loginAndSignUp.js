import axios from "axios";

//const BASE_URL = "http://localhost:8080/api/authentication";
const BASE_URL = "http://localhost:8443/api/authentication";
//const BASE_URL = "https://backend.mangowave-ab0a2a4b.northeurope.azurecontainerapps.io/api/authentication";

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

function setUserId(id) {
  localStorage.setItem("user_id", id);
  console.log("User ID set in local storage");
  console.log(localStorage.getItem("user_id"));
}

export { login, signUp, getTokenFromUser, setUser, setToken, setUserId };