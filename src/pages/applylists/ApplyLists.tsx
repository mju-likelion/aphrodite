import styled from "styled-components";
import { theme } from "@styles/theme";
import { useState } from "react";
import useApplyLists from "@hooks/useApplyLists";
import totalCount from "@hooks/totalCount";
import SortPolygon from "@lib/DesignSystem/Icon/SortPolygon";
import { useRouter } from "next/router";
import axios from "axios";
import { INITIAL } from "@components/ApplyLists/constants";

function ApplyLists() {
  const [status, setStatus] = useState(INITIAL.STATUS);
  const [part, setPart] = useState(INITIAL.PART);
  const datas = useApplyLists();

  console.log(datas);

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

const ApplyContainer = styled.article``;

export default ApplyLists;
