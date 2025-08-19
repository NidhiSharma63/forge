// src/api/apiClient.ts
import {
  default as getToken,
  default as getUserDetails,
} from "../utils/localStorage";
import axiosInstance from "./axiosInstance";

// POST request (always include userId in body)
export const customAxiosPost = async (url, data) => {
  const userId = getUserDetails()?._id;

  const response = await axiosInstance.post(url, {
    ...data,
    userId,
  });

  return response.data;
};
// / GET request (add Bearer token + userId in query if available)
export const customAxiosGet = async (url, params = {}) => {
  const token = getToken();
  const userId = getUserDetails()?._id;

  const response = await axiosInstance.get(url, {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      ...params,
      ...{ userId },
    },
  });

  return response.data;
};
