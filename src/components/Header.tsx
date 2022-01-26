import Modal from "@lib/DesignSystem/Modal/Modal";
import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";

function Header() {
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);

  return (
    <>
      <Self>
        <div>LIKELION | MJU </div>
        <div>
          <button
            onClick={() => {
              setSignup(true);
            }}
          >
            회원가입
          </button>
          |
          <button
            onClick={() => {
              setLogin(true);
            }}
          >
            로그인
          </button>
        </div>
      </Self>
      <Modal
        show={isSignup}
        width={376}
        height={456}
        title="회원가입"
        onClose={() => {
          setSignup(false);
        }}
      >
        <SignUp />
      </Modal>
      <Modal
        show={isLogin}
        width={376}
        height={456}
        title="로그인"
        onClose={() => {
          setLogin(false);
        }}
      >
        <Login />
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
