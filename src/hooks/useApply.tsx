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

  return {
    data: users,
    isLoading: !users && !userError,
    isError: userError,
  };
}

export default useApply;
