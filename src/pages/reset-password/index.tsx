import { Button } from "@lib/DesignSystem/Button";
import { Validation } from "@lib/etc/validation";
import { theme } from "@styles/theme";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

function ResetPassword() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState("");

  function handleClick() {
    if (!Validation.email(email).result) {
      setError(Validation.email(email).message);
      return;
    }

    setError("");

    axios
      .post("/api/auth/reset-password")
      .then((res) => {
        alert(res.data.message);
      })
      .catch((e) => {
        alert(e.error.message);
      });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setEmail(value);
  }

  return (
    <Container>
      <Title>이메일 입력</Title>
      <InputGroup>
        <Input
          type="email"
          placeholder="이메일 입력"
          name="email"
          onChange={handleChange}
          value={email}
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
        초기화 이메일 전송
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
export default ResetPassword;
