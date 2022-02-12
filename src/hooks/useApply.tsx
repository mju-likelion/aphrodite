import useSWRImmutable from "swr/immutable";
import { fetcher } from "@lib/Axios/fetcher";

function useApply() {
  const { data: questions, error: questionError } = useSWRImmutable(
    "/api/questions",
    fetcher,
  );
  const { data: users, error: userError } = useSWRImmutable(
    "/api/apply/:id",
    fetcher,
  );

  if (userError) {
    return {
      data: userError.message,
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
