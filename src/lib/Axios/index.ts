/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from "axios";
import * as Cookie from "@lib/Cookie";
import _ from "lodash";

const header = !_.isNil(Cookie.getCookie("jwt"))
  ? { "X-Access-Token": Cookie.getCookie("jwt") }
  : null;

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

export default customAxios;
