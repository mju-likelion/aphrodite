import React, { useState } from "react";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

import Modal from "@lib/DesignSystem/Modal/Modal";
import { removeCookie } from "@lib/Cookie";
import useUser from "@hooks/useUser";
import { theme } from "@styles/theme";

import Login from "../Login";
import Verify from "../Verify";

function Header() {
  const [componentText, setComponentText] = useState<string>("Login");
  const [show, setShow] = useState<boolean>(false);
  const { user, error, isAdmin } = useUser("/api/user/me");
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const title = componentText === "Login" ? "로그인" : "회원가입";
  const StepComponent =
    componentText === "Login" ? (
      <Login setComponentText={setComponentText} setShow={setShow} />
    ) : (
      <Verify setComponentText={setComponentText} />
    );

  function handleLogOut() {
    removeCookie("jwt");
    mutate("/api/user/me");
  }

  return (
    <>
      <Self>
        <button type="button" onClick={() => router.push("/")}>
          LIKELION | MJU{" "}
        </button>
        <div>
          {!error && !user && (
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
            <NameContainer>
              {isAdmin ? "운영진" : "회원"}&nbsp;
              <Name>{user}</Name>님 |&nbsp;
              <button type="button" onClick={handleLogOut}>
                로그아웃
              </button>
            </NameContainer>
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
        {StepComponent}
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

const NameContainer = styled.div`
  button {
    color: white;
    padding: 0;
  }
`;

const Name = styled.span`
  color: ${theme.colors.primary.orange};
`;

export default Header;
