import styled from "styled-components";

const Self = styled.div`
	justify-content: space-between;
	font-size: 24px;
	display: flex;
	align-items: center;
	padding: 10px 60px;
	@media screen and (max-width: 424px) {
		padding: 5px 30px;
	}
`;
const Logo = styled.img`
	padding-top: 2px;
	margin-right: 2px;
	height: 25px;
	width: 25px;
	@media screen and (max-width: 424px) {
		hidden: none;
	}
`;
const HamburgerBar = styled.img`
	background-image: url(/images/menu.svg);
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

function Header() {
	return (
		<>
			<Self>
				<Left>LIKELION | MJU </Left>
				<Right> 회원가입|로그인 </Right>
			</Self>
		</>
	);
}

export default Header;
