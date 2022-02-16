import { useCallback, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Validation } from "@lib/etc/validation";
import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
import customAxios from "@lib/Axios";
import Warning from "@lib/DesignSystem/Icon/Warning";

interface Values {
  email: string;
}

interface Props {
  setComponentText: (s: string) => void;
  setShow: (b: boolean) => void;
}

function SignUp({ setComponentText, setShow }: Props) {
  const [message, setMessage] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const formik = useFormik<Values>({
    initialValues: {
      email: "",
    },
    onSubmit: () => {},
  });

  const handleSendConfirmMail = useCallback((email) => {
    if (Validation.email(email).result) {
      setError(false);
      setMessage(true);
      // FIXME: 주석제거
      // customAxios.post("/api/auth/email-verify", {
      //   email,
      // });
    } else {
      setMessage(false);
      setError(true);
    }
  }, []);

  return (
    <>
      <FormWrapper onSubmit={(e) => e.preventDefault()}>
        <Input
          id="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {message && (
          <NoticeMsg>
            이메일로 인증메일이 발송되었습니다. 인증메일은 약 24시간 동안
            유효합니다. <br />
            유효 시간 이내에 확인해주세요. (메일이 도착하지 않았을 경우, 스팸
            메일함을 확인해주세요.)
          </NoticeMsg>
        )}
        {error && (
          <NoticeMsg error>
            <Warning />
            &nbsp;유효한 이메일을 입력해주세요
          </NoticeMsg>
        )}
        <Button
          type="button"
          disabled={!formik.values.email}
          onClick={() => handleSendConfirmMail(formik.values.email)}
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
  background-color: ${theme.colors.primary.gray};

  font-size: 17px;
  letter-spacing: -0.2px;

  outline-color: #8ffcff;
  color: #a0a0a0;

  padding-left: 16px;
`;

const NoticeMsg = styled.p<{ error: boolean }>`
  display: inline-flex;
  width: 100%;

  margin-top: 5px;
  color: ${theme.colors.primary.red};
  word-break: keep-all;

  ${({ error }) => (error ? `color : ${theme.colors.primary.red}` : "")}
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
  color: ${theme.colors.third.skyblue};
`;

export default SignUp;
