/* global window */
import { Button } from "@lib/DesignSystem/Button";
import { theme } from "@styles/theme";
import { useRouter } from "next/router";
import styled from "styled-components";

function SignUp() {
  const router = useRouter();
  const { token } = router.query;

  return (
    <Container>
      <Title>회원가입</Title>
      <InputGroup>
        <Input
          type="email"
          placeholder="이메일"
          defaultValue={token}
          disabled
        />
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />
        <Input type="password" placeholder="휴대폰 번호" />
        <Input type="password" placeholder="학교" />
        <Input type="password" placeholder="전공" />
      </InputGroup>
      <label htmlFor="termsOfUse">
        <input type="checkbox" id="termsOfUse" /> 이용약관에 동의 합니다
      </label>
      <Button
        type="submit"
        fullWidth
        color={theme.colors.third.skyblue}
        size="large"
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
    margin-top: 15px;
  }
`;

export default SignUp;
