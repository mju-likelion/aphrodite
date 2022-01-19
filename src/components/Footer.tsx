import styled from "styled-components";

function Footer() {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <FooterSelf>
      <MaxWidthWrapper>
        <MjuLogo> LIKE LION | MJU Nature © {years} </MjuLogo>
        <MjuSnsWrapper>
          <SnsBlock>
            <a
              target="_blank"
              href="https://www.facebook.com/likelionatmju/"
              rel="noreferrer"
              title="멋쟁이 사자처럼 at 명지대 자연 페이스북"
            >
              <SnsImage
                src="/images/sns-icon-facebook.svg"
                width={19}
                height={19}
                alt="멋쟁이 사자처럼 at 명지대 자연 페이스북"
              />
            </a>
          </SnsBlock>
          <SnsBlock>
            <SnsBetweenLine />
          </SnsBlock>
          <SnsBlock>
            <a
              target="_blank"
              href="https://www.instagram.com/mju_likelion/"
              title="멋쟁이 사자처럼 at 명지대 자연 인스타그램"
              rel="noreferrer"
            >
              <SnsImage
                src="/images/sns-icon-instagram.svg"
                width={19}
                height={19}
                alt="멋쟁이 사자처럼 at 명지대 자연 인스타그램"
              />
            </a>
          </SnsBlock>
          <SnsBlock>
            <SnsBetweenLine />
          </SnsBlock>
          <SnsGitMargin>
            <a
              target="_blank"
              href="https://github.com/mju-likelion"
              title="멋쟁이 사자처럼 at 명지대 자연 깃허브"
              rel="noreferrer"
            >
              <SnsImage
                src="/images/sns-icon-github.svg"
                width={19}
                height={19}
                alt="멋쟁이 사자처럼 at 명지대 자연 깃허브"
              />
            </a>
          </SnsGitMargin>
        </MjuSnsWrapper>
      </MaxWidthWrapper>
    </FooterSelf>
  );
}

const FooterSelf = styled.footer`
  background-color: #141517;
`;

const MaxWidthWrapper = styled.div`
  height: 62px;
  display: flex;
  padding: 22px 0;
  max-width: 1024px;
  margin: auto;
  font-size: 16px;
  @media screen and (max-width: 424px) {
    max-width: 424px;
    height: 100px;
    padding: 23px 0;
    display: block;
    text-align: center;
  }
`;

const MjuLogo = styled.div`
  margin-left: 30px;
  margin-right: auto;
  @media screen and (max-width: 424px) {
    font-size: 15px;
    margin: auto;
  }
`;

const MjuSnsWrapper = styled.div`
  display: inline-flex;
  @media screen and (max-width: 424px) {
    padding-top: 20px;
  }
`;

const SnsBetweenLine = styled.div`
  margin-top: 8px;
  width: 35px;
  height: 2px;
  background-color: #fff;
  @media screen and (max-width: 424px) {
    margin-top: 8px;
    width: 10px;
  }
`;

const SnsBlock = styled.div`
  margin-right: 10px;
`;

const SnsGitMargin = styled.div`
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 3;
  }
`;

const SnsImage = styled.img`
  height: 19px;
  width: 19px;
  @media screen and (max-width: 424px) {
    height: 15px;
    width: 15px;
  }
`;

export default Footer;
