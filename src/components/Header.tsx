import styled from "styled-components";

function Header() {
  return (
    <Self>
      <div>LIKELION | MJU </div>
      <div> 회원가입|로그인 </div>
    </Self>
  );
}

const Self = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;

  padding: 10px 60px;

  @media screen and (max-width: 424px) {
    padding: 5px 30px;

    font-size: 15px;

    padding: 20px 10px;
  }
`;

export default Header;
