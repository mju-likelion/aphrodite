import useSWRImmutable from "swr/immutable";
import _isEmpty from "lodash/isEmpty";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";
import customAxios from "@lib/Axios";
import { AxiosResponse } from "axios";

function totalCount(url: string) {
  const jwt = Cookie.getCookie("jwt");

  if (_isEmpty(jwt)) {
    return {
      count: null,
      isLoading: false,
      isError: false,
    };
  }

  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    count: data?.meta.count,
    isLoading: !data && !error,
    isError: error,
  };
}

export default totalCount;
