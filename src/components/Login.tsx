import { useState } from "react";
import Modal from "@lib/DesignSystem/Modal/Modal";
import styled from "styled-components";
import { useFormik } from "formik";
import SignUp from "./SignUp";
function Login() {
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Input
          id="Email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.Email}
        />
        <Input
          id="Password"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.Password}
        />
        <Button
          type="submit"
          disabled={!formik.values.Email || !formik.values.Password}
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
              setSignup(true);
            }}
          >
            회원가입 하기
          </Signup>
        </Div>
        <Modal
          show={isSignup}
          width={376}
          height={456}
          title="회원가입"
          onClose={() => {
            setSignup(false);
          }}
        >
          <SignUp />
        </Modal>
      </FormWrapper>
    </>
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
  width: 336px;
  height: 44px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.gray};
  margin-bottom: 24px;
  font-size: 17px;
  line-height: 22px;
  border: 0px;
  padding-left: 16px;
  outline-color: #8ffcff;
`;

const Button = styled.button`
  display: flex; 
  width: 336px;
  height: 44px;
  margin-bottom: 24px;
  padding: 13px;

  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.white};
  background-color: ${({ theme }) => theme.colors.third.skyblue};
  border-radius: 6px;
  outline: none;
};

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
