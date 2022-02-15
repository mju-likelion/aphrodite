/* eslint-disable react/no-array-index-key */

import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useApplyDetail from "src/hooks/useApplyDetail";
import useQuestions from "src/hooks/useQuestions";

function Apply() {
  const datas = useApplyDetail().data;
  const answer = useApplyDetail().data.apply.answers;
  const question = useQuestions().data.questions;
  return (
    <ApplyWrapper>
      <ApplyList>
        <UserInfo>
          이름 : {datas.user.name} <br />
          대학 : {datas.user.univ} <br />
          전공 : {datas.user.major} <br />
          휴대폰 : {datas.user.phone} <br />
          지원분야 : {datas.apply.part}
        </UserInfo>
        {question.map((q, i) => (
          <div key={i}>
            <ApplyQuestion>{q}</ApplyQuestion>
            <ApplyAnswer>{answer[i]}</ApplyAnswer>
          </div>
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
  margin: 20px 0 50px 0;
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
