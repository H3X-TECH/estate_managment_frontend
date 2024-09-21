import axios, { type AxiosError, isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 8000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : undefined;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const fetcher = async <P>(
  method: "get" | "post" | "delete",
  url: string,
  payload?: P
) => {
  try {
    const resp = await axiosInstance({
      method,
      url,
      data: payload,
    });
    return resp?.data;
  } catch (error) {
    console.log("error log from fetcher ", error);
    const err = error as AxiosError;
    if (!isAxiosError(err)) return;
    throw err.response?.data;
  }
};
