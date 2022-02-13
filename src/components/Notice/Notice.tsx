import { theme } from "@styles/theme";
import React from "react";
import { useRecoilValue } from "recoil";
import { isShowNotice, noticeMessage } from "src/atoms/notice";
import styled, { css } from "styled-components";

function Notice() {
  const message = useRecoilValue(noticeMessage);
  const showNotice = useRecoilValue(isShowNotice);

  return (
    <Container isShow={showNotice}>
      <Message>{message}</Message>
    </Container>
  );
}

const Container = styled.div<{ isShow: boolean }>`
  display: block;

  width: 400px;
  position: fixed;
  top: 100px;
  left: calc(50% - 200px);

  text-align: center;

  transition: all 0.7s 0.1s ease-in;

  ${({ isShow }) =>
    isShow
      ? css`
          visibility: "visible";
          opacity: 1;
        `
      : css`
          visibility: "hidden";
          opacity: 0;
        `};

  @media screen and (max-width: ${theme.breakPoint.mobile}) {
    width: 250px;
    left: calc(50% - 125px);
  }
`;

const Message = styled.p`
  padding: 5px;

  border-radius: 8px;
  background-color: ${theme.colors.primary.orange};
`;

export default Notice;
