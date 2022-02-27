export interface GetUserSuccess {
  data: {
    user: {
      name: string;
      isAdmin: boolean;
    };
  };
}

export interface GetUserError {
  error: {
    message: string;
  };
}
