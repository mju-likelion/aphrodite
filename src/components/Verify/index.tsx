import { useCallback, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as valid from "@lib/etc/validation";
import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
interface Values {
  email: string;
}

type Props = {
  setComponentText: (s: string) => void;
};

function SignUp({ setComponentText }: Props) {
  const [error, setError] = useState<boolean>(false);
  const formik = useFormik<Values>({
    initialValues: {
      email: "",
    },
    onSubmit: () => {},
  });

  const handleSendConfirmMail = useCallback(() => {
    if (valid.email(formik.values.email)) {
      console.log("이메일 인증 링크 보냄");
    } else {
      setError(true);
    }
  }, [formik.values.email]);

  return (
    <>
      <FormWrapper onSubmit={(e) => e.preventDefault()}>
        <Input
          id="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {error && <ErrorMsg>유효한 이메일을 입력해주세요</ErrorMsg>}
        <Button
          type="button"
          disabled={!formik.values.email}
          onClick={handleSendConfirmMail}
          fullWidth
          color={theme.colors.third.skyblue}
          size="medium"
        >
          인증하기
        </Button>
      </FormWrapper>
      <Div>
        <Text>이미 회원이신가요? </Text>
        <Forget
          onClick={() => {
            setComponentText("Login");
          }}
        >
          로그인하기
        </Forget>
      </Div>
    </>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  font-size: 14px;

  button {
    padding: 12px 0px;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 44px;

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.gray};

  font-size: 17px;
  letter-spacing: -0.2px;

  outline-color: #8ffcff;
  color: #a0a0a0;

  padding-left: 16px;
`;

const ErrorMsg = styled.p`
  width: 100%;
  color: #f55442;
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
