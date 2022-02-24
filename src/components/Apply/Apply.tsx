/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
import { isEmpty, isEqual } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import AnswerArea from "@components/Apply/AnswerArea";
import useQuestions from "@hooks/useQuestions";
import useShowNotice from "@hooks/useShowNotice";
import customAxios from "@lib/Axios";
import { theme } from "@styles/theme";
import useApply from "@hooks/useApply";
import { AnswerNames, PART_LISTS } from "./constants";

interface AnswerList {
  [key: string]: string;
}

function Apply() {
  // TODO: 지원서 질문 API 호출
  // TODO: 지원자 호출 -> 답변을 AnswerArea의 value로
  const { questions } = useQuestions("/api/questions");
  const { data } = useApply("/api/apply/me");

  const ANSWERLIST: AnswerList = {
    part: data?.data.apply.part || "design",
    one: data?.data.apply.answers[0] || "",
    two: data?.data.apply.answers[1] || "",
    three: data?.data.apply.answers[2] || "",
    four: data?.data.apply.answers[3] || "",
    five: data?.data.apply.answers[4] || "",
  };

  const [answers, setAnswers] = useState<AnswerList>(ANSWERLIST);

  const { showNotice } = useShowNotice();
  function handleClickSave() {
    customAxios
      .put("/api/apply", { data: { apply: { ...answers } } })
      .then(() => {
        showNotice({
          message: `지원서가 임시저장 되었습니다.
          임시저장만으로는 제출되지않습니다.`,
        });
      })
      .catch((err) => {
        alert(err.error.message);
      });
  }

  function handleClickSubmit() {
    const hasEmpty = handleCheckEmpty();

    if (hasEmpty) {
      alert("빈 칸이 존재합니다. 내용을 입력해주세요");
      return;
    }
    const check = window.confirm(
      "제출한 이후엔 취소할 수 없습니다 정말 제출 하시겠습니까?",
    );
    if (check) {
      customAxios
        .post("/api/apply", { data: { apply: { ...answers } } })
        .then((res) => {
          showNotice({ message: res.data?.data.message });
        })
        .catch((err) => {
          alert(err.error.message);
        });
    }
  }

  function handleCheckEmpty() {
    return !isEmpty(Object.values(answers).filter((v) => isEmpty(v)));
  }

  function handleChange(
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (!isEqual(answers, ANSWERLIST)) {
      setAnswers(ANSWERLIST);
    }
  }, [data]);

  return (
    <Container>
      <Inner>
        <Title>지원서</Title>
        <FilterContainer>
          <span>직종</span>
          <select title="part" name="part" onChange={handleChange}>
            {PART_LISTS.map(({ name, value }, i) => (
              <option key={i} value={value}>
                {name}
              </option>
            ))}
          </select>
        </FilterContainer>
        {questions?.slice(0, 5).map((question, i) => (
          <AnswerArea
            key={i}
            question={`${question} ${
              i !== 4 ? `(500자 내외)` : `(300자 내외)`
            }`}
            name={`${AnswerNames[i]}`}
            onChange={handleChange}
            value={answers[`${AnswerNames[i]}`]}
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