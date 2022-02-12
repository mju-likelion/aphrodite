// import useSWRImmutable from "swr/immutable";
// import axios, { AxiosResponse } from "axios";
// import fetcher from "@lib/Axios/fetcher";

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
