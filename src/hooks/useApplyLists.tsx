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
          major: "정보통신공학과",
        },
        {
          id: 2,
          email: "mjuackr@email.com",
          name: "김철수",
          major: "정보통신공학과",
        },
      ],
    },
  };
}

export default useApplyLists;
