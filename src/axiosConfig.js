import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://localhost:7011', // Coloca aquí tu URL base
});

export default axiosConfig;