import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetApplyDetailSuccess } from "src/payloads/GetApplyDetailPayload";

function useApplyDetail(url: string) {
  const { data, error } = useSWRImmutable<GetApplyDetailSuccess>(url, fetcher);
  return {
    answer: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export default useApplyDetail;
