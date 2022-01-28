import useSWR from "swr";

function useUser(url: string) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(url, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
