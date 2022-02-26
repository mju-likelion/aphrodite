export interface GetTotalCountSuccess {
  meta: {
    count: number;
  };
}

export interface GetTotalCountError {
  error: {
    message: string;
  };
}
