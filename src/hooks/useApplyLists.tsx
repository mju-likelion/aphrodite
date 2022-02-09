import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";

function useApplyLists() {
  return {
    links: {
      prev_uri: "https://www.naver.com",
      next_uri: "https://www.naver.com",
    },
    data: {
      user: [
        {
          id: 1,
          email: "mju@email.com",
          name: "홍길동",
        },
      ],
    },
  };
}

export default useApplyLists;
