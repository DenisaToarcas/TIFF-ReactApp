import axios from 'axios';

//const BASE_URL = 'http://localhost:8080/api/tasks';
const BASE_URL = 'http://localhost:8443/api/tasks';
//const BASE_URL = 'https://backend.mangowave-ab0a2a4b.northeurope.azurecontainerapps.io/api/tasks';

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

async function getTasks() {
  const response = await axiosInstance.get(BASE_URL, {method: "GET"});
  return response.data;
}

async function getTaskById(id) {
  const response = await axiosInstance.get(`${BASE_URL}/${id}`, {method: "GET"});
  return response.data;
}

async function addTask(roleId, task) {
  const response = await axiosInstance.post(`${BASE_URL}/${roleId}`, task);
  return response.data;
}

async function updateTask(id, task) {
  const response = await axiosInstance.put(`${BASE_URL}/${id}`, task, {method: "PUT", data: task});
  return response.data;
}

async function deleteTask(id) {
  const response = await axiosInstance.delete(`${BASE_URL}/${id}`, {method: "DELETE"});
  return response.data;
}

export { getTasks, getTaskById, addTask, updateTask, deleteTask };