import axios from 'axios';

const REST_API_URL = 'http://localhost:8080/api/roles';

// Check if the server is running
export const checkServer = async () => {
  await axios.get(REST_API_URL);
};
