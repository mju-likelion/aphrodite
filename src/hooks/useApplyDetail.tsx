import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";

function useApplyDetail(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);
  return {
    answer: data?.data,
    isLoading: !data && !error,
    isError: error,
  };
}

export default useApplyDetail;
