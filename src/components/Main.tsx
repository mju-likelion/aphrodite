import styled from "styled-components";

function Main() {
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
              모집 대상: 멋쟁이사자처럼(명지대자연) 10기 <br />
              모집 기간 : ~2022년 3월 11일까지 <br />
              <ApplyBtn>
                지원하기 ➡{/* <Arrow src="/images/ic-more.svg" /> */}
              </ApplyBtn>
            </ApplyIntro>
          </Apply>
        </SubMainText>
      </Container>
      <Bottom>
        <Image src="/images/codingimage.svg" />
        <CodingTextImage>
          <More>
            <Mju>멋쟁이사자처럼(명지대 자연)</Mju>
            <br />
            <Detail> 멋쟁이들의 동료상과 커리큘럼을 알고싶다면?</Detail>
            <br />
            <DetailLink>
              <a>자세히 보기 ➡</a>
            </DetailLink>
          </More>
        </CodingTextImage>
      </Bottom>
    </>
  );
}

const Container = styled.div`
  background-image: url("https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/main_background.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
`;
const MainText = styled.div`
  font-size: 30px;
  height: 260px;
  line-height: 260px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
  @media screen and (max-width: 424px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 50%;
  display: inline;
  @@media screen and (max-width: 424px) {
  }
`;

const Arrow = styled.img``;

const CodingTextImage = styled.div`
  background-image: url("/images/codingtext.svg");
  padding: 40px 0px 0px 40px;
  width: 50%;
  background-position: cover;
  display: inline-block;
  height: 300px;
`;

const SubMainText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 424px) {
    height: 100vh;
  }
`;

const SubText = styled.div`
  display: inline;
  font-size: 60px;
  color: #ff9e1b;
  @media screen and (max-width: 424px) {
    line-height: 70px;
    font-size: 40px;
    margin-bottom: 200px;
  }
`;
const Apply = styled.div`
  display: block;
  @media screen and (max-width: 424px) {
    margin-top: 160px;
    padding: 10px;
  }
`;
const ApplyIntro = styled.div`
  width: 280px;
  justify-content: center;
  text-align: right;
  @media screen and (max-width: 424px) {
    font-size: 12px;
  }
`;
const ApplyBtn = styled.div`
  width: 161px;
  float: right;
  height: 38px;
  background-color: #0087d1;
  text-align: center;
  border-radius: 5px;
  font-size: 25px;
  line-height: 38px;
  cursor: pointer;
  @media screen and (max-width: 424px) {
    font-size: 12px;
    height: 28px;
    width: 120px;
  }
  &:hover {
    background-color: #ff9e1b;
  }
`;
const Bottom = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 750px) {
    padding-top: 20px;
    display: inline;
  }
`;
const Mju = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;
  @media screen and (max-width: 424px) {
    font-size: 22px;
  }
`;
const Detail = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #a0a0a0;
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
`;
const DetailLink = styled.div`
  font-size: 16px;
  cursor: pointer;
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
  &:hover {
    color: #ff9e1b;
  }
`;
const More = styled.div`
  @media screen and (max-width: 424px) {
    padding: 10px 20px;
  }
`;
export default Main;
