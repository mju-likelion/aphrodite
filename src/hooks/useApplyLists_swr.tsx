import useSWRImmutable from "swr/immutable";
import axios, { AxiosResponse } from "axios";

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res: AxiosResponse) => res.data)
    .catch();

function useApplyLists(url: string) {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    applies: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useApplyLists;
