/* eslint-disable no-unused-vars */
import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Validation } from "@lib/etc/validation";
import customAxios from "@lib/Axios";
// import { useRouter } from "next/router";
import * as Cookie from "@lib/Cookie";

import Warning from "@lib/DesignSystem/Icon/Warning";
import { mutate } from "swr";

const Errors: Values = {
  email: "",
  password: "",
};
interface Values {
  email: string;
  password: string;
}

type Props = {
  setComponentText: (text: string) => void;
  setShow: (text: boolean) => void;
};

function Login({ setComponentText, setShow }: Props) {
  const [errors, setErrors] = useState<Values>(Errors);
  const [totalError, setTotalError] = useState("");
  // const router = useRouter();
  const formik = useFormik<Values>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      const isValid = handleValid(formik.values.email, formik.values.password);

      if (isValid) {
        customAxios
          .post("/api/auth/sign-in", {
            email: formik.values.email,
            password: formik.values.password,
          })
          .then(({ data }) => {
            Cookie.setCookie("jwt", data.data.jwt);
            mutate("/api/user/me");
            setShow(false);
          })
          .catch((err) => {
            setTotalError(err.error.message);
          });
      }
    },
  });

  const handleValid = useCallback((email, password) => {
    if (
      Validation.email(email).result &&
      Validation.password(password).result
    ) {
      return true;
    }
    return false;
  }, []);

  function handleBlur(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "email") {
      if (!Validation.email(value).result)
        setErrors((prev) => ({
          ...prev,
          email: Validation.email(value).message,
        }));
      else {
        setErrors((prev) => ({
          ...prev,
          email: Validation.email(value).message,
        }));
      }
      return;
    }

    if (name === "password") {
      if (!Validation.password(value).result)
        setErrors((prev) => ({
          ...prev,
          password: Validation.password(value).message,
        }));
      else {
        setErrors((prev) => ({
          ...prev,
          password: Validation.password(value).message,
        }));
      }
    }
  }

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={handleBlur}
        value={formik.values.email}
      />
      {errors.email && (
        <ErrorMsg>
          <Warning />
          &nbsp; {errors.email}
        </ErrorMsg>
      )}
      <Input
        id="password"
        placeholder="Password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={handleBlur}
        value={formik.values.password}
      />
      {errors.password && (
        <ErrorMsg>
          <Warning />
          &nbsp; {errors.password}
        </ErrorMsg>
      )}
      {totalError && (
        <ErrorMsg>
          <Warning /> &nbsp;
          {totalError}
        </ErrorMsg>
      )}
      <Button
        type="submit"
        disabled={!handleValid(formik.values.email, formik.values.password)}
      >
        로그인
      </Button>
      <Div>
        <Text>
          비밀번호 찾기
          <Signup
            target="_blank"
            href="https://www.instagram.com/mju_likelion/"
            title="멋쟁이 사자처럼 at 명지대 자연 인스타그램"
            rel="noreferrer noopener"
          >
            어드민이시면 관리자에게 문의하세요.
          </Signup>
        </Text>
        <Text>
          새로 들어오셨나요?
          <Signup
            onClick={() => {
              setComponentText("Verify");
            }}
          >
            회원가입 하기
          </Signup>
        </Text>
        {/* <Text>
          비밀번호를 잊어버리셨나요?{" "}
          <Reset
            onClick={() => {
              setShow(false);
              router.push("/reset-password");
            }}
          >
            비밀번호 초기화
          </Reset>
        </Text> */}
      </Div>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 90%;
  height: 44px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.gray};

  font-size: 17px;
  line-height: 22px;
  border: 0px;
  padding-left: 16px;

  outline-color: #8ffcff;
  color: ${({ theme }) => theme.colors.primary.white};

  & + & {
    margin-top: 20px;
  }
`;

const ErrorMsg = styled.span`
  display: inline-flex;
  align-items: center;
  width: 90%;

  margin: 8px 0px;
  white-space: pre;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary.red};
`;

const Button = styled.button`
  display: flex;
  width: 90%;
  height: 44px;
  margin: 24px 0px;
  padding: 13px;

  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.white};
  background-color: ${({ theme }) => theme.colors.third.skyblue};
  border-radius: 6px;
  outline: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary.gray};
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 13px;
`;

// const Reset = styled.button`
//   display: inline;

//   font-size: 13px;
//   color: ${({ theme }) => theme.colors.third.skyblue};
// `;

const Signup = styled.a`
  display: inline-flex;
  margin: 4px;
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.third.skyblue} !important;
`;

export default Login;
