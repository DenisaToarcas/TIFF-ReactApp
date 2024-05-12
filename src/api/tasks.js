import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tasks'; 

async function getTasks() {
  const response = await axios.get(BASE_URL, {method: "GET"});
  return response.data;
}

async function getTaskById(id) {
  const response = await axios.get(`${BASE_URL}/${id}`, {method: "GET"});
  return response.data;
}

async function addTask(roleId, task) {
  const response = await axios.post(`${BASE_URL}/${roleId}`, task);
  return response.data;
}

async function updateTask(id, task) {
  const response = await axios.put(`${BASE_URL}/${id}`, task, {method: "PUT", data: task});
  return response.data;
}

async function deleteTask(id) {
  const response = await axios.delete(`${BASE_URL}/${id}`, {method: "DELETE"});
  return response.data;
}

export { getTasks, getTaskById, addTask, updateTask, deleteTask };