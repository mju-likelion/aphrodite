interface usersLists {
  id: number;
  email: string;
  name: string;
  major: string;
}

export interface GetApplyListsSuccess {
  links: {
    prev_uri: string | null;
    next_uri: string | null;
  };
  data: {
    users: usersLists[];
  };
}

export interface GetApplyListsError {
  error: {
    message: string;
  };
}
