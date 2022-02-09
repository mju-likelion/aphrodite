// import useSWRImmutable from "swr/immutable";
// import axios, { AxiosResponse } from "axios";

// const fetcher = (url: string) =>
//   axios
//     .get(url)
//     .then((res: AxiosResponse) => res.data)
//     .catch();

function totalCount() {
  // const { data, error } = useSWRImmutable(url, fetcher);

  return {
    // count: data,
    meta: {
      count: 10,
    },
  };
}

export default totalCount;
