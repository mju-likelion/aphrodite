import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import * as Cookie from "@lib/Cookie";

function useUser(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);

  console.log(data);

  if (data) {
    Cookie.setCookie("jwt", data.jwt);
  }

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
