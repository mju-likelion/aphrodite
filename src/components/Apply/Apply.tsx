/* eslint-disable react/no-array-index-key */
import _ from "lodash";
import { ChangeEvent, useReducer, useState } from "react";
import styled from "styled-components";
import AnswerArea from "@components/Apply/AnswerArea";
import useQuestions from "@hooks/useQuestions";
import useShowNotice from "@hooks/useShowNotice";
import customAxios from "@lib/Axios";
import { theme } from "@styles/theme";
import useApply from "@hooks/useApply";
import { PART_LISTS } from "./constants";

interface AnswerListI {
  [key: string]: string;
}

interface ActionI {
  type: string;
  value: string;
}

function reducer(state: AnswerListI, action: ActionI) {
  switch (action.type) {
    case "one":
      return {
        ...state,
        one: action.value,
      };
    case "two":
      return {
        ...state,
        two: action.value,
      };
    case "three":
      return {
        ...state,
        three: action.value,
      };
    case "four":
      return {
        ...state,
        four: action.value,
      };
    case "five":
      return {
        ...state,
        five: action.value,
      };
    case "six":
      return {
        ...state,
        six: action.value,
      };
    case "seven":
      return {
        ...state,
        seven: action.value,
      };
    case "eight":
      return {
        ...state,
        eight: action.value,
      };
    case "nine":
      return {
        ...state,
        nine: action.value,
      };
    case "ten":
      return {
        ...state,
        ten: action.value,
      };
    default:
      return state;
  }
}

function Apply() {
  // TODO: 지원서 질문 API 호출
  // TODO: 지원자 호출 -> 답변을 AnswerArea의 value로
  const { questions } = useQuestions("/api/questions");
  const { data } = useApply("/api/apply/me");
  const ANSWERLIST = {
    data: {
      apply: {
        part: data?.apply.part,
        one: data?.apply.answer[0],
        two: data?.apply.answer[1],
        three: data?.apply.answer[2],
        four: data?.apply.answer[3],
        five: data?.apply.answer[4],
        six: data?.apply.answer[5],
        seven: data?.apply.answer[6],
        eight: data?.apply.answer[7],
        nine: data?.apply.answer[8],
        ten: data?.apply.answer[9],
      },
    },
  };
  const [answerLists, answerDispatch] = useState(ANSWERLIST);
  const { showNotice } = useShowNotice();
  function handleClickSave() {
    customAxios.put("/api/apply", answerLists).then(() => {
      showNotice({
        message: `지원서가 임시저장 되었습니다.
          임시저장만으로는 제출되지않습니다.`,
      });
    });
  }

  function handleClickSubmit() {
    customAxios
      .post("/api/apply", answerLists)
      .then((res) => {
        alert(res.data?.data?.message);
      })
      .catch((err) => {
        alert(err.response.data?.error.message);
      });
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    answerDispatch({
      type: name,
      value,
    });
  }
  console.log("aaa", answerLists, ANSWERLIST);
  console.log();

  return (
    <Container>
      <Inner>
        <Title>지원서</Title>
        <FilterContainer>
          <span>직종</span>
          <select title="part">
            {PART_LISTS.map(({ name, value }, i) => (
              <option key={i} value={value}>
                {name}
              </option>
            ))}
          </select>
        </FilterContainer>
        {questions?.map((question, i) => (
          <AnswerArea
            key={i}
            question={question}
            name={`${i + 1}번`}
            onChange={handleChange}
            value={answerLists?.data?.apply.one}
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

const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  line-height: 100%;

  padding-bottom: 30px;

  > div {
    display: flex;
  }

  label {
    width: keep-all;
  }

  span {
    font-size: 20px;
    margin-right: 24px;
  }

  label + label {
    margin-left: 16px;
  }

  @media screen and (max-width: 424px) {
    div {
      flex-direction: column;
    }
  }
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
