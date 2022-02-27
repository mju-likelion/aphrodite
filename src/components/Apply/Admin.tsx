import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

import useQuestions from "@hooks/useQuestions";
import customAxios from "@lib/Axios";
import { theme } from "@styles/theme";
import { useRouter } from "next/router";
import useUser from "@hooks/useUser";
import { isEqual } from "lodash";

function Admin() {
  const { questions } = useQuestions("api/questions");
  const [nextQuestion, setNextQuestions] = useState(questions);
  const { isAdmin } = useUser("/api/user/me");

  const router = useRouter();

  function handleClick() {
    customAxios.post("");
  }

  useEffect(() => {
    if (!isAdmin) {
      alert("접근이 제한되었습니다");
      router.back();
    }
  }, []);

  useEffect(() => {
    if (!isEqual(nextQuestion, questions)) {
      setNextQuestions(questions);
    }
  }, [questions]);

  return (
    <Container>
      <TitleWrapper>
        <Title>지원서 문항</Title>
        <button type="button" onClick={handleClick}>
          문항수정
        </button>
      </TitleWrapper>
      {nextQuestion &&
        questions &&
        questions.map((question, i) => (
          <Wrapper>
            <div>{question}</div>
            <label htmlFor={String(i)}>
              <input
                name={String(i)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { name, value } = e.target;

                  setNextQuestions((prev) =>
                    prev?.map((d, idx) => (idx === Number(name) ? value : d)),
                  );
                }}
                value={nextQuestion[i]}
              />
            </label>
            <br />
          </Wrapper>
        ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  max-width: 824px;

  margin: 0 auto;

  input {
    width: 100%;
  }

  label + label {
    margin-top: 32px;
  }

  @media screen and (max-width: 500px) {
    padding: 21px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;

  margin-top: 100px;

  margin-bottom: 72px;

  button {
    border-radius: 8px;
    padding: 8px 24px;

    color: white;
    background-color: ${theme.colors.primary.orange};

    font-size: 18px;
  }
`;

const Title = styled.h2`
  color: ${theme.colors.third.skyblue};
`;

const Wrapper = styled.div`
  input {
    padding: 10px;
  }
  & + & {
    margin-top: 32px;
  }
`;

export default Admin;
