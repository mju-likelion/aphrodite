/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import * as Cookie from "@lib/Cookie";

const customAxios: AxiosInstance = axios.create({
  baseURL: "http://3.35.11.129",
});

customAxios.interceptors.request.use((config) => {
  const isCookie = Cookie.getCookie("jwt");

  if (isCookie) {
    config.headers = {
      "X-Access-Token": Cookie.getCookie("jwt"),
    };
  }
  return config;
});

customAxios.interceptors.response.use(
  (success: AxiosResponse) => Promise.resolve(success),
  (error: AxiosError) => Promise.reject(error?.response?.data),
);

export default customAxios;
