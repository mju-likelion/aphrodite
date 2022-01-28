import styled from "styled-components";
import { theme } from "@styles/theme";

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
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.facebook.com/likelionatmju/"
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
              rel="noreferrer noopener"
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
              rel="noreferrer noopener"
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
  width: 100%;

  display: flex;
`;

const MaxWidthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 22px 10px;

  font-size: 16px;

  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    padding: 23px 0;

    flex-direction: column;
  }
`;

const MjuLogo = styled.div`
  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    font-size: 15px;
    margin: auto;
  }
`;

const MjuSnsWrapper = styled.div`
  display: inline-flex;

  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    padding-top: 20px;
  }
`;

const SnsBetweenLine = styled.div`
  width: 35px;
  height: 2px;

  margin-top: 8px;

  background-color: #fff;

  @media screen and (max-width: ${theme.breakPoint.mobile}) {
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

  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    height: 15px;
    width: 15px;
  }
`;

export default Footer;
