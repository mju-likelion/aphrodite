import useSWRImmutable from "swr/immutable";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";

function useUser(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    user: data?.results[0].name.first,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
