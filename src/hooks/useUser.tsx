import useSWRImmutable from "swr/immutable";
import _isEmpty from "lodash/isEmpty";
import _isNil from "lodash/isNil";
import * as Cookie from "@lib/Cookie";
import { fetcher } from "@lib/Axios/fetcher";
import { GetUserSuccess } from "src/payloads/GetUserPayload";

function useUser(url: string) {
  const { data, error } = useSWRImmutable<GetUserSuccess>(url, fetcher, {
    errorRetryCount: 3,
  });
  const jwt = Cookie.getCookie("jwt");

  if (_isEmpty(jwt)) {
    return {
      user: null,
      isLoading: false,
      isError: false,
      isAdmin: false,
    };
  }

  if (!_isEmpty(jwt) && _isEmpty(data)) {
    return {
      user: null,
      isLoading: true,
      isError: false,
      isAdmin: false,
    };
  }

  if (data) {
    return {
      user: data.data.user.name,
      isError: error,
      isLoading: !data.data.user.name && error,
      isAdmin: data.data.user.isAdmin,
    };
  }
  return {
    user: null,
    isError: error,
    isLoading: false,
    isAdmin: false,
  };
}

export default useUser;
