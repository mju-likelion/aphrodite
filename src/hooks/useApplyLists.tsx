import useSWRImmutable from "swr/immutable";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";

function useApplyLists(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    applies: data?.data.users,
    isLoading: !data && !error,
    isError: error,
  };
}

export default useApplyLists;
