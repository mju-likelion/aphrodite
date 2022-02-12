import useSWRImmutable from "swr/immutable";
import axios, { AxiosResponse } from "axios";
import { fetcher } from "@lib/Axios/fetcher";

function useApplyLists(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    applies: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useApplyLists;
