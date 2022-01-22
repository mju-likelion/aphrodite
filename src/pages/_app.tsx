import styled, { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@styles/global-styles";
import { theme } from "@styles/theme";
import CustomHead from "src/components/CustomHead";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomHead />
        <GlobalStyle />
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
      <div id="modal" />
    </>
  );
}

const AppContainer = styled.main`
  width: 100%;
  max-width: 1024px;
  height: 100%;

  margin: 0 auto;
`;

export default MyApp;
