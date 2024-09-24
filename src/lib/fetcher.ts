import axios, { type AxiosError, isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 8000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
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
    const accessToken = localStorage.getItem("access_token");
    const resp = await axiosInstance({
      method,
      url,
      data: payload,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
      },
    });
    return resp?.data;
  } catch (error) {
    console.log("error log from fetcher ", error);
    const err = error as AxiosError;

    // assume access token expired and manually update it with refresh token
    if (err.response?.status === 401) {
      const refreshToken = localStorage.getItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      const resp = await axiosInstance({
        method: "get",
        url: "/auth/refresh-tokens",
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      localStorage.setItem("access_token", resp?.data?.accessToken);
      localStorage.setItem("refresh_token", resp?.data?.refreshToken);
    }

    if (!isAxiosError(err)) return;
    throw err.response?.data;
  }
};
