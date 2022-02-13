import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useApplyDetail from "src/hooks/useApplyDetail";
import useQuestions from "src/hooks/useQuestions";

function Apply() {
  const apply = useApplyDetail().data.user;
  const answer = useApplyDetail().data.apply.answers;
  const question = useQuestions().data.questions;
  return (
    <ApplyWrapper>
      <ApplyList>
        <UserInfo>
          이름: {apply.name} <br />
          대학명: {apply.univ} <br />
          휴대폰: {apply.phone} <br />
        </UserInfo>
        {question.map((q, i) => (
          <>
            <ApplyQuestion>{q}</ApplyQuestion>
            <ApplyAnswer>{answer[i]}</ApplyAnswer>
          </>
        ))}
      </ApplyList>
    </ApplyWrapper>
  );
}
const ApplyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ApplyList = styled.div`
  width: 90%;
  padding: 20px;
`;
const UserInfo = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  font-size: 15px;
`;
const ApplyQuestion = styled.h4`
  align-items: left;
  margin-bottom: 20px;
  font-size: 20px;
`;
const ApplyAnswer = styled.div`
  font-size: 14px;
  padding-bottom: 50px;
  line-height: 25px;
`;

export default Apply;
