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
  setComponentText: (text: string) => void;
}

function SignUp({ setComponentText }: Props) {
  const [message, setMessage] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const formik = useFormik<Values>({
    initialValues: {
      email: "",
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });

  const handleSendConfirmMail = useCallback((email) => {
    if (Validation.email(email).result) {
      try {
        setError(false);
        setMessage(true);
        customAxios.post("/api/auth/email-verify", {
          email,
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      setMessage(false);
      setError(true);
    }
  }, []);

  return (
    <>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {message && (
          <NoticeMsg>
            <Warning color="#FF9E1B" height={16} width={16} />
            <p>
              이메일로 인증메일이 발송되었습니다. 인증메일은 약 24시간 동안
              유효합니다. <br />
              유효 시간 이내에 확인해주세요. (메일이 도착하지 않았을 경우, 스팸
              메일함을 확인해주세요.)
            </p>
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

const NoticeMsg = styled.div<{ error?: boolean }>`
  display: flex;
  align-items: center;

  margin-top: 5px;
  color: ${theme.colors.primary.orange};
  word-break: keep-all;

  p {
    margin-left: 5px;
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
  color: ${theme.colors.third.skyblue};
`;

export default SignUp;
