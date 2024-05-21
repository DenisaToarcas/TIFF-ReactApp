import axios from "axios";

//const BASE_URL = "http://localhost:8080/api/users";
const BASE_URL = "https://backend.mangowave-ab0a2a4b.northeurope.azurecontainerapps.io/api/users";

async function getUsers() {
    const response = await axios.get(BASE_URL);
    return response.data;
}

async function getUserPersonalInfo() {
    const response = await axios.get(`${BASE_URL}/personalInfo`);
    return response.data;
}

export { getUsers, getUserPersonalInfo };