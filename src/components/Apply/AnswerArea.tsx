import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  question: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function checkPropsEqual(prevProps: Props, nextProps: Props) {
  return prevProps.value === nextProps.value;
}

function AnswerArea({ question, name, value, onChange }: Props) {
  return (
    <Container>
      <Question>{question}</Question>
      <TextArea name={name} onChange={onChange} value={value} />
      <p>{value.length}자</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  margin: 0 auto;

  & + & {
    margin-top: 32px;
  }

  p {
    text-align: right;
  }
`;

const Question = styled.h6`
  font-size: 24px;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 824px;
  height: 300px;

  padding: 24px;
`;

export default React.memo(AnswerArea, checkPropsEqual);
