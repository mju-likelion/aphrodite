import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetApplyDetailSuccess } from "src/payloads/GetApplyDetailPayload";

function useApply(url: string) {
  const { data: users, error: userError } =
    useSWRImmutable<GetApplyDetailSuccess>(url, fetcher);
  console.log("users", users);
  if (users) {
    return {
      data: users,
    };
  }
  if (userError) {
    return {
      data: userError.message,
      isError: true,
    };
  }

  return {
    data: users,
    isLoading: !users && !userError,
    isError: userError,
  };
}

export default useApply;
