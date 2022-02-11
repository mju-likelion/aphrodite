import useSWRImmutable from "swr/immutable";
import _isEmpty from "lodash/isEmpty";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";

function useUser(url: string) {
  const jwt = Cookie.getCookie("jwt");

  if (_isEmpty(jwt)) {
    return {
      user: null,
      isLoading: false,
      isError: false,
    };
  }

  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    user: data?.results[0].name.first,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
