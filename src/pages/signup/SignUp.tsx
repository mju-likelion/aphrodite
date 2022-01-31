/* global window */
import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
import { useRouter } from "next/router";
import { useCallback, useEffect, useReducer } from "react";
import styled from "styled-components";
import * as validate from "@lib/etc/validation";

interface initialStateI {
  [s: string]: {
    email: string;
    password: string;
    passwordConfirm: string;
    mobile: string;
    school: string;
    major: string;
  };
}

interface actionI {
  type: string;
  payload: {
    name: string;
    value: string | string[];
  };
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

function reducer(state: initialStateI, action: actionI) {
  console.log(action);
  const { name, value } = action.payload;

  switch (action.type) {
    case "user":
      return { ...state, user: { ...state.user, [name]: value } };
    case "error":
      return { ...state, error: { ...state.error, [name]: value } };
    default:
      return state;
  }
}

function SignUp() {
  const [state, dispatch] = useReducer(reducer, INITIALSTATE);
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    //임의로 접근할 경우 홈으로 리다이렉트
    if (!token) {
      alert("잘못된 접근 입니다");
      router.push("/");
    }

    if (token) {
      dispatch({
        type: "user",
        payload: { name: "eamil", value: token },
      });
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    console.log(validate);

    if (validate[name](value)) {
      dispatch({
        type: "user",
        payload: { name, value },
      });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(state);
    console.log("전송!");
  }

  const isValidate = useCallback((): boolean => {
    return true;
  }, []);

  return (
    <Container onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <InputGroup>
        <Input
          type="email"
          placeholder="이메일"
          defaultValue={token}
          disabled
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={state.user.password}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={state.user.passwordConfirm}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="휴대폰 번호 (번호만 작성)"
          name="mobile"
          value={state.user.mobile}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="학교"
          name="school"
          value={state.user.school}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="전공"
          name="major"
          value={state.user.major}
          onChange={handleChange}
        />
      </InputGroup>
      <label htmlFor="termsOfUse">
        <input type="checkbox" id="termsOfUse" /> 이용약관에 동의 합니다
      </label>
      <Button
        type="submit"
        fullWidth
        color={theme.colors.third.skyblue}
        size="large"
        disabled={isValidate}
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

export default SignUp;
