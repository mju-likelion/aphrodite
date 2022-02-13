import useSWRImmutable from "swr/immutable";
import axios, { AxiosResponse } from "axios";
import { fetcher } from "@lib/Axios/fetcher";

function useApplyDetail() {
  // const { data, error } = useSWRImmutable(url, fetcher);

  return {
    // applies: data,
    // isLoading: !error && !data,
    // isError: error,
    data: {
      user: {
        id: 1,
        email: "test@email.com",
        phone: "010-0000-0000",
        name: "홍길동",
        univ: "명지대학교(자연)",
        apply_univ: "명지대학교(자연)",
        major: "컴퓨터공학과",
        // 어드민이면 아래 필드가 내려가고, 일반유저면 내려가지 않는다
        status: "1",
      },
      // 질문 답변은 key-value조합이 아니라 배열로 넘겨야 한다.
      apply: {
        part: "프론트",
        answers: [
          "첫번째 답변입니다.",
          "두번째 답변입니다.",
          "열번째 답변입니다.",
        ],
      },
    },
  };
}

export default useApplyDetail;
