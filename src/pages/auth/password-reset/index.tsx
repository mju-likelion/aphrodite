import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { Validation } from "@lib/etc/validation";

// 여기서 이메일 인증 api 호출
function PasswordReset() {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState("");

  const router = useRouter();

  function handleClick() {
    if (password !== passwordConfirm) {
      setError("비밀번호가 서로 일치하지 않습니다");
      return;
    }

    if (
      !Validation.password(password).result ||
      !Validation.password(passwordConfirm).result
    ) {
      setError(Validation.password(password).message);
      return;
    }

    setError("");

    axios.post("/api/auth/reset-password");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "password":
        setPassword(value);
        return;
      case "passwordConfirm":
        setPasswordConfirm(value);
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <InputGroup>
        <Input
          type="password"
          placeholder="새 비밀번호"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="새 비밀번호 확인"
          onChange={handleChange}
          value={passwordConfirm}
        />
      </InputGroup>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Button
        type="button"
        fullWidth
        color={theme.colors.third.skyblue}
        size="large"
        onClick={handleClick}
      >
        변경하기
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
  padding: 6px 0px;
  color: ${theme.colors.primary.red};
`;

export default PasswordReset;
