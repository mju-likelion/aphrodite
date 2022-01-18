import styled, { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
