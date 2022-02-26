import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import {
  GetTotalCountError,
  GetTotalCountSuccess,
} from "src/payloads/GetTotalCountPayload";

function totalCount(url: string) {
  const { data, error } = useSWRImmutable<
    GetTotalCountSuccess,
    GetTotalCountError
  >(url, fetcher);

  return {
    count: data?.meta?.count,
    isLoading: !data && !error,
    isError: error?.error.message,
  };
}

export default totalCount;
