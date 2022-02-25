import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetApplyListsSuccess } from "src/payloads/GetApplyListsPayload";

function useApplyLists(url: string) {
  const { data, error } = useSWRImmutable<GetApplyListsSuccess>(url, fetcher);

  return {
    applies: data?.data.users,
    isLoading: !data && !error,
    isError: error,
  };
}

export default useApplyLists;
