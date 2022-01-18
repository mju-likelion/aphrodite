import { NavBar } from "@components/NavBar";
import styled from "styled-components";
import { Button } from "@lib/DesignSystem/Button";

const Div = styled.div`
	font-size: 20px;
	color: blue;
`;

function Home({ theme }) {
	return (
		<Div>
			index
			<NavBar />
			<Button ghost color="#FFFFFF" size="small" />
			<Button ghost color="#FFFFFF" size="medium" />
			<Button ghost color="#FFFFFF" size="large" />
			<div>
				<Button color="#FFFFFF" size="small" />
				<Button color="#FFFFFF" size="medium" />
				<Button color="#FFFFFF" size="large" />
			</div>
		</Div>
	);
}

export default Home;