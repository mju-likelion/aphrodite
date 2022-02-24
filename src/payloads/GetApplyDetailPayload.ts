export interface GetApplyDetailSuccess {
  data: {
    data: {
      id: number;
      email: string;
      phone: string;
      name: string;
      major: string;
      // 어드민이면 아래 필드가 내려가고, 일반유저면 내려가지 않는다
      status: number;
      // 질문 답변은 key-value조합이 아니라 배열로 넘겨야 한다.
    };
    apply: {
      part: string;
      answers: string[];
    };
  };
}

export interface GetApplyDetailError {
  error: {
    message: string;
  };
}
