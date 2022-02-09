import useSWRImmutable from "swr/immutable";
import * as Cookie from "@lib/Cookie";
import axios, { AxiosResponse } from "axios";

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res: AxiosResponse) => res.data)
    .catch();

function useUser(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);

  if (data) {
    Cookie.setCookie("jwt", data.jwt);
  }
  return {
    user: data?.results[0].name.first,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
