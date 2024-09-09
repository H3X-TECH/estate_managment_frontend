import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 8000,
  withCredentials: true,
});

export const fetcher = async <P>(method: string, url: string, payload?: P) => {
  return await axiosInstance({
    method,
    url,
    data: payload,
  });
};
