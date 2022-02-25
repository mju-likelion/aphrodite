import styled from "styled-components";
import useApplyDetail from "src/hooks/useApplyDetail";
import useQuestions from "src/hooks/useQuestions";

interface Props {
  detail: number;
  nameHide: boolean;
}

function Apply({ detail, nameHide }: Props) {
  const { questions } = useQuestions("http://3.35.11.129/api/questions");
  const { answer } = useApplyDetail(`http://3.35.11.129/api/apply/${detail}`);
  return (
    <ApplyWrapper>
      <ApplyList>
        <UserInfo>
          이름 :
          {nameHide
            ? answer?.user.name.replace(/(?<=.{1})./gi, "*")
            : answer?.user.name}
          <br />
          전공 : {answer?.user.major} <br />
          휴대폰 : {answer?.user.phone} <br />
          지원분야 : {answer?.apply.part}
        </UserInfo>
        {questions?.map((q: any, i: any) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>
            <ApplyQuestion>{q}</ApplyQuestion>
            <ApplyAnswer>{answer?.apply.answers[i]}</ApplyAnswer>
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
