import Modal from "@lib/DesignSystem/Modal/Modal";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";

interface Props {
  setComponentText: (s: string) => void;
}

interface ComponentType {
  [s: string]: {
    title: string;
    component: ({ setComponentText }: Props) => ReactElement;
  };
}

const InputComponent: ComponentType = {
  ["Login"]: {
    title: "로그인",
    component: Login,
  },
  ["SignUp"]: {
    title: "회원가입",
    component: SignUp,
  },
};

function Header() {
  const [componentText, setComponentText] = useState<string>("Login");
  const [show, setShow] = useState<boolean>(false);

  const title = InputComponent[componentText].title;
  const StepComponent = InputComponent[componentText].component;

  return (
    <>
      <Self>
        <div>LIKELION | MJU </div>
        <div>
          <button
            onClick={() => {
              setShow(true);
              setComponentText("SignUp");
            }}
          >
            회원가입
          </button>
          |
          <button
            onClick={() => {
              setShow(true);
              setComponentText("Login");
            }}
          >
            로그인
          </button>
        </div>
      </Self>
      <Modal
        show={show}
        width={376}
        height={456}
        title={title}
        onClose={() => {
          setShow(false);
        }}
      >
        {/* 이거 에러 어케해야함 */}
        <StepComponent setComponentText={setComponentText} />
      </Modal>
    </>
  );
}

const Self = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 60px;
  font-size: 20px;

  button {
    color: white;
    padding: 0px 10px;
  }

  @media screen and (max-width: 424px) {
    font-size: 15px;
    padding: 20px 10px;
  }
`;

export default Header;
