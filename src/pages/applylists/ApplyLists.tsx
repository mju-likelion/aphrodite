import styled from "styled-components";
import { theme } from "@styles/theme";
import { INITIAL } from "./constants";
import { useState } from "react";
import useApplyLists from "src/hooks/useApplyLists";

function ApplyLists() {
  const [status, setStatus] = useState(INITIAL.STATUS);
  const [part, setPart] = useState(INITIAL.PART);
  const data = useApplyLists();
  const size = data.data.user.length;
  console.log(data.data.user);

  const Rendering = () => {
    let result = [];
    for (let i = 0; i < size; i += 1) {
      let line = (
        <>
          <Line>
            <span key={i}>{data.data.user[i].id}</span>
            <span>{data.data.user[i].name}</span>
            <span>{data.data.user[i].major}</span>
            <span>{data.data.user[i].email}</span>
            <Apply>지원서보기</Apply>
          </Line>
        </>
      );

      result.push(line);
    }
    return result;
  };

  return (
    <Container>
      <Title>지원서 리스트</Title>
      <FilterContainer>
        <div>
          <span>현황</span>
          <label htmlFor="completion">
            <input type="checkbox" id="completion" value="completion" />
            지원완료
          </label>
          <label htmlFor="first_out">
            <input type="checkbox" id="first_out" value="first_out" />
            서류탈락
          </label>
          <label htmlFor="first_pass">
            <input type="checkbox" id="first_pass" value="first_pass" />
            서류합격
          </label>
          <label htmlFor="second_out">
            <input type="checkbox" id="second_out" value="second_out" />
            면접탈락
          </label>
          <label htmlFor="second_pass">
            <input type="checkbox" id="second_pass" value="second_pass" />
            최종합격
          </label>
        </div>
        <div>
          <span>직종</span>
          <label htmlFor="projectOwner">
            <input type="checkbox" id="projectOwner" value="projectOwner" />
            기획 지원자
          </label>
          <label htmlFor="design">
            <input type="checkbox" id="design" value="design" />
            디자인 지원자
          </label>
          <label htmlFor="develop">
            <input type="checkbox" id="develop" value="develop" />
            개발 지원자
          </label>
        </div>
      </FilterContainer>
      <ApplyNum>지원자 명</ApplyNum>
      <ApplySort>
        가나다순
        <ApplySorting src="/images/SortPolygon.svg" />
      </ApplySort>
      <ApplyContainer>
        <span>번호</span>
        <span>이름</span>
        <span>학과</span>
        <span>이메일</span>
      </ApplyContainer>

      <>{Rendering()}</>

      {/* <Line>
        
        <span>{data?.data.user[0].id}</span>
        <span>{data?.data.user[0].name}</span>
        <span>{data?.data.user[0].major}</span>
        <span>{data?.data.user[0].email}</span>
        <Apply>지원서보기</Apply>
      </Line> */}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  color: white !important;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  color: ${theme.colors.third.skyblue};
`;

const FilterContainer = styled.article`
  width: 100%;

  margin-top: 20px;

  padding: 20px;
  border: 3px solid ${theme.colors.third.skyblue};

  color: white;

  label {
    margin-left: 10px;
  }

  div + div {
    margin-top: 10px;
  }

  label + label {
    margin-left: 10px;
  }
`;
const ApplyNum = styled.div`
  width: 100%;

  margin-top: 20px;

  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;
const ApplySort = styled.div`
  width: 100%;

  margin-top: 20px;

  font-size: 16px;
  text-align: right;
`;
const ApplySorting = styled.img``;

const ApplyContainer = styled.article`
  width: 100%;

  padding: 10px;
  border-top: 5px solid ${theme.colors.third.skyblue};
  border-bottom: 2px solid ${theme.colors.third.skyblue};

  font-size: 20px;
  font-weight: bold;

  span + span {
    margin: 0 100px;
  }
`;
const Apply = styled.div`
  display: inline-flex;
  width: 70px;
  height: 30px;

  margin-left: 130px;
  padding-top: 7px;

  flex-direction: column;
  text-align: center;
  font-size: 13px;

  border: none;
  border-radius: 8px;

  background-color: rgba(0, 135, 209, 0.5);
  color: white;

  cursor: pointer;
`;
const Line = styled.div`
  width: 100%;
  margin-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  font-size: 16px;
  border-bottom: 2px solid #28292a;

  span + span {
    margin: 0 50px;
    padding-left: 60px;
  }
`;

export default ApplyLists;
