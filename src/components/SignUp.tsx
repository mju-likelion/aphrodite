import { useState } from "react";
import Modal from "@lib/DesignSystem/Modal/Modal";
import styled from "styled-components";
import { useFormik } from "formik";
import Login from "./Login";

function SignUp() {
  const [show, setShow] = useState(false);
  const formik = useFormik<Values>({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: () => {},
  });

  return (
    <>
      <FormWrapper>
        <Input
          id="Email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.Email}
        />
        <Button disabled={!formik.values.Email}>회원가입</Button>
      </FormWrapper>
      <Div>
        <Text>이미 회원이신가요? </Text>
        <Forget
          onClick={() => {
            setShow(true);
          }}
        >
          로그인하기
        </Forget>
      </Div>
      <Modal
        show={show}
        width={376}
        height={456}
        title="로그인"
        onClose={() => {
          setShow(false);
        }}
      >
        <Login />
      </Modal>
    </>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 336px;
  height: 44px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.gray};
  margin-bottom: 24px;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  border: 0px;
  outline-color: #8ffcff;
  padding-left: 16px;

  color: #a0a0a0;
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
const Div = styled.div`
  text-align: center;
`;
const Text = styled.div`
  display: inline;
  text-align: center;
  font-size: 13px;
`;
const Forget = styled.a`
  display: inline-flex;
  margin: 4px;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.third.skyblue};
`;
export default SignUp;
