interface ValidationI {
  [s: string]: (data: string) => boolean;
}

export const Validation: ValidationI = {
  email: function (data: string): boolean {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return regex.test(data);
  },

  password: function (data: string): boolean {
    console.log("asdasd");
    return true;
  },

  passwordConfirm: function (data: string): boolean {
    console.log("asdasd");
    return true;
  },

  mobile: function (data: string): boolean {
    const regex = /^[0-9]{0,11}$/i;

    return regex.test(data);
  },

  school: function (data: string): boolean {
    console.log(data);
    const regex = /^[ㄱ-ㅎ가-힣]*$/g;

    return regex.test(data);
  },

  major: function (data: string): boolean {
    const regex = /^[ㄱ-ㅎ가-힣]*$/i;

    return regex.test(data);
  },
};
