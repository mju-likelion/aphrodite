import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import {
  GetApplyDetailError,
  GetApplyDetailSuccess,
} from "src/payloads/GetApplyDetailPayload";

function useApplyDetail(url: string) {
  const { data, error } = useSWRImmutable<
    GetApplyDetailSuccess,
    GetApplyDetailError
  >(url, fetcher);

  return {
    answer: data?.data,
    isLoading: !data && !error,
    error: error?.error,
  };
}

export default useApplyDetail;
