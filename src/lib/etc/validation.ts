interface ValidationI {
  [s: string]: (data: string) => {
    result: boolean;
    message: string;
  };
}

export const Validation: ValidationI = {
  email: function (data) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: "",
      };
    } else {
      return {
        result: false,
        message: "이메일을 확인 해주세요",
      };
    }
  },

  password: function (data) {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: "",
      };
    } else {
      return {
        result: false,
        message: "비밀번호는 최소 8자, 문자와 숫자, 특수문자를 포함해야합니다",
      };
    }
  },

  passwordConfirm: function (data) {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: "",
      };
    } else {
      return {
        result: false,
        message: "비밀번호는 최소 8자, 문자와 숫자, 특수문자를 포함해야합니다",
      };
    }
  },

  mobile: function (data) {
    const regex = /^[0-9]{0,11}$/i;

    console.log(data);

    const result = regex.test(data);

    console.log(result);

    if (result) {
      return {
        result: true,
        message: "",
      };
    } else {
      return {
        result: false,
        message: "번호는 숫자만 입력 해주세요",
      };
    }
  },

  school: function (data) {
    const regex = /^[ㄱ-ㅎ가-힣]*대학교$/g;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: "",
      };
    } else {
      return {
        result: false,
        message: "학교명은 OO대학교로 끝나야 합니다",
      };
    }
  },

  major: function (data) {
    const regex = /^[ㄱ-ㅎ가-힣]*(과|학과|학부)$/gi;

    const result = regex.test(data);

    if (result) {
      return {
        result: true,
        message: "",
      };
    } else {
      return {
        result: false,
        message: "전공명은 과, 학과, 학부로 끝나야 합니다.",
      };
    }
  },
};
