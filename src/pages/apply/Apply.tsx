/* eslint-disable react/no-array-index-key */

import AnswerArea from "@components/Apply/AnswerArea";
import useShowNotice from "@hooks/useShowNotice";
import customAxios from "@lib/Axios";
import { theme } from "@styles/theme";
import _ from "lodash";
import { ChangeEvent, useReducer } from "react";
import styled from "styled-components";

interface AnswerListI {
  [key: string]: string;
}

interface ActionI {
  type: string;
  value: string;
}

const QUESTIONS = [
  "Q1. 대충 질문",
  "Q1. 대충 질문",
  "Q1. 대충 질문",
  "Q1. 대충 질문",
  "Q1. 대충 질문",
];

const ANSWERLIST: AnswerListI = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
};

function reducer(state: AnswerListI, action: ActionI) {
  switch (action.type) {
    case "1번":
      return {
        ...state,
        one: action.value,
      };
    case "2번":
      return {
        ...state,
        two: action.value,
      };
    case "3번":
      return {
        ...state,
        three: action.value,
      };
    case "4번":
      return {
        ...state,
        four: action.value,
      };
    case "5번":
      return {
        ...state,
        five: action.value,
      };
    default:
      return state;
  }
}

function Apply() {
  // TODO: 지원서 질문 API 호출
  // TODO: 지원자 호출 -> 답변을 AnswerArea의 value로
  const [answerLists, dispatch] = useReducer(reducer, ANSWERLIST);
  const { showNotice } = useShowNotice();

  function handleClickSave() {
    customAxios.put("/api/apply").catch((res) => {
      showNotice({
        message: `지원서가 임시저장 되었습니다.
        임시저장만으로는 제출되지않습니다.`,
      });
    });
  }

  function handleClickSubmit() {
    customAxios.put("/api/apply").then((res) => {
      alert(res.data.message);
    });
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;

    dispatch({
      type: name,
      value,
    });
  }

  return (
    <Container>
      <Inner>
        <Title>지원서</Title>
        {QUESTIONS.map((question, i) => (
          <AnswerArea
            key={i}
            question={question}
            name={`${i + 1}번`}
            onChange={handleChange}
            value={answerLists[Object.keys(answerLists)[i]]}
          />
        ))}
        <BtnContainer>
          <SaveBtn onClick={handleClickSave}>임시저장</SaveBtn>
          <SubmitBtn onClick={handleClickSubmit}>제출하기</SubmitBtn>
        </BtnContainer>
      </Inner>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;

  color: white !important;
`;

const Inner = styled.div`
  max-width: 824px;

  padding: 21px;
  margin: 0 auto;
`;

const Title = styled.h2`
  width: 100%;

  margin-top: 100px;
  margin-bottom: 72px;

  text-align: left;
  font-size: 40px;
  color: ${theme.colors.third.skyblue};
`;

const BtnContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-top: 32px;

  button + button {
    margin-left: 24px;
  }
`;

const SaveBtn = styled.button`
  width: 115px;
  height: 16px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  border-radius: 8px;

  color: white;
  background-color: ${theme.colors.primary.orange};
`;

const SubmitBtn = styled(SaveBtn)`
  background-color: ${theme.colors.third.skyblue};

  bottom: 117px;
`;

export default Apply;
