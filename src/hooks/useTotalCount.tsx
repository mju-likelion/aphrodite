import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetTotalCountSuccess } from "src/payloads/GetTotalCountPayload";

function totalCount(url: string) {
  const { data, error } = useSWRImmutable<GetTotalCountSuccess>(url, fetcher);

  return {
    count: data?.meta.count,
    isLoading: !data && !error,
    isError: error,
  };
}

export default totalCount;
