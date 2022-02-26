import _isNil from "lodash/isNil";
import styled from "styled-components";
import useUser from "src/hooks/useUser";
import { useRouter } from "next/router";
import Arrow from "@lib/DesignSystem/Icon/Arrow";

function Main() {
  const { user, isLoading, error, isAdmin } = useUser("/api/user/me");
  const router = useRouter();

  function handleClickApply() {
    if (_isNil(user)) {
      alert("로그인을 해주세요");
      return;
    }
    if (isAdmin) router.push("/applylists");
    else router.push("/apply");
  }

  return (
    <Container>
      <ImageContainer>
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
              {user && isAdmin && <p>멋쟁이사자처럼(명지대자연) 10기</p>}
              {!isAdmin && (
                <p>
                  모집 대상: 멋쟁이사자처럼(명지대자연) 10기 <br />
                  모집 기간 : ~2022년 3월 11일까지 <br />
                </p>
              )}
              <ApplyBtn onClick={handleClickApply}>
                {isAdmin ? `지원서 보기 ` : `지원하기 `}
                <Arrow />
              </ApplyBtn>
              {isAdmin && (
                <QuestionBtn onClick={() => router.push("/apply/admin")}>
                  문항 제출/수정
                </QuestionBtn>
              )}
            </ApplyIntro>
          </Apply>
        </SubMainText>
      </ImageContainer>
      <Bottom>
        <CodingImg src="/images/codingimage.png" />
        <CodingText>
          <More>
            <Mju>멋쟁이사자처럼(명지대 자연)</Mju>
            <br />
            <Detail> 멋쟁이들의 동료상과 커리큘럼을 알고싶다면?</Detail>
            <br />
            <DetailLink href="https://nana-iota.vercel.app/">
              자세히 보기 <Arrow />
            </DetailLink>
          </More>
        </CodingText>
      </Bottom>
      <CodingTextImageContainer>
        <CodingTextImage src="images/codingtext.png" />
      </CodingTextImageContainer>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: auto;
`;

const ImageContainer = styled.div`
  width: 100%;

  height: 640px;
  background-image: url("https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/main_background.png");
  background-position: center;
  background-size: cover;
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
  justify-content: space-between;
  align-items: center;

  padding: 0px 8%;

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

  display: flex;
  align-items: center;
  justify-content: center;

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
  line-height: 100%;

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

const Bottom = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  padding-top: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 100%;
    flex-direction: column;
    padding-top: 20px;
  }
`;

const More = styled.div``;

const CodingTextImageContainer = styled.div`
  width: 80%;

  margin-top: -100px;

  text-align: right;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: none;
  }
`;

const CodingTextImage = styled.img`
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

const DetailLink = styled.a`
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 16px;
  }

  &:hover {
    color: #ff9e1b;
  }
`;

export default Main;
