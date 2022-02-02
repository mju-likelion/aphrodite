import styled from "styled-components";
import { theme } from "@styles/theme";
import { INITIAL } from "./constants";
import { useState } from "react";
import useApplyLists from "src/hooks/useApplyLists";
import useSWR from "swr";
import { fetcher } from "@lib/Axios/fetcher";

function ApplyLists() {
  const [status, setStatus] = useState(INITIAL.STATUS);
  const [part, setPart] = useState(INITIAL.PART);
  const datas = useApplyLists();
  const size = datas.data.user.length;

  const ApplyListFunc = () => {
    const { data, error } = useSWR("https://randomuser.me/api/", fetcher);
    console.log("data: ", data);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    // 데이터 렌더링

    let result = [];
    for (let i = 1; i <= size; i += 1) {
      const user = datas.data.user.find((data) => {
        return data.id === i;
      });
      console.log(user);
      let line = (
        <>
          <Line>
            <span key={i}>{Object.values(user)[0]}</span>
            <span>{Object.values(user)[1]}</span>
            <span>{Object.values(user)[2]}</span>
            <span>{Object.values(user)[3]}</span>
            {/* swr 테스트 코드 */}
            {/* <span> {data.results[0].gender}</span>
            <span> {data.results[0].name.first}</span>
            <span> {data.results[0].email}</span>
            <span> {data.results[0].email}</span> */}
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
      <Title>
        명지대(자연) <br />
        지원서 리스트
      </Title>
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
      <ApplyNum>지원자 {size}명</ApplyNum>
      <ApplySort>
        <ApplySelect name="sort">
          <option value="가나다순">가나다순</option>
          <option value="최신순">최신순</option>
        </ApplySelect>
      </ApplySort>
      <ApplyContainer>
        <span>번호</span>
        <span>이름</span>
        <span>학과</span>
        <span>이메일</span>
      </ApplyContainer>

      {ApplyListFunc()}
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
  margin-top: 40px;
  text-align: left;
  font-size: 40px;
  font-weight: normal;
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

  select {
    background: none;
    color: white;
    border: 0px;
  }
`;
const ApplySelect = styled.select`
  display: inline;
  background-color: none;
  color: #444;
  background-color: #fff;

  option {
    background-color: green;
    font-weight: bold;
    color: red;
  }
`;

const ApplySorting = styled.img``;

const ApplyContainer = styled.article`
  width: 100%;

  padding: 10px;
  border-top: 5px solid ${theme.colors.third.skyblue};
  border-bottom: 2px solid ${theme.colors.third.skyblue};
  margin-top: 32px;

  font-size: 20px;
  font-weight: bold;

  span + span {
    padding: 0 100px;
  }
`;

const Line = styled.div`
  width: 100%;
  margin-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  font-size: 16px;

  border-bottom: 2px solid #28292a;
  span {
    display: inline-block;
    width: 40px;
  }
  span + span {
    width: 230px;
    padding-left: 80px;
  }
`;
const Apply = styled.div`
  display: inline-block;
  width: 70px;
  height: 30px;
  padding-top: 7px;
  margin-left: 120px;
  flex-direction: column;
  text-align: center;
  font-size: 13px;

  border: none;
  border-radius: 8px;

  background-color: rgba(0, 135, 209, 0.5);
  color: white;

  cursor: pointer;
`;
export default ApplyLists;
