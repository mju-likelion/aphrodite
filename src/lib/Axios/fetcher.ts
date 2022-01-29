import axios from "axios";

export const fetcher = (url: string) =>
  axios.get(url).then((res) => ({ ...res.data, jwt: "1q2w3e4r" }));
