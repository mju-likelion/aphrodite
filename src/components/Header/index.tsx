import Modal from "@lib/DesignSystem/Modal/Modal";
import React, { ReactElement, useState } from "react";
import useUser from "src/hooks/useUser";
import { useSWRConfig } from "swr";
import styled from "styled-components";
import Login from "../Login";
import Verify from "../Verify";
import { useRouter } from "next/router";

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
  ["Verify"]: {
    title: "회원가입",
    component: Verify,
  },
};

function Header() {
  const [componentText, setComponentText] = useState<string>("Login");
  const [show, setShow] = useState<boolean>(false);
  const { user, isLodaing, isError } = useUser("https://randomuser.me/api/");
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const title = InputComponent[componentText].title;
  const StepComponent = InputComponent[componentText].component;

  return (
    <>
      <Self>
        <button onClick={() => router.push("/")}>LIKELION | MJU </button>
        <div>
          <button
            onClick={() => {
              setShow(true);
              setComponentText("Verify");
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
