import useSWRImmutable from "swr/immutable";
import { isEmpty } from "lodash";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";

function totalCount(url: string) {
  const jwt = Cookie.getCookie("jwt");

  if (isEmpty(jwt)) {
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
