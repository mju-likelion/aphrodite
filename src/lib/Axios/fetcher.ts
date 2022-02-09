import axios, { AxiosResponse } from "axios";
import customAxios from ".";

export const fetcher = (url: string) =>
  customAxios.get(url).then((res: AxiosResponse) => res.data);
