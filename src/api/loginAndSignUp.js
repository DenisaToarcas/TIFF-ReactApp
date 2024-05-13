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

export { login, signUp };