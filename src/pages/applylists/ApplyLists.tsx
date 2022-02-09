import styled from "styled-components";
import { theme } from "@styles/theme";
import { useState } from "react";
import useApplyLists from "src/hooks/useApplyLists";
import totalCount from "src/hooks/totalCount";
import { INITIAL } from "../../components/Applylists/contants";

function ApplyLists() {
  const [status, setStatus] = useState(INITIAL.STATUS);
  const [part, setPart] = useState(INITIAL.PART);
  const users = useApplyLists().data.user;
  // swr
  // const { applies, isLoading, isError } = useApplyLists(
  // "https://jsonplaceholder.typicode.com/posts",
  // );

  // if (isLoading) {
  //   return <>is Loading</>;
  // }
  // if (isError) {
  //   return <>error</>;
  // }
  // const { count } = totalCount("https://randomuser.me/api/?results=5");
  const size = totalCount().meta.count;

  const statusKeys = [
    "completion",
    "first_out",
    "first_pass",
    "second_out",
    "second_in",
  ] as const;
  const statusNames = [
    "지원완료",
    "서류탈락",
    "서류합격",
    "면접탈락",
    "최종합격",
  ];
  const partKeys = ["manage", "design", "dev"] as const;
  const partNames = ["기획", "디자인", "개발"];

  return (
    <Container>
      <Title>
        명지대(자연) <br />
        지원서 리스트
      </Title>
      <FilterContainer>
        <div>
          <span>현황</span>
          {statusKeys.map((s, i) => (
            <label htmlFor={s} key={s}>
              <input
                type="checkbox"
                id={s}
                checked={status[s]}
                onChange={(e) => {
                  setStatus({
                    ...status,
                    [s]: e.target.checked,
                  });
                }}
              />
              {statusNames[i]}
            </label>
          ))}
        </div>
        <div>
          <span>직종</span>
          {partKeys.map((p, i) => (
            <label htmlFor={p} key={p}>
              <input
                type="checkbox"
                id={p}
                checked={part[p]}
                onChange={(e) => {
                  setPart({
                    ...part,
                    [p]: e.target.checked,
                  });
                }}
              />
              {partNames[i]}
            </label>
          ))}
        </div>
      </FilterContainer>
      <ApplyNum>지원자 {size}명</ApplyNum>
      <ApplySort>
        <ApplySelect>
          <option id="name_asc" value="name_asc">
            가나다순
          </option>
          <option id="time_asc" value="time_asc">
            최신순
          </option>
        </ApplySelect>
        <img src="/images/SortPolygon.svg" alt="arrow" />
      </ApplySort>
      <ApplyContainer>
        <span>번호</span>
        <span>이름</span>
        <span>학과</span>
        <span>이메일</span>
      </ApplyContainer>

      {users.map((s: any) => {
        return (
          <Line key={s.id}>
            <span>{s.id}</span>
            <span>{s.name}</span>
            <span>{s.major}</span>
            <span>{s.email}</span>
            <Apply>지원서보기</Apply>
          </Line>
        );
      })}
      <ApplyContainer />
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

  color: ${theme.colors.third.skyblue};
`;

const FilterContainer = styled.article`
  width: 100%;

  margin-top: 20px;

  padding: 20px;
  border: 3px solid ${theme.colors.third.skyblue};

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
  appearance: none;
`;

const ApplyContainer = styled.article`
  width: 100%;

  margin-top: 32px;
  padding: 10px;

  border-top: 5px solid ${theme.colors.third.skyblue};
  border-bottom: 2px solid ${theme.colors.third.skyblue};

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

  cursor: pointer;
`;

export default ApplyLists;
