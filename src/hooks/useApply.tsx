import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import {
  GetApplyDetailError,
  GetApplyDetailSuccess,
} from "src/payloads/GetApplyDetailPayload";

function useApply(url: string) {
  const { data: users, error: userError } = useSWRImmutable<
    GetApplyDetailSuccess,
    GetApplyDetailError
  >(url, fetcher, {
    errorRetryCount: 3,
  });

  return {
    data: users,
    isLoading: !users && !userError,
    isError: userError,
  };
}

export default useApply;
