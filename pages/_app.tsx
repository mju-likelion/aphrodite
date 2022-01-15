import styled, { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global-styles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppContainer>
				<Component {...pageProps} />
			</AppContainer>
		</ThemeProvider>
	);
}

const AppContainer = styled.div`
	border: 1px solid white;
	width: 100%;
	heigth: 100%;
`;

export default MyApp;
