import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";
import { GetQuestionsPayload } from "src/payloads/GetQuestionsPayload";

function useQuestions(url: string) {
  const { data, error } = useSWRImmutable<GetQuestionsPayload>(url, fetcher);

  return {
    questions: data?.data.questions,
    isLoading: !data && !error,
    error,
  };
}
export default useQuestions;
