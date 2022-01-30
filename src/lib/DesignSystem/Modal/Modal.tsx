import styled from "styled-components";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import Portal from "./Portal";
import React from "react";

type ModalProps = {
  children?: React.ReactNode;
  show: boolean;
  title: string;
  onClose: () => void;
  width?: number;
  height?: number;
};

type StylesProps = {
  width?: number;
  height?: number;
};

function Modal({ children, show, title, onClose, ...props }: ModalProps) {
  const { ...styles } = props;
  const { width, height } = styles;

  return (
    <Portal>
      {show && (
        <Container>
          <Inner width={width} height={height}>
            <ModalHeader title={title} onClose={onClose} />
            <ModalBody>{children}</ModalBody>
          </Inner>
        </Container>
      )}
    </Portal>
  );
}

Modal.defaultProps = {};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;

  overflow-y: hidden;

  background-color: rgba(0, 0, 0, 0.7);
`;

const Inner = styled.div<StylesProps>`
  width: ${({ width }) => (width ? `${width}px` : "50%")};
  height: ${({ height }) => (height ? `${height}px` : "20%")};

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.secondary.black};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 90%;
  }
`;

export default Modal;
