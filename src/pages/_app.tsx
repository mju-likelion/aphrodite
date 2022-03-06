import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@styles/global-styles";
import { theme } from "@styles/theme";
import CustomHead from "src/components/CustomHead";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Notice from "@components/Notice";
import { GA_TRACKING_ID, pageview } from "@lib/GTag";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const { asPath, pathname } = router;
    if (pathname === "/" && asPath !== "/") {
      router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CustomHead />
        <GlobalStyle />
        <AppContainer>
          <Header />
          {/* 채널톡 script */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                    var w = window;
                    if (w.ChannelIO) {
                    return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                  }
                  var ch = function() {
                    ch.c(arguments);
                  };
                  ch.q = [];
                  ch.c = function(args) {
                    ch.q.push(args);
                  };
                  w.ChannelIO = ch;
                  function l() {
                    if (w.ChannelIOInitialized) {
                      return;
                    }
                    w.ChannelIOInitialized = true;
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                    s.charset = 'UTF-8';
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                  }
                  if (document.readyState === 'complete') {
                    l();
                  } else if (window.attachEvent) {
                    window.attachEvent('onload', l);
                  } else {
                    window.addEventListener('DOMContentLoaded', l, false);
                    window.addEventListener('load', l, false);
                  }
                })();
                ChannelIO('boot', {
                  "pluginKey": "${process.env.NEXT_PUBLIC_CHANNEL_IO_PLUGIN_KEY}"
                });
              `,
            }}
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Component {...pageProps} />
          <Footer />
          <Notice />
        </AppContainer>
      </ThemeProvider>
      <div id="modal" />
    </RecoilRoot>
  );
}

const AppContainer = styled.main`
  width: 100%;
  max-width: 1024px;
  height: 100%;

  margin: 0 auto;
`;

export default MyApp;
