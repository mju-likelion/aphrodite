import customAxios from ".";

export const fetcher = (url: string) =>
  customAxios.get(url).then((res) => res.data);
