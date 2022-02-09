/* global window */
import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
import { useRouter } from "next/router";
import { useCallback, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { Validation } from "@lib/etc/validation";

interface initialStateI {
  email: string;
  password: string;
  passwordConfirm: string;
  mobile: string;
  school: string;
  major: string;
}

interface actionI {
  type: string;
  payload: string;
}

const INITIALSTATE = {
  user: {
    email: "",
    password: "",
    passwordConfirm: "",
    mobile: "",
    school: "",
    major: "",
  },
  error: {
    email: "",
    password: "",
    passwordConfirm: "",
    mobile: "",
    school: "",
    major: "",
  },
};

function userReducer(state: initialStateI, action: actionI) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    case "school":
      return { ...state, school: action.payload };
    case "major":
      return { ...state, major: action.payload };
    default:
      return state;
  }
}

function errorReducer(state: initialStateI, action: actionI) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    case "school":
      return { ...state, school: action.payload };
    case "major":
      return { ...state, major: action.payload };
    default:
      return state;
  }
}

function SignUp() {
  const [user, userDispatch] = useReducer(userReducer, INITIALSTATE.user);
  const [error, errorDispatch] = useReducer(errorReducer, INITIALSTATE.error);
  const [termsOfUse, setTermsOfUse] = useState<boolean>(false);
  const router = useRouter();

  const { email } = router.query;

  useEffect(() => {
    //임의로 접근할 경우 홈으로 리다이렉트
    if (!email) {
      alert("잘못된 접근 입니다");
      router.push("/");
    }

    if (email) {
      userDispatch({
        type: "email",
        payload: email as string,
      });
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    userDispatch({
      type: name,
      payload: value,
    });
  }

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const { message } = Validation[name](value);

    if (name === "password") {
      if (user.passwordConfirm !== value) {
        handleErrorMsg({
          name: "passwordConfirm",
          value: "비밀번호와 다릅니다",
        });
      }
    }

    if (name === "passwordConfirm") {
      if (user.password !== value) {
        handleErrorMsg({ name, value: "비밀번호와 다릅니다" });
        return;
      }
    }

    handleErrorMsg({ name, value: message });
  }

  function handleErrorMsg({ name, value }: { name: string; value: string }) {
    errorDispatch({
      type: name,
      payload: value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(user, error);
    console.log("전송!");
  }

  function isValid() {
    const hasError =
      Object.values(error).filter((err) => err !== "").length > 0;

    const isEmpty = Object.values(user).filter((u) => u === "").length > 0;

    if (hasError || isEmpty) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <InputGroup>
        <Input
          type="email"
          placeholder="이메일"
          defaultValue={email}
          disabled
        />

        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={user.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.passwordConfirm && <ErrorMsg>{error.passwordConfirm}</ErrorMsg>}
        <Input
          type="text"
          placeholder="휴대폰 번호 (ex.01012345678)"
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.mobile && <ErrorMsg>{error.mobile}</ErrorMsg>}
        <Input
          type="text"
          placeholder="학교 (ex.명지대학교)"
          name="school"
          value={user.school}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.school && <ErrorMsg>{error.school}</ErrorMsg>}
        <Input
          type="text"
          placeholder="전공 (ex.컴퓨터공학과)"
          name="major"
          value={user.major}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.major && <ErrorMsg>{error.major}</ErrorMsg>}
      </InputGroup>
      <label htmlFor="termsOfUse">
        <input
          type="checkbox"
          id="termsOfUse"
          onChange={() => {
            setTermsOfUse(!termsOfUse);
          }}
        />{" "}
        이용약관에 동의 합니다
      </label>
      <Button
        type="submit"
        fullWidth
        color={theme.colors.third.skyblue}
        size="large"
        disabled={isValid() || !termsOfUse} // 하나라도 true면 disabled
        onClick={() => {}}
      >
        회원가입
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 334px;
  height: 100%;

  margin: 0 auto;
  padding: 20px;

  button {
    margin-top: 20px;
    font-size: 14px;
    padding: 12px 0px;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 24px;
`;

const InputGroup = styled.div`
  margin: 20px 0px;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;

  border: 0;
  border-radius: 6px;
  background-color: ${theme.colors.primary.gray};

  font-size: 17px;
  letter-spacing: -0.2px;

  outline-color: #8ffcff;
  color: #a0a0a0;

  padding-left: 16px;

  & + & {
    margin-top: 15px;
  }
`;

const ErrorMsg = styled.p`
  padding: 6px 0px;
  color: ${theme.colors.primary.orange};
`;

export default SignUp;
