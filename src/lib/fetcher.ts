import axios, { type AxiosError, isAxiosError } from "axios";
import { useAuthStore } from "~/stores/auth";

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
    // const accessToken = localStorage.getItem("access_token");
    const accessToken = useAuthStore.getState().accessToken;
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
      // const refreshToken = localStorage.getItem("refresh_token");
      const refreshToken = useAuthStore.getState().refreshToken;
      const resp = await axiosInstance({
        method: "get",
        url: "/auth/refresh-tokens",
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      useAuthStore.setState({
        accessToken: resp?.data?.data?.accessToken,
        refreshToken: resp?.data?.data?.refreshToken,
      });
    }

    if (!isAxiosError(err)) return;
    throw err.response?.data;
  }
};
