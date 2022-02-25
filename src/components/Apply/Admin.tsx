import customAxios from "@lib/Axios";
import { fetcher } from "@lib/Axios/fetcher";
import { theme } from "@styles/theme";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import useSWRImmutable from "swr/immutable";

const data = ["질문 1", "질문 2", "질문 3", "질문 4", "질문 5"];

function Admin() {
  //   const { data, isError, isLoading } = useSWRImmutable(
  //     "/api/questions",
  //     fetcher,
  //   );

  //   if (isLoading) {
  //     return <div>Loading</div>;
  //   }

  //   if (isError) {
  //     return <div>Error</div>;
  //   }

  const [questions, setQuestions] = useState(data);
  // const { data, isLoading, isError } = useUser("/api/users/:id");

  function handleClick() {
    customAxios.post("");
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>지원서 문항</Title>
        <button type="button" onClick={handleClick}>
          문항수정
        </button>
      </TitleWrapper>
      {questions &&
        questions.map((question, i) => (
          <Wrapper>
            <div>{question}</div>
            <label htmlFor={String(i)}>
              <input
                name={String(i)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { name, value } = e.target;

                  setQuestions((prev) =>
                    prev.map((d, idx) => (idx === Number(name) ? value : d)),
                  );
                }}
                value={question}
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

const TitleWrapper = styled.h2`
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
  & + & {
    margin-top: 32px;
  }
`;

export default Admin;
