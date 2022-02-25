export interface GetUserPayload {
  data: {
    user: {
      name: string;
      isAdmin: boolean;
    };
  };
}
