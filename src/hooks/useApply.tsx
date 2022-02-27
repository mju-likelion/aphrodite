import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetApplyError, GetApplySuccess } from "src/payloads/GetApplyPayload";

function useApply(url: string) {
  const { data: users, error: userError } = useSWRImmutable<
    GetApplySuccess,
    GetApplyError
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
