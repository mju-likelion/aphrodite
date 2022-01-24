import Modal from "@lib/DesignSystem/Modal/Modal";
import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Self>
        <div>LIKELION | MJU </div>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          {" "}
          회원가입|로그인{" "}
        </button>
      </Self>
      <Modal
        show={show}
        width={376}
        height={456}
        title="로그인"
        onClose={() => {
          setShow(false);
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
  }

  @media screen and (max-width: 424px) {
    font-size: 15px;
    padding: 20px 10px;
  }
`;

export default Header;
