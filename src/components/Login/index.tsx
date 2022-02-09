import { useCallback, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Validation } from "@lib/etc/validation";
import customAxios from "@lib/Axios";
import { useRouter } from "next/router";
import * as Cookie from "@lib/Cookie";

type Props = {
  setComponentText: (s: string) => void;
  setShow: (b: boolean) => void;
};

function Login({ setComponentText, setShow }: Props) {
  const [errors, setErrors] = useState<boolean>(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      const isValid = handleValid(formik.values.email, formik.values.password);

      if (!isValid) {
        setErrors(true);
      } else {
        // customAxios
        //   .post("/api/auth/sign-in", {
        //     email: formik.values.email,
        //     password: formik.values.password,
        //   })
        //   .then(({ data }) => {
        //     Cookie.setCookie("jwt", data.jwt);
        //     router.push("/");
        //   });
        setShow(false);
        router.push("/");
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

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        id="eamil"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {errors && <ErrorMsg>아이디 및 비밀번호를 확인해주세요</ErrorMsg>}
      <Button
        type="submit"
        disabled={!formik.values.email || !formik.values.password}
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
          <br />
          새로 들어오셨나요?
        </Text>
        <Signup
          onClick={() => {
            setComponentText("Verify");
          }}
        >
          회원가입 하기
        </Signup>
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
  text-align: center;
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
  margin-top: 10px;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.orange};
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
  display: inline;
  text-align: center;
  font-size: 13px;
`;

const Signup = styled.a`
  display: inline-flex;
  margin: 4px;
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.third.skyblue};
`;

interface Values {
  Email: string;
  Password: string;
}
export default Login;
