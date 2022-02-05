import axios, { AxiosInstance } from "axios";
import * as Cookie from "@lib/Cookie";

const customAxios: AxiosInstance = axios.create({
  headers: {
    "X-Access-Token": Cookie.getCookie("jwt") ?? null,
  },
});

export default customAxios;
