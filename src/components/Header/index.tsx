import Modal from "@lib/DesignSystem/Modal/Modal";
import React, { ReactElement, useState } from "react";
import useUser from "src/hooks/useUser";
import { useSWRConfig } from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import { theme } from "@styles/theme";
import Login from "../Login";
import Verify from "../Verify";

interface Props {
  setComponentText: (s: string) => void;
  setShow: (b: boolean) => void;
}

interface ComponentType {
  [s: string]: {
    title: string;
    component: ({ setComponentText, setShow }: Props) => ReactElement;
  };
}

const InputComponent: ComponentType = {
  Login: {
    title: "로그인",
    component: Login,
  },
  Verify: {
    title: "회원가입",
    component: Verify,
  },
};

function Header() {
  const [componentText, setComponentText] = useState<string>("Login");
  const [show, setShow] = useState<boolean>(false);
  const { user, isLoading, isError, isAdmin } = useUser("/api/user/me");
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const { title } = InputComponent[componentText];
  const StepComponent = InputComponent[componentText].component;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Self>
        <button type="button" onClick={() => router.push("/")}>
          LIKELION | MJU{" "}
        </button>
        <div>
          {!isError && !user && (
            <>
              <button
                type="button"
                onClick={() => {
                  setShow(true);
                  setComponentText("Verify");
                }}
              >
                회원가입
              </button>
              |
              <button
                type="button"
                onClick={() => {
                  setShow(true);
                  setComponentText("Login");
                }}
              >
                로그인
              </button>
            </>
          )}
          {user && (
            <p>
              {isAdmin ? "운영진" : "회원"}&nbsp;
              <Name>{user}</Name>님
            </p>
          )}
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
        <StepComponent setComponentText={setComponentText} setShow={setShow} />
      </Modal>
    </>
  );
}

const Self = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;

  padding: 10px 60px;
  font-size: 16px;

  button {
    color: white;
    padding: 0px 10px;
  }

  @media screen and (max-width: 424px) {
    font-size: 15px;
    padding: 20px 10px;
  }
`;

const Name = styled.span`
  color: ${theme.colors.primary.orange};
`;

export default Header;
