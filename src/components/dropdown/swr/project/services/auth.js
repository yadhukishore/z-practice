import useSWRMutation from "swr/mutation";
import { axiosInstance } from "./fetcher";

const loginFetcher = async (url, { arg }) => {
  const { username, password } = arg;
  const response = await axiosInstance.post(url, {
    username,
    password,
    expiresInMins: 30
  });

  // Set Authorization header for future requests
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;

  // Store tokens in localStorage for persistence
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);

  return response.data;
};

export const useLogin = () => {
  return useSWRMutation("/auth/login", loginFetcher);
};


export const logout = () => {
  // Clear tokens from localStorage
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  
  // Remove authorization header
  delete axiosInstance.defaults.headers.common['Authorization'];
};