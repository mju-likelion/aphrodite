import styled from "styled-components";

const Div = styled.div`
	font-size: 20px;
	color: ${(props) => props.theme.colors.secondary.orangeD1};
`;

function Home() {
	return <Div>index</Div>;
}

export default Home;
