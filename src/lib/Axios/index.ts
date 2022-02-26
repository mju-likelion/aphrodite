/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { isNil } from "lodash";
import * as Cookie from "@lib/Cookie";

const customAxios: AxiosInstance = axios.create({
  baseURL: "http://3.35.11.129",
});

customAxios.interceptors.request.use((config) => {
  const jwt = Cookie.getCookie("jwt");

  if (!isNil(jwt)) {
    config.headers = {
      "X-Access-Token": jwt,
    };
  }
  return config;
});

customAxios.interceptors.response.use(
  (success: AxiosResponse) => Promise.resolve(success),
  (error: AxiosError) => Promise.reject(error?.response?.data),
);

export default customAxios;
