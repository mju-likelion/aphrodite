export interface GetUserSuccess {
  data: {
    user: {
      name: string;
      isAdmin: boolean;
    };
  };
}

export interface GetApplyListsError {
  error: {
    message: string;
  };
}
