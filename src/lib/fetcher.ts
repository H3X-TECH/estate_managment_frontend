import axios, { AxiosError, isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 8000,
  withCredentials: true,
});

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
    const err = error as AxiosError;
    if (!isAxiosError(err)) return err;
    return err.response?.data;
  }
};
