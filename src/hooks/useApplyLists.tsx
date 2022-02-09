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
          status: "지원완료",
          part: "기획",
        },
        {
          id: 2,
          name: "김철수",
          major: "정보통신공학과",
          email: "mjuackr@email.com",
          status: "서류탈락",
          part: "개발",
        },
        {
          id: 3,
          name: "테스트",
          major: "컴퓨터공학과",
          email: "abcd@email.com",
          status: "최종합격",
          part: "개발",
        },
      ],
    },
  };
}

export default useApplyLists;
