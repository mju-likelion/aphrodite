interface ValidationI {
  [s: string]: (data: string) => boolean;
}

export const Validation: ValidationI = {
  email: function (data: string): boolean {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return regex.test(data);
  },

  password: function (data: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;

    return regex.test(data);
  },

  passwordConfirm: function (data: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;

    return regex.test(data);
  },

  mobile: function (data: string): boolean {
    const regex = /^[0-9]{0,11}$/i;

    return regex.test(data);
  },

  school: function (data: string): boolean {
    const regex = /^[ㄱ-ㅎ가-힣]*$/g;

    return regex.test(data);
  },

  major: function (data: string): boolean {
    const regex = /^[ㄱ-ㅎ가-힣]*$/gi;

    return regex.test(data);
  },
};
