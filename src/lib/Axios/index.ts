/* eslint-disable no-param-reassign */
import { isNil } from "lodash";
import axios, { AxiosInstance } from "axios";
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

export default customAxios;
