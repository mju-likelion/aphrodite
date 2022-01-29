import useSWR from "swr";
import { fetcher } from "@lib/Axios/fetcher";

function useUser(url: string) {
  const { data, error } = useSWR(url, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
