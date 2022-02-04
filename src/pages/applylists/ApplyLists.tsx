import styled from "styled-components";
import { theme } from "@styles/theme";
import { INITIAL } from "./constants";
import { useState } from "react";
import useApplyLists from "src/hooks/useApplyLists";
import totalCount from "src/hooks/totalCount";
import useSWR from "swr";

function ApplyLists() {
  const [status, setStatus] = useState(INITIAL.STATUS);
  const [part, setPart] = useState(INITIAL.PART);
  const [pageIndex, setPageIndex] = useState(1);

  const datas = useApplyLists();
  const size = totalCount().meta.count;
  const user = Object.values(datas.data)[0];
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

  const ApplyListFunc = () => {
    //swr테스트
    const { data, error } = useSWR(
      "https://jsonplaceholder.typicode.com/posts",
    );
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    //목업데이터
    return user.map((user) => {
      return (
        <Line key={user.id}>
          <span>{user.id}</span>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.major}</span>
          <Apply>지원서보기</Apply>
        </Line>
      );
    });
  };

  //페이지네이션 (총페이지갯수 / 한번에 보여줄 지원서10개 )
  const pageNumbers = [];
  for (let i = 1; i <= size / 10; i++) {
    pageNumbers.push(i);
  }

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
            <label htmlFor={s} key={i}>
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
          {partKeys.map((s, i) => (
            <label htmlFor={s} key={i}>
              <input
                type="checkbox"
                id={s}
                checked={part[s]}
                onChange={(e) => {
                  setPart({
                    ...part,
                    [s]: e.target.checked,
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
        <ApplySorting src="/images/SortPolygon.svg" />
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

const ApplySorting = styled.img``;

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
