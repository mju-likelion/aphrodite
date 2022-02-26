import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import {
  GetApplyListsError,
  GetApplyListsSuccess,
} from "src/payloads/GetApplyListsPayload";

function useApplyLists(url: string) {
  const { data, error } = useSWRImmutable<
    GetApplyListsSuccess,
    GetApplyListsError
  >(url, fetcher);

  return {
    applies: data?.data.users,
    isLoading: !data && !error,
    isError: error?.error.message,
  };
}

export default useApplyLists;
