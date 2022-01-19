import styled from "styled-components";

function Header() {
  return (
    <Self>
      <Left>LIKELION | MJU </Left>
      <Right> 회원가입|로그인 </Right>
    </Self>
  );
}

const Self = styled.div`
  justify-content: space-between;
  font-size: 30px;
  display: flex;
  align-items: center;
  padding: 10px 60px;
  @media screen and (max-width: 424px) {
    padding: 5px 30px;
  }
`;

const Left = styled.div`
  @media screen and (max-width: 424px) {
    font-size: 10px;
  }
`;

const Right = styled.div`
  @media screen and (max-width: 424px) {
    font-size: 10px;
  }
`;

export default Header;
