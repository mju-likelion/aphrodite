import useSWRImmutable from "swr/immutable";
import _isEmpty from "lodash/isEmpty";
import _isNil from "lodash/isNil";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";
import { GetUserError, GetUserSuccess } from "src/payloads/GetUserPayload";

function useUser(url: string) {
  const { data, error } = useSWRImmutable<GetUserSuccess, GetUserError>(
    url,
    fetcher,
    {
      errorRetryCount: 3,
    },
  );
  const jwt = Cookie.getCookie("jwt");

  if (_isEmpty(jwt)) {
    return {
      user: null,
      isLoading: false,
      error: false,
      isAdmin: false,
    };
  }

  return {
    user: data?.data.user.name,
    error: error?.error.message,
    isLoading: !data?.data.user.name && !error,
    isAdmin: data?.data.user.isAdmin || false,
  };
}

export default useUser;
