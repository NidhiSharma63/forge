// src/api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1", // apni API base URL daalo
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
