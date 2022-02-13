import styled from "styled-components";
import { useState } from "react";
import useUser from "src/hooks/useUser";
import Router, { useRouter } from "next/router";
import Arrow from "@lib/DesignSystem/Icon/Arrow";

function Main() {
  const { user, isLoading, isError } = useUser("https://randomuser.me/api/");
  const router = useRouter();

  function MovedPage() {
    if (user) router.push("/apply");
    else router.push("/applylists");
  }

  // const { user, isLoading, isError } = useUser("/api/users/:id");

  return (
    <>
      <Container>
        <MainText>
          프로그래밍으로 당신의 인생을 바꿔보세요! <br />
        </MainText>
        <SubMainText>
          <SubText>
            HACK
            <br />
            YOUR
            <br />
            LIFE
            <br />
          </SubText>
          <Apply>
            <ApplyIntro>
              {user ? (
                <p>멋쟁이사자처럼(명지대자연) 10기</p>
              ) : (
                <p>
                  모집 대상: 멋쟁이사자처럼(명지대자연) 10기 <br />
                  모집 기간 : ~2022년 3월 11일까지 <br />
                </p>
              )}

              <ApplyBtn onClick={() => MovedPage()}>
                {user ? `지원서 보기 ` : `지원하기 `}
                <Arrow />
              </ApplyBtn>
              {user && (
                <QuestionBtn onClick={() => router.push("/")}>
                  문항 제출/수정
                </QuestionBtn>
              )}
            </ApplyIntro>
          </Apply>
        </SubMainText>
      </Container>
      <Bottom>
        <CodingImg src="/images/codingimage.png" />
        <CodingText>
          <More>
            <Mju>멋쟁이사자처럼(명지대 자연)</Mju>
            <br />
            <Detail> 멋쟁이들의 동료상과 커리큘럼을 알고싶다면?</Detail>
            <br />
            <DetailLink onClick={() => router.push("/")}>
              자세히 보기 <Arrow />
            </DetailLink>
            <CodingTextImage src="images/codingtext.png" />
          </More>
        </CodingText>
      </Bottom>
    </>
  );
}

const Container = styled.article`
  width: 100%;
  height: 640px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-image: url("https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/main_background.png");
  background-position: center;
  background-size: cover;

  overflow-y: auto !important;
`;

const MainText = styled.div`
  width: 100%;

  text-align: center;
  font-size: 30px;
  font-weight: bold;

  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: none;
  }
`;

const SubMainText = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: block;
    padding: 10px;
  }
`;

const SubText = styled.div<{ theme: object }>`
  display: inline;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.primary.orange};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: block;

    margin-top: 100px;
    font-size: 40px;
  }
`;

const Apply = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    margin-top: 100px;
    padding: 10px;
  }
`;

const ApplyIntro = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  text-align: right;

  p {
    line-height: 25px;
  }
`;

const ApplyBtn = styled.button<{ theme: object }>`
  width: 165px;
  height: 38px;

  border: none;
  border-radius: 5px;
  opacity: 0.8;

  background-color: ${({ theme }) => theme.colors.third.skyblue};
  color: white;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & + & {
    margin-top: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 120px;
    height: 28px;

    font-size: 12px;
  }
`;

const QuestionBtn = styled(ApplyBtn)`
  background-color: ${({ theme }) => theme.colors.primary.orange};

  &:hover {
    opacity: 1;
  }
`;

const CodingImg = styled.img`
  width: 50%;
  height: 300px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 100%;

    margin-top: 80px;
  }
`;

const CodingText = styled.div`
  width: 50%;
  height: 300px;
  padding: 40px 0 0 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: flex;
    width: 100%;
    padding: 0 0 0 40px;

    align-items: center;
  }
`;
const CodingTextImage = styled.img`
  display: absolute;
  width: 50%;
  margin: -100px 0 0 150px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: none;

    padding: 0;
  }
`;
const Mju = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 22px;
  }
`;

const Detail = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: #a0a0a0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 16px;
  }
`;

const DetailLink = styled.div`
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 16px;
  }

  &:hover {
    color: #ff9e1b;
  }
`;

const More = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 100%;
  }
`;

const Bottom = styled.article`
  display: relative;

  display: flex;
  align-items: center;

  padding-top: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 100%;
    flex-direction: column;
    padding-top: 20px;
  }
`;

export default Main;
