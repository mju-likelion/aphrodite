import useSWRImmutable from "swr/immutable";

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
          name: "홍길동",
          major: "정보통신공학과",
          email: "mju@email.com",
        },
        {
          id: 2,
          name: "김철수",
          major: "정보통신공학과",
          email: "mjuackr@email.com",
        },
      ],
    },
  };
}

export default useApplyLists;
