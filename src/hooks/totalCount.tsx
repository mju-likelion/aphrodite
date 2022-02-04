import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";

function totalCount() {
  return {
    meta: {
      count: 10,
    },
  };
}

export default totalCount;
