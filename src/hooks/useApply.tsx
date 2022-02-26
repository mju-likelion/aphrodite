import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetQuestionsPayload } from "src/payloads/GetQuestionsPayload";
import {
  GetApplyDetailError,
  GetApplyDetailSuccess,
} from "src/payloads/GetApplyDetailPayload";

function useApply() {
  const { data: questions, error: questionError } =
    useSWRImmutable<GetQuestionsPayload>("/api/questions", fetcher);
  const { data: users, error: userError } = useSWRImmutable<
    GetApplyDetailSuccess,
    GetApplyDetailError
  >("/api/apply/:id", fetcher);

  if (userError) {
    return {
      data: userError.error.message,
      isError: true,
    };
  }

  if (questionError) {
    return {
      data: "지원서 질문을 불러오는데에 실패앴습니다",
      isError: true,
    };
  }

  return {
    data: {
      questions,
      users,
    },
    isLoading: !questions && !users && !questionError && !userError,
    isError: questionError || userError,
  };
}

export default useApply;
