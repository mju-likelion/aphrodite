import React from "react";
import styled, { DefaultTheme } from "styled-components";

type Props = {
  title: string;
  onClose: () => void;
};

function ModalHeader({ title, onClose }: Props) {
  return (
    <Container>
      <h4>{title}</h4>
      <button onClick={onClose}>𝖷</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30%;
  max-height: 90px;

  position: relative;

  display: inline-flex;
  align-items: center;

  h4 {
    width: 100%;
    text-align: center;
    font-size: 22px;
  }

  button {
    position: absolute;

    top: 15%;
    right: 5%;

    font-size: 20px;

    color: ${({ theme }) => theme.colors.secondary.white};

    justify-self: flex-end;
  }
`;

export default ModalHeader;
