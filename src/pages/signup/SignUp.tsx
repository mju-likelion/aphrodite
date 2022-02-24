import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { Validation } from "@lib/etc/validation";
import Warning from "@lib/DesignSystem/Icon/Warning";
import customAxios from "@lib/Axios";

interface initialStateI {
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  name: string;
  major: string;
}

interface actionI {
  type: string;
  payload: string;
}

const INITIALSTATE = {
  email: "",
  password: "",
  passwordConfirm: "",
  phone: "",
  name: "",
  major: "",
};

function userReducer(state: initialStateI, action: actionI) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "name":
      return { ...state, name: action.payload };
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
    case "phone":
      return { ...state, phone: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "major":
      return { ...state, major: action.payload };
    default:
      return state;
  }
}

function SignUp() {
  const [user, userDispatch] = useReducer(userReducer, INITIALSTATE);
  const [error, errorDispatch] = useReducer(errorReducer, INITIALSTATE);
  const [termsOfUse, setTermsOfUse] = useState<boolean>(false);
  const router = useRouter();

  const { email } = router.query;

  useEffect(() => {
    // 임의로 접근할 경우 홈으로 리다이렉트
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

    customAxios
      .post("/api/auth/sign-up", {
        email: user.email,
        password: user.password,
        major: user.major,
        name: user.name,
        phone: user.phone,
      })
      .then((res) => {
        alert(res.data.data.message);
        router.push("/");
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  }

  function isValid() {
    const hasError =
      Object.values(error).filter((err) => err !== "").length > 0;

    const isEmpty = Object.values(user).filter((u) => u === "").length > 0;

    if (hasError || isEmpty) {
      return true;
    }
    return false;
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
          type="text"
          placeholder="이름"
          name="name"
          value={user.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.name && (
          <ErrorMsg>
            <Warning />
            &nbsp;{error.name}
          </ErrorMsg>
        )}
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
        {error.passwordConfirm && (
          <ErrorMsg>
            <Warning />
            &nbsp;{error.passwordConfirm}
          </ErrorMsg>
        )}
        <Input
          type="text"
          placeholder="휴대폰 번호 (ex.01012345678)"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.phone && (
          <ErrorMsg>
            <Warning />
            &nbsp;{error.phone}
          </ErrorMsg>
        )}

        <Input
          type="text"
          placeholder="전공 (ex.컴퓨터공학과)"
          name="major"
          value={user.major}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.major && (
          <ErrorMsg>
            <Warning />
            &nbsp;{error.major}
          </ErrorMsg>
        )}
      </InputGroup>
      <Check>
        <Privacy>
          <a
            href="https://likelion.notion.site/23c93a4763844b18abcaeb0fe68ba172"
            target="_blank"
            rel="noreferrer noopener"
          >
            멋쟁이사자처럼 개인정보 이용 동의서
            <br />
          </a>
          <a
            href="https://burnt-dahlia-f9e.notion.site/d6b60340125841039e9610ea29e38e4a"
            target="_blank"
            rel="noreferrer noopener"
          >
            멋쟁이사자처럼(명지대학교 자연) 개인정보 이용 동의서 <br />
            <br />
          </a>
        </Privacy>
        <label htmlFor="termsOfUse">
          <input
            type="checkbox"
            id="termsOfUse"
            onChange={() => {
              setTermsOfUse(!termsOfUse);
            }}
          />{" "}
          이용약관에 동의 합니다.
        </label>
      </Check>
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
  height: 100vh;

  margin: 0 auto;
  padding: 20px;

  button {
    margin-top: 20px;
    font-size: 14px;
    padding: 12px 0px;
  }

  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    height: 100%;
  }
`;

const Title = styled.h3`
  padding-top: 90px;
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
    margin-top: 24px;
  }
`;

const ErrorMsg = styled.p`
  display: inline-flex;
  padding: 6px 0px;
  color: ${theme.colors.primary.red};
`;

const Privacy = styled.div`
  text-align: center;
  font-size: 13.5px;

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${theme.colors.third.skyblue};
  }
`;

const Check = styled.div`
  color: ${theme.colors.third.skyblue};
  text-align: center;
  cursor: pointer;
`;
export default SignUp;
