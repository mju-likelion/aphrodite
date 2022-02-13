import React from "react";

function useQuestions() {
  return {
    data: {
      // 질문은 key-value조합이 아니라 배열로 넘겨야 한다.
      questions: ["첫번째질문", "n번째질문"],
    },
  };
}
export default useQuestions;
