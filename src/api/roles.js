import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/roles';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

const token = localStorage.getItem("token");

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = token;
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getRoles(filtered) {
  const response = await axiosInstance.get(BASE_URL, {method: "GET"}, {params: {filtered}});
  return response.data;
}

async function getRoleById(id) {
  const response = await axiosInstance.get(`${BASE_URL}/${id}`, {method: "GET"});
  return response.data;
}

async function createRole(role) {
  const response = await axiosInstance.post(BASE_URL, role, {method: "POST", data: role});
  return response.data;
}

async function updateRole(id, role) {
  const response = await axiosInstance.put(`${BASE_URL}/${id}`, role, {method: "PUT", data: role});
  return response.data;
}

async function deleteRole(id) {
  const response = await axiosInstance.delete(`${BASE_URL}/${id}`, {method: "DELETE"});
  return response.data;
}

export { getRoles, getRoleById, createRole, updateRole, deleteRole };