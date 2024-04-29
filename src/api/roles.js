import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/roles';

async function getRoles(filtered) {
  const response = await axios.get(BASE_URL, {method: "GET"}, {params: {filtered}});
  return response.data;
}

async function getRoleById(id) {
  const response = await axios.get(`${BASE_URL}/${id}`, {method: "GET"});
  return response.data;
}

async function createRole(role) {
  const response = await axios.post(BASE_URL, role, {method: "POST", data: role});
  return response.data;
}

async function updateRole(id, role) {
  const response = await axios.put(`${BASE_URL}/${id}`, role, {method: "PUT", data: role});
  return response.data;
}

async function deleteRole(id) {
  const response = await axios.delete(`${BASE_URL}/${id}`, {method: "DELETE"});
  return response.data;
}

export { getRoles, getRoleById, createRole, updateRole, deleteRole };