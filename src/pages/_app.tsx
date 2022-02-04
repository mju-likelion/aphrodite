import styled, { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@styles/global-styles";
import { theme } from "@styles/theme";
import CustomHead from "src/components/CustomHead";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { SWRConfig } from "swr";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url: string) =>
            axios.get(url).then((res) => ({ ...res.data, jwt: "1q2w3e4r" })),
        }}
      >
        <ThemeProvider theme={theme}>
          <CustomHead />
          <GlobalStyle />
          <AppContainer>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </AppContainer>
        </ThemeProvider>
      </SWRConfig>
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
